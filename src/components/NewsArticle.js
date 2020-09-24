import React from 'react';
import Card from 'react-bootstrap/Card';



function NewsArticle({data}) {
  //const article = data.item.headline  
  
 // console.log(article)
    return (
      <div className='col-md-6'>
        <div className='card mb-4 shadow-sm'>
          <div className='card-body'>
          <h5>{data.item.headline}</h5>
          <p><i className='fa fa-user'> {data.story['author-name']}</i></p>
          <Card.Link href={data.story.url}> <i className='fa fa-link'>Open Article</i></Card.Link>
          </div>
        </div>

      </div>
//  <Container>
// <Row>
//   <Col sm>
//     <Card>
//         <Card.Body>
//             
//             <p>{data.story['author-name']}</p>
//             <Card.Link href={data.story.url}>Open Article </Card.Link>
//         </Card.Body>
//     </Card>
//   </Col>
  
// </Row>
// </Container> 
        
    )
}

export default NewsArticle;