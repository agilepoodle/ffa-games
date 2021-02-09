import React from "react";
import Game from "./Game";
import Api from "./Api";
import { gainsboro } from "color-name";
import { GameTO } from "../server/types";

class GameIndex extends React.Component<{}, {games: GameTO[]}> {
    constructor(props: any) { 
        super(props);
        this.state = { games: [] };
    }
    async componentDidMount() {
        const response = await Api.fetchGames();
        const json = await response.json();
        this.setState({ games: this.mapJsonToGames(json) });
    }

    mapJsonToGames = (json: string) => {
        const games: GameTO[] = JSON.parse(json);
        console.log('gameTO\'s', games)
        return games;
    };

    render() {
        return (
            <div>
                {this.state.games.map((g: any) => (<Game game={g} />))}
            </div>
        );
    };
}

export default GameIndex;