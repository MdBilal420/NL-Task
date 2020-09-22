import React , { useContext }from 'react';
import { ApiContext } from '../ApiContext';
import NewsArticle from './NewsArticle';


function News(props) {

    const {data}  = useContext(ApiContext);
    console.log(data);
    

    return (
        <div>          
            {data ? data.items.map(news => <NewsArticle data={news} key={news.id} />) : 'Loading'}
        </div>
    );
}

export default News
