import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>Phoenix Pulse - Top Headlines</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <NewsItem title={"This is title"} description="This is my desc" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title={"This is title"} description="This is my desc" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title={"This is title"} description="This is my desc" />
                    </div>
                </div>
            </div>
        )
    }
}
