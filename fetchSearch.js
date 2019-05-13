const fetch = require('node-fetch');
 
function search(from,to ,start_date,end_date){
    let body = new Object()
    if (from) body.from= from;
    if (to) body.to= to;
    if (start_date) body.start_time= start_date;
    if (end_date) body.end_time= end_date;
    fetch('http://localhost:3000/api/search/', {
        
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
    
}

search('Vung tau',undefined,undefined,undefined);
