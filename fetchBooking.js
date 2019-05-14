const fetch = require('node-fetch');

const HOSTAPI = 'http://localhost:3000/api/booking/';


function booking(userId, tripId){
    const fetchAddr = `${HOSTAPI}${userId}-${tripId}`;
    fetch(fetchAddr)
    .then(res => {
        if(res.status == 503){
            console.log({status: 503});
            return {status: 503}
        }
        if(res.status == 400){
            console.log({status: 400});
            return {status: 400}
        }
        else return res.json();
    })
    .then(json => console.log(json));
}

booking('5cda65470eca3a15e03fedda', '5cda65470eca3a15e03fedde');