const { nearBySearchFunc } = require('./NearBySearch.js');
// const {
// 	clientId,
// 	clientSecret
// } = require('./secrets.js');

const connect = (req, res) => {};

const unlock = (req, res) => {};

const lock = (req, res) => {};

const locate = (req, res) => {};

const getRoutesById = (req, res) => {};

const getRoutesByLocation = (req, res) => {};
const getPlacesNearby = (req, res) => {
  const parameters = {
    location: [req.params.lat, req.params.long],
    keyword: req.params.keyword,
  };
  nearBySearchFunc(parameters, result => res.send(result));
};

module.exports = {
  connect,
  unlock,
  lock,
  locate,
  getRoutesById,
  getRoutesByLocation,
  getPlacesNearby,
};
