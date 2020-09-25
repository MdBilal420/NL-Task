import React, {Component} from 'react';
//import axios from 'axios';


class Search extends Component {
  state = { 
    storyTitle:''
   };

  //  findStory = (e) =>{
  //    e.preventDefault();

  //    axios.get(
  //     `https://nl-static-site-assets.s3.ap-south-1.amazonaws.com/reports.json`
  //     )
  //     .then((response) => {
  //      // console.log(response.data.items);
  //       //setData(response.data)
  //     })
  //   .catch((error) => console.log(error));
  // }

   onChange = e => {
     this.setState({ [e.target.name]:e.target.value});
   }

  render() { 
    return ( 
    
    <div> 
        <div className='container'>
          <form onSubmit={this.findStory}>
          <div className='form-group'>
          <input 
            type='text'
            className='form-control form-control-lg'
            placeholder='Search'
            name='storyTitle'
            value={this.state.storyTitle}
            onChange={this.onChange}
          />
          </div>
          <button 
            className='btn btn-dark btn-lg btn-block mb-5'
            type='submit'
          >
            Search 
          </button>
          </form>
        </div>
    </div> 
  );
  }
}
 
export default Search;