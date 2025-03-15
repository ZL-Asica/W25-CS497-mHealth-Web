interface PersonalLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

const PersonalLink = ({ href, className, children }: PersonalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      title={
        children !== undefined && children !== null
          ? `Visit ${children?.toString()}'s personal website`
          : ''
      }
      rel="noopener noreferrer"
      className={`text-sora-400 font-medium underline underline-offset-2 decoration-wavy transition-all duration-300 hover:text-sora-300 hover:decoration-dashed ${className}`}
    >
      {children}
    </a>
  )
}

export default PersonalLink
