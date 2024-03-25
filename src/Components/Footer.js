import React from 'react';
import { GAME_STATE_PLAYING } from '../Constants';

const Footer = ({onNewGameClickEvent,onSuggestClickEvent,gameState}) => {
    const renderButtons=()=>{
    if(gameState===GAME_STATE_PLAYING){
        return <button onClick={onSuggestClickEvent} >suggest</button>
    }
    return <button onClick={onNewGameClickEvent} >new game</button>

    }

    return (
        <div className='panel footer'>
{renderButtons()}
        </div>
    );
};

export default Footer;