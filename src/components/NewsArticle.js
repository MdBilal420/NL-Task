import React from 'react';
import Card from 'react-bootstrap/Card';
import Favorite from './Favorite';



function NewsArticle({data}) {
    return (
      <div className='col-md-6'>
        <div className='card mb-4 shadow-sm'>
          <div className='card-body'>
          <h5>{data.item.headline}</h5>
          <p><i className='fa fa-user'> {data.story['author-name']}</i></p>
          <div className='row'>
          <Card.Link href={data.story.url}> <i className='fa fa-link'>  Open Article</i></Card.Link>
          <Favorite />        
          </div>
          </div>
        </div>

      </div>        
    )
}

export default NewsArticle;