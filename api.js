var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.sportsdata.io/v3/mlb/odds/json/BettingPlayerPropsByGameID/{gameId}', Ocp-Apim-Subscription-Key: {key})

request.onload = function () {
  // Begin accessing JSON data here
  }
}

// Send request
request.send()