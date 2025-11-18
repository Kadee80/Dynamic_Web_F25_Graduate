import {Link} from 'react-router-dom'

import Panel from './Panel'

const Navbar = () => {
  // const activeClass = 'text-blue-500 font-bold decoration-solid'
  // const pendingClass = 'text-red-500'

  return (
    <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
      <Link to="/" className="text-blue-500">
        {' '}
        Buttons
      </Link>
      <Link to="/accordion" className="text-blue-500">
        Accordion
      </Link>
      <Link to="/dropdown" className="text-blue-500">
        Dropdown
      </Link>
      <Link to="/modal" className="text-blue-500">
        Modal
      </Link>
      <Link to="/counter" className="text-blue-500">
        Counter
      </Link>
      <Link to="/reducer" className="text-blue-500">
        CounterReducer
      </Link>
      <Link to="/immer" className="text-blue-500">
        Counter Immer
      </Link>
      {/* Add link to your component page for HW */}
    </Panel>
  )
}

export default Navbar
