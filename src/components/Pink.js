import React from 'react'
import dogbark from '../audio/dogbark.mp3'
import {Howl, Howler} from 'howler';


const sounds = [
    {sound: dogbark, label: 'bark'}
]




class Pink extends React.Component {
   

    SoundPlay = (src) => {
        const sound = new Howl ((
            src
        ))
        sound.play();
    }
 
    




// clickerIncrement = (event) => {
//      event.preventDefault()
//     alert('Pink');
//      const newCount = this.state.count + 1
//      this.setState({
//       count: newCount
//      })


//   }


RenderSound = () => {
    return sounds.map((soundObj, index) => {
        return(
            <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
            {soundObj.label}
            </button>
        )
    }

    )
}
    render(){
        Howler.volume(2.0);
        return(
              <center> <div>
                  {this.RenderSound()}
             <button id="pink-button" onClick={this.RenderSound()}><h1>SoundPink</h1></button>
               </div> </center>
        )


}


}
export default Pink