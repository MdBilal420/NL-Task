import React , { useContext }from 'react';
import { ApiContext } from '../ApiContext';
import NewsArticle from './NewsArticle';
// import SearchArticle from './SearchArticle';


function News(props) {

    const {data}  = useContext(ApiContext);
    //console.log(data);
    

    return (
        <React.Fragment>
        <h2 className='text-center mb-4'>All Stories</h2>
        <div className='row'>     
                 {data ? data.items.map(news => (
                 <NewsArticle data={news} key={news.id} />)) 
                 : 'Loading'}
        </div>
        </React.Fragment>
        
    );
}

export default News
