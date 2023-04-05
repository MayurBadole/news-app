import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    let url =
      " https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=32c18d443ff74d52827d799be96de5db";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headline News</h2>

        {/* one row inside 3*4 ka column */}

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgurl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
