import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className='container my-3 mt-5'>
                <div className="card" style={{ width: "18rem" }}>
                    <img
                        src={imageUrl ? imageUrl : "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg"}
                        onError={(e) => e.target.src = "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg"}
                        alt="News thumbnail"
                    />

                    <div className="card-body">
                        <h5 className="card-title">{title}..</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
