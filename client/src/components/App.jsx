import React from 'react';
import styled from 'styled-components';
import Start from './Start.jsx';
import Search from './Search.jsx';
import Map from './Map.jsx';
import NavBar from './NavBar';
import MyCars from './MyCars.jsx';
import frequentPlaces from '../../../server/sampleData.js'
import FrequentPlaces from './FrequentPlaces';

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
      endingPoint: '',
      places: frequentPlaces,
    };
    this.handleWander = this.handleWander.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.inputSearch = this.inputSearch.bind(this);
    this.returnToHome = this.returnToHome.bind(this);
    this.handleCarPick = this.handleCarPick.bind(this);
  }

  handleWander() {
    fetch('/wander/auth')
      .then(res => res.json())
      .then(res => {
        console.log(res.status);
        if (res.authUrl) {
          window.open(res.authUrl, 'authenticate');
        } else {
          this.setState({
            buttonLabel: 'LOGOUT',
            page: 'cars',
          });
        }
      });
  }

  handleSearch() {
    this.setState({
      page: 'places',
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

  getCarInfo(carId) {
    fetch('/wander/vehicles/' + carId + '/info')
      .then(res => res.json())
      .then(carInfo =>
        this.setState({
          cars: this.state.cars.concat(carInfo),
        })
      );
  }

  handleCarPick(carId) {
    fetch('/wander/vehicles/' + carId + '/locate')
      .then(res => res.json())
      .then(({ data }) => {
        let lat = Number(data.latitude).toFixed(6);
        let long = Number(data.longitude).toFixed(6);
        this.setState({
          startingPoint: lat + ',' + long,
        });
      });
  }

  handleCarUnlock(carId) {
    fetch('/wander/vehicles/' + carId + '/locate')
      .then(res => res.json())
      .then(({ data }) => {
        let lat = Number(data.latitude).toFixed(6);
        let long = Number(data.longitude).toFixed(6);
        this.setState({
          startingPoint: lat + ',' + long,
          page: 'locations',
        });
      })
      .then(() => {
        fetch('/wander/vehicles/' + carId + '/unlock').then(res =>
          alert('Car unlocked!')
        );
      });
  }

  handleDestinationPick({ latitude, longitude }) {
    let endingPoint = latitude + ',' + longitude;
    this.setState(
      {
        endingPoint: endingPoint,
      },
      this.getSuggestions
    );
  }

  getSuggestions() {
    fetch(
      '/wander/suggestions/' +
        this.state.startingPoint +
        '/' +
        this.state.endingPoint
    ).then(results => {
      //put tehm in da map yo
    });
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
      currentComponent = <MyCars handleSelect={this.handleCarPick} />;
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

    if (this.state.page === 'places') {
      currentComponent = (
        <Container>
          <Section>
            <FrequentPlaces places={this.state.places.frequentPlaces} />
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
