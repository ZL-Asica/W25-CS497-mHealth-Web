import type { ReactElement } from 'react'
import { useTheme } from '@zl-asica/react'
import { ChartBar, ClipboardCheck, FlaskConical, Github, Moon, Sun, UsersRound } from 'lucide-react'
import { Fragment } from 'react'

import SmoothScrollLink from '../SmoothScrollLink'

interface MenuItem {
  href: string
  label: string
  icon: ReactElement | undefined
}

interface HeaderMenuProps {
  isMobile: boolean
  ulClassName?: string
  onClickHandler?: () => void
}

const HeaderMenu = ({ isMobile, ulClassName, onClickHandler }: HeaderMenuProps) => {
  const menuItems: MenuItem[] = [
    { href: '#methodology', label: 'Method', icon: <FlaskConical /> },
    { href: '#findings', label: 'Findings', icon: <ChartBar /> },
    { href: '#conclusion', label: 'Conclusion', icon: <ClipboardCheck /> },
    { href: '#team', label: 'Team', icon: <UsersRound /> },
  ]
  const { isDarkTheme, toggleTheme } = useTheme()

  return (
    <ul className={`gap-4 ${ulClassName}`}>
      {menuItems.map(item => (
        <Fragment key={item.href}>
          <li
            className="group relative flex w-full items-center justify-center rounded-lg hover:bg-grayfrom-gray-300"
          >
            <SmoothScrollLink
              href={item.href}
              title={item.label}
              className="relative flex w-full items-center gap-4 px-4 py-3 text-lg font-medium no-underline transition-all duration-300 ease-in-out group-hover:text-sakura-300"
              onClick={onClickHandler}
            >
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-125">
                {item.icon}
              </span>
              {item.label}
            </SmoothScrollLink>
          </li>

          {/* Mobile - Divider */}
          {isMobile && (
            <li className="w-full" aria-hidden>
              <div className="h-[1px] w-full bg-gradient-to-r from-gray-500 via-sakura-300 to-gray-500" />
            </li>
          )}
        </Fragment>
      ))}

      {/* Theme Switch */}
      <li className={`${isMobile ? 'mt-4 flex w-full justify-around' : 'flex justify-center gap-4'}`}>
        <a
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          title="Github Repository"
          href="https://github.com/ZL-Asica/W25-CS497-mHealth-Web"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="flex h-6 w-6 items-center justify-center text-gray-600 transition-transform duration-300 ease-in-out hover:text-sakura-300 group-hover:scale-125 dark:text-gray-300 dark:hover:text-sakura-300">
            <Github className="h-full w-full" />
          </span>
        </a>
        <button
          type="button"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-200 hover:cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Toggle Theme"
          onClick={() => {
            toggleTheme()
            onClickHandler && onClickHandler()
          }}
        >
          <span className="flex h-6 w-6 items-center justify-center transition-transform duration-300 ease-in-out hover:text-sakura-300 group-hover:scale-125 ">
            {isDarkTheme ? <Sun className="h-full w-full" /> : <Moon className="h-full w-full" />}
          </span>
        </button>
      </li>
    </ul>
  )
}

export default HeaderMenu
