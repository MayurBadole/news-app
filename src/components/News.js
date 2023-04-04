import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headline News</h2>

        {/* one row inside 3*4 ka column */}

        <div className="row">
          <div className="col-md-4">
            <NewsItem title="my title" description=" this is first" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" description=" this is first" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" description=" this is first" />
          </div>
        </div>
      </div>
    );
  }
}
