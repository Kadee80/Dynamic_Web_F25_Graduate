import Link from './Link'

const LINKS = [
  {label: 'Cats', path: '/cats'},
  {label: 'Chickens', path: '/chickens'},
  {label: 'Cage', path: '/cage'},
  {label: 'Wu Tang', path: '/wu'},
]
const Menu = () => {
  // map through our Links array and render Link components
  const renderedLinks = LINKS.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    )
  })
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  )
}

export default Menu
