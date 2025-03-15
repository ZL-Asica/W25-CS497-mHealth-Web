import { backToTop, useIsBottom, useIsTop } from '@zl-asica/react'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const isVisible = !useIsTop(100)
  const isBottom = useIsBottom(100)

  return (
    <button
      type="button"
      onClick={backToTop()}
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-sakura-300 text-white shadow-lg transition-all duration-200 hover:scale-125 md:right-16 lg:right-20 xl:right-[calc((100vw-1400px)/2+10px)] ${
        isBottom ? 'bottom-12 scale-125' : ''
      }`}
      aria-label="Back to Top"
      hidden={!isVisible}
      disabled={!isVisible}
      aria-hidden={!isVisible}
    >
      <ArrowUp size={24} strokeWidth={3} />
    </button>
  )
}

export default BackToTop
