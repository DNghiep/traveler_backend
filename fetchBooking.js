const fetch = require('node-fetch');

const HOSTAPI = 'http://localhost:3000/api/booking/';


function booking(userId, tripId){
    const fetchAddr = `${HOSTAPI}${userId}-${tripId}`;
    fetch(fetchAddr)
    .then(res => res.json())
    .then(json => console.log(json));
}

booking('5cd652a7758acd4bd5776b29', '5cd64ee762b2b2467cfc5093');