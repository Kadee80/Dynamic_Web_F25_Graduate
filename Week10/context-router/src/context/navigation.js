import {createContext, useState, useEffect} from 'react'
const NavigationContext = createContext()

const NavigationProvider = ({children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // add an event listener for when the use hits the back button
  useEffect(() => {
    const handler = () => {
      // place the current path in state
      setCurrentPath(window.location.pathname)
    }
    // watch for interactions with our routes
    // call our handler and set the current path in state to whatever was returned from popState
    window.addEventListener('popstate', handler)
    // whenever we add an event listener in useEffect we also need to return a cleanup function
    return () => {
      window.removeEventListener('popstate', handler)
    }
  }, [])

  // this is how we change a page/route
  const navigate = (to) => {
    // updates our navigation in our browser window
    window.history.pushState({}, '', to)
    // update our state, trigger a rerender
    setCurrentPath(to)
  }

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  )
}

export {NavigationProvider}
export default NavigationContext
