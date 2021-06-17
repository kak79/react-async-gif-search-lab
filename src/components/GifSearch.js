// will pass down a submit handler function to GifSearch as a prop

import React from 'react'

class GifSearch extends React.Component {

  state = {
    search: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.search)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.search} 
            onChange={e => this.setState({search: e.target.value})} 
          />
          <input 
            type="submit"
          />
        </form>
      </div>
    )
  }

}

export default GifSearch;