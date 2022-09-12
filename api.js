var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.sportsdata.io/v3/mlb/scores/json/AreAnyGamesInProgress', "Ocp-Apim-Subscription-Key: a69d02c0ac63490988ee6415afef4318")

request.onload = function () {
  // Begin accessing JSON data here
  }

// Send request
request.send()