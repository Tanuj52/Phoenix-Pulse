import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor() {
        super();
        console.log("Hello I am a constructor form news component");
        this.state = {
            articles: [],
            loading: false
        }
    };

    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=apple&from=2024-10-29&to=2024-10-29&sortBy=popularity&apiKey=4991a0afe5e94f8ea28eb60875ac3b80";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    }

    render() {
        const filteredArticles = this.state.articles.filter(article => !article.url.includes("removed.com"));
        return (
            <div className='container my-3'>
                <h2>Phoenix Pulse - Top Headlines</h2>
                <div className='row'>
                    {filteredArticles.map((elements) => {
                        return (

                            <div className='col-md-4' key={elements.url}>
                                <NewsItem title={elements.title ? elements.title.slice(0, 50) : " "} description={elements.description ? elements.description.slice(0, 75) : " "} imageUrl={elements.urlToImage} newsUrl={elements.url} />
                            </div>
                        )
                    })};

                </div>
            </div>
        )
    }
}
