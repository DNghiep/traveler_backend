const fetch = require('node-fetch');

const HOSTAPI = 'http://localhost:3000/api/search/';


async function getStationId(stationName){
    const fetchAddr = `${HOSTAPI}getstation`;
    let _id = '';
    await fetch(fetchAddr, {
        method: 'post',
        body:    JSON.stringify({stationName: stationName}),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => _id = json._id);
    return _id;
}

async function search(fromStationName, toStationName, depart_time){
    const fetchAddr = `${HOSTAPI}`;
    const body = new Object();
    let result = [];
    if(fromStationName) body.from_id = await getStationId(fromStationName);
    if(toStationName) body.to_id = await getStationId(toStationName);
    if(depart_time) body.depart_time = depart_time;
    console.log(body);
    fetch(fetchAddr, {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => {
        console.log(json);
        result = json;
    })
    return result;
}

async function searchToDirect(fromStationName, toStationName, depart_time, re_depart_time){
    const go = await search(fromStationName, toStationName, depart_time);
    const back = await search(fromStationName, toStationName, re_depart_time);
    const result = go.concat(back);
    return result;
}

search("Bac Lieu", "Ho Chi Minh", new Date(2019, 9, 10, 0, 0, 0, 0));