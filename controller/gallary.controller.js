'use strict'

const Gallary=require('../models/Gallary.model')
const axios = require('axios');


const gallaryController = (req, res) => {
    let search = req.query.q
    let options = {
        method: 'GET',
        url: `https://bing-image-search1.p.rapidapi.com/images/search?q=${search}`,

        headers: {
            'x-rapidapi-key': '1c8c7d3c55mshed867f2dfd41e72p162415jsnae49af3d33a9',
            'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com'
        },

    };

    axios.request(options).then(response => {
        // console.log(response.data);

        let gallary = response.data.value.map(item => {
            return new Gallary(item)
        })
        res.json(gallary)

    }).catch((error) => {
        console.error(error);
    });
}

module.exports=gallaryController;