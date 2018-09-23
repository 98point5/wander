import React from 'react';
import axios from 'axios';
import Start from './Start.jsx';
import Search from './Search.jsx';
import Map from './Map.jsx';
import NavBar from './NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'start',
      destination: '',
    };
    this.handleWander = this.handleWander.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.inputSearch = this.inputSearch.bind(this);
  }

  handleWander() {
    //call specifc route to unlock
    //change page state

    this.setState({
      page: 'search',
    });
    console.log(this.state);
  }

  handleSearch() {
    this.setState({
      page: 'map',
    });
    console.log('MAP', this.state);
  }

  inputSearch(e) {
    this.setState({
      destination: e.target.value,
    });
    console.log(this.state);
  }

  render() {
    if (this.state.page === 'start') {
      return (
        <div>
          <NavBar />
          <Start changePage={this.handleWander} />
        </div>
      );
    }

    if (this.state.page === 'search') {
      return (
        <div>
          <NavBar />
          <Search
            handleSearch={this.handleSearch}
            inputSearch={this.inputSearch}
          />
        </div>
      );
    }

    if (this.state.page === 'map') {
      return (
        <div>
          <NavBar />
          <Map destination={this.state.destination} />
        </div>
      );
    }
  }
}

export default App;
