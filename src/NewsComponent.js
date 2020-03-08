import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';

function NewsComponent() {
  const [newsArticles, setNewsArticles] = useState([])

  useEffect(() => {

    setNewsArticles([]);

    var http = require('follow-redirects').http;

    var options = {
      'method': 'GET',
      'hostname': 'newsapi.org',
      'path': '/v2/top-headlines?country=us&apiKey=532ff97bcd94491dacb0015cf3629a4c',
      'headers': {
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        setNewsArticles(JSON.parse(body).articles);
      });
    });

    req.end();
  }, [])

  const totalNewsArticles = 7;

  return (
    newsArticles.slice(0, totalNewsArticles).map(x => {
      return <NewsArticle key={x.url} newsArticle={x} />
    })
  )
}

export default NewsComponent;
