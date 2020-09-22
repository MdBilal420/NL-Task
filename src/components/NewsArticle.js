import React from 'react';

function NewsArticle({data}) {
    const ref = {data.items};
    return (
        <div>
            <h1>{data.item.headline}</h1>
            <a href={ref} target="_blank">
            
        </div>
    )
}

export default NewsArticle;