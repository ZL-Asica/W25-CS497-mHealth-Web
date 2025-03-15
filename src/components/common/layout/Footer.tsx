import PersonalLink from '../PersonalLink'

const getYearDisplay = (): string => {
  const startYear = 2025
  const currentYear = new Date().getFullYear()

  if (startYear < currentYear) {
    return `${startYear} - ${currentYear}`
  }
  return String(currentYear)
}

const Footer = () => {
  return (
    <footer className="mb-1 mt-10 w-full">
      <div className="mx-auto max-w-7xl px-4 py-4 text-center">
        <p className="text-foreground-dark">
          {`© ${getYearDisplay()} `}
          <PersonalLink
            href="https://github.com/ZL-Asica/W25-CS497-mHealth-Web"
          >
            CUE!
          </PersonalLink>
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
