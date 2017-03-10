import React, {Component} from 'react';
import { Link } from 'react-router';

class SongDetails extends Component {
    constructor(){
        super()
        this.state={
            playlist:[],
            CurrentIndex:0
        }  
    }

    componentWillMount(){
        if(this.state.playlist != this.props.route.playlist ){
            this.setState({
            playlist: this.props.route.playlist,
            CurrentIndex: this.props.params.id[1]
        })
        }
    }

    render() {
        return (
            
            <div className='SongBoxDetaled'>
                <div className='BackButton'>
                    <Link to='/'> <img className='BackButton' src='http://www.bartrontylergroup.com/buttons/button-homepage.jpg'/> </Link>
                </div>
                <div className='ImgDiv'>
                    <img src={this.state.playlist[this.state.CurrentIndex].Img} height="100%" width='100%' />
                </div>
                <div className='TextDiv'>
                    <div>
                        <h2>{this.state.playlist[this.state.CurrentIndex].displayText}</h2>
                        <img onClick={()=>{this.props.togglePause(parseInt(this.state.CurrentIndex))}} className='playimg' src='https://c2.staticflickr.com/4/3374/3248594677_1b9fe3020d.jpg' height='30px' />  
                        {this.state.playlist[this.state.CurrentIndex].wiki}
                    </div>
                </div>
            </div>
        )
     console.log(this.state.playlist)   
    }
}

export default SongDetails;