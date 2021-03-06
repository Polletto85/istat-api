const fetch = require('node-fetch');


async function getAllProvince() {
    let url = "https://api.pollo.host/istat-api/?query=province";
    let settings = {method: "Get"};
    return fetch(url, settings)
       .then(res => {return res.json()})
}

async function getProvinceOf(regione){
    let url = "https://api.pollo.host/istat-api/?query=provincediregione&regione="+regione;
    let settings = {method: "Get"};
    return fetch(url, settings)
        .then(res => {return res.json()})
}
module.exports = {
    getAllProvince,
    getProvinceOf
}
