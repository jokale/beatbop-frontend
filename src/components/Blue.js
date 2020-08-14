import React from 'react'

class Blue extends React.Component {
   
  state = {
    count: 0

}


clickerIncrement = (event) => {
     event.preventDefault()
    alert('Blue');
     const newCount = this.state.count + 1
     this.setState({
      count: newCount
     })


  }
    render(){
        return(
              <center> <div>
                  <button id="blue-button" onClick={this.clickerIncrement}><h1>Blue</h1>  </button>
                             

         
               </div> </center>
        )


}
}


export default Blue