import React, {Component} from 'react';
import { Link } from 'react-router';

class SongsList extends Component {
    constructor(){
        super()

    }
  
    render() {
        const songs=this.props.route.songs;
        let SongsArr = [];

        for(let i=0; i< songs.length; i++){
            SongsArr.push(
                ( 
                <div className='SongBox'>
                    <Link className='h2link' to={`/songs/:${i}`}> 
                        <div className='ImgDiv'>
                            <img src={songs[i].Img} height="100%" width='100%' />
                        </div>
                    </Link>
                    <div className='TextDiv'>
                        <div>
                            <Link className='h2link' to={`/songs/:${i}`}> <h2>{songs[i].displayText}</h2></Link>
                                <img onClick={()=>{this.props.togglePause(i)}} className='playimg' src='https://c2.staticflickr.com/4/3374/3248594677_1b9fe3020d.jpg' height='30px' />            
                            <Link className='h2link' to={`/songs/:${i}`}> {songs[i].description} </Link>
                        </div>
                    </div>                 
                </div>               
                )
            )
        }
        return (
            <div>
            {SongsArr}
            </div>
        )
    }
}

export default SongsList;