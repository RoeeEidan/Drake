import React, { Component } from 'react';
import AudioPlayer from 'react-responsive-audio-player';
import 'react-responsive-audio-player/dist/audioplayer.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      playlist:[]
      
    }

    this.togglePause = this.togglePause.bind(this)

  }

  componentWillMount(){
    let NewPlayList = this.props.route.playlist;
    if(NewPlayList !== this.state.playlist){
        this.setState({
        playlist: NewPlayList
        }) 
    }
   
  }

  togglePause(clickedSongIndex){ 
    while(this._audioplayer.currentTrackIndex !== clickedSongIndex){
      this._audioplayer.skipToNextTrack()
    }
    this._audioplayer.togglePause()
  }


  render() {
    return (
      <div className="App">
        <div className='h1'><h1>Welcome! </h1></div>
        {React.cloneElement(this.props.children, { togglePause: this.togglePause })}
        <div id='audio_player_container'>
          <AudioPlayer style={{ position: 'fixed', bottom: 0 }} playlist={this.state.playlist} ref={(audioplayer => {this._audioplayer = audioplayer})}/>
        </div>
      </div>
    );
  }
}


export default App;
