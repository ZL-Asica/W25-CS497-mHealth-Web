import { useClickOutside, useHideOnScrollDown, useToggle } from '@zl-asica/react'
import { Menu } from 'lucide-react'
import { useEffect, useRef } from 'react'

import SmoothScrollLink from '../SmoothScrollLink'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  const [isOpen, toggleOpen] = useToggle()
  const menuReference = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const isHeaderVisible = useHideOnScrollDown(headerRef)

  useClickOutside(menuReference, () => {
    if (isOpen) {
      toggleOpen()
    }
  })

  // Avoid scrolling when the menu is open (mobile)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 z-50 w-full shadow-md transition-transform duration-300 bg-background
        ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      {/* Navigation Menu */}
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 bg-background">
        {/* Logo */}
        <SmoothScrollLink
          href="/"
          aria-label="Navigate to Home Page"
          className="text-2xl font-bold no-underline transition-all duration-300 hover:text-sakura-300"
        >
          <h1>CUE!</h1>
        </SmoothScrollLink>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl shadow-md transition-transform duration-300 hover:scale-110 md:hidden dark:bg-white"
          onClick={toggleOpen}
          aria-label="Toggle menu"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls="mobile-menu"
        >
          {!isOpen && <Menu strokeWidth={2.5} className="text-background" />}
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={menuReference}
          className={`fixed right-0 top-0 z-50 h-screen w-1/2 bg-background shadow-lg transition-transform duration-300 ease-out md:hidden ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <HeaderMenu
            isMobile
            ulClassName="flex flex-col items-start gap-4 p-6"
            onClickHandler={toggleOpen}
          />
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 h-screen w-screen bg-black/70 transition-opacity duration-300"
            onClick={(event_) => {
              event_.preventDefault()
              event_.stopPropagation()
              toggleOpen()
            }}
            aria-hidden
          />
        )}

        {/* Desktop Menu */}
        <HeaderMenu
          isMobile={false}
          ulClassName="hidden md:flex md:gap-6"
        />
      </nav>
    </header>
  )
}

export default Header
