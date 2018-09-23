import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Start from './Start.jsx';
import Search from './Search.jsx';
import Map from './Map.jsx';
import NavBar from './NavBar';

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: auto;
  width: 100%;
`;

const Section = styled.div`
  // position: absolute;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'start',
      destination: '',
      buttonLabel: '',
      startingPoint: '',
      endingPoint: ''
    };
    this.handleWander = this.handleWander.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.inputSearch = this.inputSearch.bind(this);
    this.returnToHome = this.returnToHome.bind(this);
  }

  handleWander(){
    fetch('/wander/auth')
    .then(res => res.json())
    .then(res => {
      console.log(res.status)
      if (res.authUrl) {
        window.open(res.authUrl,'authenticate')
      }else{
        this.setState({
          buttonLabel: 'LOGOUT',
          page: 'search'
        })
      }
    })
  }

  handleSearch() {
    this.setState({
      page: 'map',
    });
    console.log('MAP', this.state);
  }

  returnToHome() {
    this.setState({
      page: 'start',
    });
    console.log(this.state);
  }
  inputSearch(e) {
    this.setState({
      destination: e.target.value,
    });
    console.log(this.state);
  }

  handleCarPick(carId) {
    fetch('/wander/vehicles/:vehicleId/locate')
    .then (res => res.json())
    .then ({data} => {
      let lat = Number(data.latitude).toFixed(6);
      let long = Number(data.longitude).toFixed(6);
      this.setState({
        startingPoint: lat + ',' + long
      })
    })
  }

  render() {
    const whiteBackground = {
      border: '2px solid white',
      borderRadius: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    };

    let currentComponent;
    if (this.state.page === 'start') {
      currentComponent = (
        <div>
          <Start changePage={this.handleWander} />
        </div>
      );
    }

    if (this.state.page === 'cars') {
      currentComponent = (
        <MyCars handleSelect={this.handleCarPick} />
      )
    }

    if (this.state.page === 'search') {
      currentComponent = (
        <Container>
          <Section>
            <Search
              style={whiteBackground}
              handleSearch={this.handleSearch}
              inputSearch={this.inputSearch}
            />
          </Section>
        </Container>
      );
    }

    if (this.state.page === 'map') {
      currentComponent = (
        <div>
          <Map destination={this.state.destination} />
        </div>
      );
    }
    return (
      <div>
        <NavBar
          returnToHome={this.returnToHome}
          handleAuth={this.handleAuthentication}
          buttonLabel={this.state.buttonLabel}
        />
        {currentComponent}
      </div>
    );
  }
}

export default App;
