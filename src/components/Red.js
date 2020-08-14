import React from 'react'

class Red extends React.Component {
   

  state = {
    count: 0

}


clickerIncrement = (event) => {
     event.preventDefault()
    alert('Red');
     const newCount = this.state.count + 1
     this.setState({
      count: newCount
     })


  }
    render(){
        return(
              <center> <div>
                  <button id="red-button" onClick={this.clickerIncrement}><h1>Red</h1></button>
                               

               </div> </center>
        )


}
}


export default Red