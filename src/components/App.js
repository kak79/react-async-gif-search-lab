import React from 'react'
import GifListContainer from '../containers/GifListContainer'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App


// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=hxIX3pAOA1Pgv6P85svTE2mhlL110kbD&rating=g