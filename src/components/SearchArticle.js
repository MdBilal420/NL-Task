import React, { useState } from 'react';


function SearchArticle({data}) {
    const article = data.item.headline  
    const [input,setInput] = useState('')
    
    const handleChange = (e) => {
      e.preventDefault();
      setInput(e.target.value);
    };
  
    if(input.length > 0){
      article = article.filter((i) => {
        return i.article.match(input);
      });
    }
    console.log(article['0'])
      return (
        <div>
          <input
            type='text'
            placeholder='Search'
            onChange={handleChange}
            value={input}
          />
          <li>{article}</li>
        </div>    
  )
}

export default SearchArticle;