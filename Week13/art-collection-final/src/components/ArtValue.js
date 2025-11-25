import {useSelector} from 'react-redux'

const ArtValue = () => {
  const totalPrice = useSelector(({art: {data, searchTerm}}) => {
    return (
      data
        // first filter to match whats visible on the screen
        .filter((art) => {
          return art.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        // add up all of our art.prices of visible art
        .reduce((acc, art) => (acc += art.price), 0)
    )
  })
  return (
    <div className="pr-5 flex flex-row justify-end">
      <h3 className="text-lg">Total Price: ${totalPrice}</h3>
    </div>
  )
}

export default ArtValue
