// will render the gif --DONE

import React from 'react'


const GifList = (props) => {

  const images = props.gifs.map(gif => <img key={gif} src={gif.url} alt={gif.title}></img>)

  return(
    <div>
      {images}
    </div>
  )

}

export default GifList;