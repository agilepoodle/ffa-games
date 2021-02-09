import React from "react";
import { GameTO } from "../server/types";

interface Props {
    game: GameTO;
} 

const Game = (props: Props) => {
    return (
        <tr>
            <td>{props.game.league}</td>
            <td>{props.game.homeTeam}</td>
            <td>{props.game.awayTeam}</td>
            <td>{props.game.matchTime}</td>
            <td><a href={props.game.link}>Lisätiedot</a></td>
        </tr>
    );
};

export default Game;