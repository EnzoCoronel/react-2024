import React from 'react'
import Piece from '../Piece'
import { BoardProps } from './types'
import './styles.css'

const Board: React.FC<BoardProps> = ({ currentState }) => {
    //console.log(currentState);
    return (
        <>
            <div className="board">
                {currentState.map((piece, index) =>
                    <Piece num={piece.value} key={`piece_${index}`} movement={piece.movement} />
                )}
            </div>
        </>
    )
}
export default Board