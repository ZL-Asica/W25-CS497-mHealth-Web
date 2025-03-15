interface TOCLinkProps {
  item: TocItems
  activeSlug: string
  handleLinkClick: (slug: string) => void
}

const TOCLink = ({ item, activeSlug, handleLinkClick }: TOCLinkProps) => {
  const isActive = activeSlug === item.slug

  return (
    <li
      key={item.slug}
      className={`list-none py-1 text-base transition-all duration-200 ${
        isActive ? 'font-bold text-sakura-300' : 'text-foreground-dark'
      } `}
      style={{ marginLeft: `${(item.level - 2) * 0.8}em` }}
    >
      <a
        href={`#${item.slug}`}
        onClick={(event) => {
          event.preventDefault()
          handleLinkClick(item.slug)
        }}
        className="block break-words no-underline transition-all duration-200 hover:text-sakura-300"
      >
        {item.title}
      </a>
    </li>
  )
}

export default TOCLink
