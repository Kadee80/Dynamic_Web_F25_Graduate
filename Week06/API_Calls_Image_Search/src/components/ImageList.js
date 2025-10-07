import React from 'react'
import ImageItem from './ImageItem'
const ImageList = (props) => {
  const {images} = props
  return (
    <div>
      {images.map((img) => (
        <ImageItem key={img.id} image={img} />
      ))}
    </div>
  )
}

export default ImageList
