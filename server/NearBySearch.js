const querystring = require("querystring");
const https = require("https");

const HttpResponseProcessor = function (parseJson, callback) {
  return function (response) {
    var responseData = "";
    response.setEncoding("utf8");
    response.on("data", function (chunk) {
      responseData += chunk;
    });
    response.on("end", function () {
      if (parseJson) {
        //Google sometimes returns responses in HTML format (which is weird), so we need to guard from crashes
        try {
          responseData = JSON.parse(responseData);
          if (responseData.status !== 'OK') {
            var error = new Error(responseData.error_message || responseData.status);
            error.name = responseData.status;
            throw error;
          }
        }
        catch (e) {
          callback(e, {});
          return;
        }
      }
      callback(null, responseData);
    });
  };
};

const validate = {
  apiKey: function (apiKey) {
    if (!apiKey) {
      throw new Error('apiKey must not be null');
    }
  },

  outputFormat: function (outputFormat) {
    if (!['json', 'xml'].includes(outputFormat)) {
      throw new Error("outputFormat must be 'json' or 'xml'");
    }
  },
}

var NearBySearch = function (apiKey, outputFormat) {
  return function (parameters, callback) {
    validate.apiKey(apiKey);
    validate.outputFormat(outputFormat);
    parameters.key = apiKey;
    parameters.location = parameters.location || "-33.8670522,151.1957362";
    if (typeof parameters.location === "object") parameters.location = parameters.location.toString();
    if (!parameters.rankby) parameters.radius = parameters.radius || 500;

    const options = {
      hostname: "maps.googleapis.com",
      path: "/maps/api/place/nearbysearch/" + outputFormat + "?" + querystring.stringify(parameters)
    };
    const request = https.request(options, new HttpResponseProcessor(outputFormat === "json", callback));
    request.on("error", function (error) {
      callback(new Error(error));
    });
    request.end();
  };
};

var config = require("../config.js");

var nearBySearch = new NearBySearch(config.apiKey, config.outputFormat);

const nearBySearchFunc = (parameters, callback) => {
  nearBySearch(parameters, (error, response) => {
    if (error) throw error;
    callback(response.results)
  })
};

module.exports = {
  nearBySearchFunc
}
