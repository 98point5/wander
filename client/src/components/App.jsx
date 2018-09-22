import React from 'react';
import axios from 'axios';
import Start from './Start.jsx';
import Search from './Search.jsx';
import Map from './Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'start'
    };
  }

  render() {
    if (this.state.page === 'start') {
      return (
        <div>
          <Start />
        </div>
      );
    }

    if (this.state.page === 'search') {
      return (
        <div>
          <Search />
        </div>
      );
    }

    if (this.state.page === 'map') {
      return (
        <div>
          <Map />
        </div>
      );
    }
  }
}

export default App;