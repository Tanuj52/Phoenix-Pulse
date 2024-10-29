import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description } = this.props;
        return (
            <div className='container my-3 mt-5'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://cdn.24.co.za/files/Cms/General/d/12021/2d2f85cae93e45979a23433ace864f64.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsdetails" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
