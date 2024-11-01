import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
    constructor() {
        super();
        console.log("Hello I am a constructor form news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalArticles: 0
        }
    };

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4991a0afe5e94f8ea28eb60875ac3b80&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        });
    }

    handlePreviousClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4991a0afe5e94f8ea28eb60875ac3b80&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        });
    }
    handleNextClick = async () => {
        console.log("Next");
        if (this.state.page < Math.ceil(this.state.totalArticles / this.props.pageSize)) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4991a0afe5e94f8ea28eb60875ac3b80&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false

            });
        }

    }

    render() {
        const filteredArticles = this.state.articles.filter(article => !article.url.includes("removed.com"));
        return (
            <div className='container my-3'>
                <h1 className='text-center'>Phoenix Pulse - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && filteredArticles.map((elements) => {
                        return (
                            <div className='col-md-4' key={elements.url}>
                                <NewsItem title={elements.title ? elements.title.slice(0, 50) : " "} description={elements.description ? elements.description.slice(0, 75) : " "} imageUrl={elements.urlToImage} newsUrl={elements.url} />
                            </div>
                        )
                    })}
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="button " disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}> &laquo; Previous</button>
                    <button type="button" disabled={this.state.page >= Math.ceil((this.state.totalArticles) / (this.props.pageSize))} className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo; </button>
                </div>
            </div>
        )
    }
}
