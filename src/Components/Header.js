import React from 'react';
import { GAME_STATE_WIN, GAME_STATE_PLAYING, GAME_STATE_DRAW } from '../Constants';

const Header = ({ gameState, currentPlayer, winPlayer }) => {
    const renderLable = () => {

        switch (gameState) {
            case GAME_STATE_PLAYING:
                return <div>Player {currentPlayer} turn</div>
            case GAME_STATE_WIN:
                return <div>Player {winPlayer} Wins</div>
            case GAME_STATE_DRAW:
                return <div>game is draw</div>
            default:
        }

    }
    return (
        <div className='panel header'>
            <div className='header-text'>{renderLable()}</div>

        </div>
    );
};

export default Header; 