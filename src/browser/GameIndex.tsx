import React from "react";
import Game from "./Game";
import Api from "./Api";
import { gainsboro } from "color-name";

class GameIndex extends React.Component {
    constructor(props: any) { 
        super(props);
        this.state = { games: [] };
    }
    componentDidMount() {
        Api.fetchGames()
            .then(res => res.json())
            .then(games => {
                this.setState({ games: games });
            });
    }

    render() {
        return (
            <div>
                <Game game={true} />
            </div>
        );
    };
}

export default GameIndex;