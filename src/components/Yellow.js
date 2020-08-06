import React from 'react'
import Footer from './Footer';

class Yellow extends React.Component {
   

  state = {
    count: 0

}


clickerIncrement = (event) => {
     event.preventDefault()
    alert('Yellow');
     const newCount = this.state.count + 1
     this.setState({
      count: newCount
     })


  }
    render(){
        return(
              <center> <div>
             <button id="yellow-button"onClick={this.clickerIncrement}><h1>Yellow</h1></button>
               </div> </center>
        )


}
}


export default Yellow