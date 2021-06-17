// TO DO
// fetch first 3 gifs from api --DONE
// will store them in its state --DONE
// will pass that data to GifList --DONE
// will render <GifSearch />



import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs = () => {
    let searchQuery = "dolphins"
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=hxIX3pAOA1Pgv6P85svTE2mhlL110kbD&rating=g&limit=3`)
    .then(resp => resp.json())
    .then(data => {
      const urls = data.data.map((gif => gif.images.original.url))
      this.setState({
        gifs: urls
      },() => console.log(this.state))
    })

  }

  render() {
    return(
      <div>
        <GifSearch />
        <GifList 
          gifs={this.state.gifs}
        />
      </div>
    )
  }
}

export default GifListContainer;