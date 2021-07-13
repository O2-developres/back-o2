"use strict";



const News=require('../models/news.model')
const axios = require('axios');


const newsController = (req, res) => {
    let search = req.query.q;
    let options = {
        method: "GET",
        url: `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${search}`,
        params: {
            pageNumber: '1',
            pageSize: '50',
            autoCorrect: 'true',
            fromPublishedDate: 'null',
            toPublishedDate: 'null'
          },
        headers: {
            "x-rapidapi-key": "1c8c7d3c55mshed867f2dfd41e72p162415jsnae49af3d33a9",
            "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        },
    };

    axios.request(options).then((response) => {
            // console.log(response.data);
            let newsData = response.data.value.map((item) => {
                return new News(item);
            });
            res.json(newsData);
        })
        .catch((error) => {
            console.error(error);
        });
};


module.exports=newsController;