import { useEffect, useRef } from 'react'

const PLANES = [
  { depth: 'logo-parallax__plane--4', src: '/brand/logo-plan4-socle-placed.png' },
  { depth: 'logo-parallax__plane--3', src: '/brand/logo-plan3-props-placed.png' },
  { depth: 'logo-parallax__plane--2', src: '/brand/logo-plan2-oiseau-placed.png' },
  { depth: 'logo-parallax__plane--1', src: '/brand/logo-plan1-typo-placed.png' },
] as const

type OrientationEventConstructor = {
  requestPermission?: () => Promise<'granted' | 'denied'>
}

/**
 * Logo 4 plans — même config que documentation/mocup/accueil-v0.html :
 * idle desktop, drag souris, gyroscope au toucher (permission iOS au premier tap).
 */
export function ParallaxLogo() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el: HTMLDivElement = root

    let px = 0
    let py = 0
    let tx = 0
    let ty = 0
    let dragging = false
    let gyroActive = false
    let baseBeta: number | null = null
    let startX = 0
    let startY = 0
    let originX = 0
    let originY = 0
    const t0 = performance.now()
    const isCoarse =
      window.matchMedia('(pointer: coarse)').matches ||
      /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

    function clamp(v: number) {
      return Math.max(-1, Math.min(1, v))
    }

    function onOrientation(e: DeviceOrientationEvent) {
      if (e.gamma == null || e.beta == null) return
      if (baseBeta == null) baseBeta = e.beta
      tx = clamp(e.gamma / 22)
      ty = clamp((e.beta - baseBeta) / 22)
      gyroActive = true
    }

    function enableGyro() {
      window.addEventListener('deviceorientation', onOrientation, { passive: true })
    }

    async function requestGyroPermission() {
      const DOE = window.DeviceOrientationEvent as
        | (typeof DeviceOrientationEvent & OrientationEventConstructor)
        | undefined
      if (!DOE) return false
      try {
        if (typeof DOE.requestPermission === 'function') {
          const state = await DOE.requestPermission()
          if (state !== 'granted') return false
        }
        enableGyro()
        return true
      } catch {
        return false
      }
    }

    let frame = 0
    function tick(now: number) {
      if (!dragging && !gyroActive) {
        const t = (now - t0) / 1000
        tx = Math.sin(t * 0.7) * 0.18
        ty = Math.cos(t * 0.55) * 0.12
      }
      const ease = gyroActive || dragging ? 0.14 : 0.08
      px += (tx - px) * ease
      py += (ty - py) * ease
      el.style.setProperty('--px', px.toFixed(3))
      el.style.setProperty('--py', py.toFixed(3))
      frame = requestAnimationFrame(tick)
    }

    async function onPointerDown(e: PointerEvent) {
      if (isCoarse) {
        if (!gyroActive) await requestGyroPermission()
        return
      }
      dragging = true
      el.setPointerCapture(e.pointerId)
      startX = e.clientX
      startY = e.clientY
      originX = px
      originY = py
    }

    function onPointerMove(e: PointerEvent) {
      if (!dragging || isCoarse) return
      const rect = el.getBoundingClientRect()
      tx = clamp(originX + (e.clientX - startX) / (rect.width * 0.45))
      ty = clamp(originY + (e.clientY - startY) / (rect.height * 0.45))
    }

    function endDrag() {
      dragging = false
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', endDrag)
    el.addEventListener('pointercancel', endDrag)

    if (
      isCoarse &&
      window.DeviceOrientationEvent &&
      typeof (window.DeviceOrientationEvent as OrientationEventConstructor).requestPermission !==
        'function'
    ) {
      enableGyro()
    }

    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('deviceorientation', onOrientation)
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', endDrag)
      el.removeEventListener('pointercancel', endDrag)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="logo-parallax"
      role="img"
      aria-label="OrnithoDex — L'encyclopédie des oiseaux"
    >
      <div className="logo-parallax__scene">
        {PLANES.map((plane) => (
          <img
            key={plane.src}
            className={`logo-parallax__plane ${plane.depth}`}
            src={plane.src}
            alt=""
            width={1176}
            height={1114}
            draggable={false}
          />
        ))}
      </div>
    </div>
  )
}
