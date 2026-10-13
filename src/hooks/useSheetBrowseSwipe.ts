import { useEffect, useRef, type RefObject } from 'react'

const SWIPE_THRESHOLD = 60

/** Contrôles où le swipe ne doit pas capturer le pointeur (sinon casse details/audio/liens). */
const INTERACTIVE_SELECTOR =
  'a, button, summary, details, audio, input, select, textarea, label, .sheet__more'

type Options = {
  enabled: boolean
  onPrev: () => void
  onNext: () => void
  canPrev: boolean
  canNext: boolean
}

function isInteractiveTarget(target: EventTarget | null): boolean {
  return target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR))
}

/** Swipe horizontal sur la fiche ; ignore le scroll vertical dominant. */
export function useSheetBrowseSwipe(
  sheetRef: RefObject<HTMLElement | null>,
  { enabled, onPrev, onNext, canPrev, canNext }: Options,
) {
  const onPrevRef = useRef(onPrev)
  const onNextRef = useRef(onNext)
  const canPrevRef = useRef(canPrev)
  const canNextRef = useRef(canNext)
  onPrevRef.current = onPrev
  onNextRef.current = onNext
  canPrevRef.current = canPrev
  canNextRef.current = canNext

  useEffect(() => {
    const el = sheetRef.current
    if (!el || !enabled) return

    const swipe = { x0: 0, y0: 0, active: false, axis: null as null | 'x' | 'y' }

    function begin(x: number, y: number) {
      swipe.x0 = x
      swipe.y0 = y
      swipe.active = true
      swipe.axis = null
    }

    function move(x: number, y: number, ev?: Event) {
      if (!swipe.active) return
      const dx = x - swipe.x0
      const dy = y - swipe.y0
      if (!swipe.axis) {
        if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return
        swipe.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
      }
      if (swipe.axis !== 'x') return
      if (ev?.cancelable) ev.preventDefault()
      const atStart = !canPrevRef.current && dx > 0
      const atEnd = !canNextRef.current && dx < 0
      const resist = atStart || atEnd ? 0.25 : 1
      el!.classList.add('is-dragging')
      el!.style.transform = `translateX(${dx * resist}px)`
    }

    function end(x: number) {
      if (!swipe.active) return
      const dx = x - swipe.x0
      const axis = swipe.axis
      swipe.active = false
      swipe.axis = null
      el!.classList.remove('is-dragging')
      el!.style.transform = ''
      if (axis !== 'x') return
      if (dx <= -SWIPE_THRESHOLD && canNextRef.current) onNextRef.current()
      else if (dx >= SWIPE_THRESHOLD && canPrevRef.current) onPrevRef.current()
    }

    function onTouchStart(e: TouchEvent) {
      if (e.touches.length !== 1) return
      if (isInteractiveTarget(e.target)) return
      begin(e.touches[0]!.clientX, e.touches[0]!.clientY)
    }

    function onTouchMove(e: TouchEvent) {
      if (e.touches.length !== 1) return
      move(e.touches[0]!.clientX, e.touches[0]!.clientY, e)
    }

    function onTouchEnd(e: TouchEvent) {
      end(e.changedTouches[0]!.clientX)
    }

    function onPointerDown(e: PointerEvent) {
      if (e.pointerType === 'touch') return
      if (isInteractiveTarget(e.target)) return
      el!.setPointerCapture(e.pointerId)
      begin(e.clientX, e.clientY)
    }

    function onPointerMove(e: PointerEvent) {
      if (e.pointerType === 'touch' || !swipe.active) return
      move(e.clientX, e.clientY, e)
    }

    function onPointerUp(e: PointerEvent) {
      if (e.pointerType === 'touch') return
      end(e.clientX)
    }

    function cancel() {
      end(swipe.x0)
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    el.addEventListener('touchcancel', cancel)
    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', cancel)

    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('touchcancel', cancel)
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', cancel)
      el.classList.remove('is-dragging')
      el.style.transform = ''
    }
  }, [sheetRef, enabled])
}
