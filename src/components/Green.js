import React from 'react'
import Footer from './Footer';

class Green extends React.Component {
   
  state = {
    count: 0

}


clickerIncrement = (event) => {
     event.preventDefault()
    alert('Green');
     const newCount = this.state.count + 1
     this.setState({
      count: newCount
     })


  }
    render(){
        return(
              <center> <div>
                  <button id="green-button" onClick={this.clickerIncrement}><h1>Green</h1></button>
                               

        
               </div> </center>
        )


}
}


export default Green