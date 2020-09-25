import React from 'react'


class Favorite extends React.Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
   
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }


    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Favorite',JSON.stringify(nextState.liked));
    }
    
    
    render() {
     // const text = this.state.liked ? 'liked' : 'haven\'t liked';
      const label = this.state.liked ? 'Unlike' : 'Like'
      if(label === 'Like'){
        return (
            <div>
                <button className='button' onClick={this.handleClick}>
                    <i className='fa fa-heart fa-lg' style={{color:'#33c3f0'}}></i>
                </button>          
            </div>
            );
        }

        if(label === 'Unlike'){
            return (
                <div>
                    <button className='button' onClick={this.handleClick}>
                        <i className='fa fa-heart fa-lg' style={{color:'red'}}></i>
                    </button>          
                </div>
                );
          }
      
    }
  }
  
  

  export default Favorite