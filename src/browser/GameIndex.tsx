import React from "react";
import Game from "./Game";
import Api from "./Api";
import { gainsboro } from "color-name";
import { GameTO } from "../server/types";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class GameIndex extends React.Component<{}, {games: GameTO[], loading: boolean}> {
    constructor(props: any) { 
        super(props);
        this.state = { games: [], loading: true };
    }
    async componentDidMount() {
        try {
            const response = await Api.fetchGames();
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            console.log('games', json)
            this.setState({ games: json, loading: false });
        } catch (error) {
            console.log('Failed to fetch game information', error)
            this.setState({ loading: false });
        }
    }

    render() {

        const spinner = <Loader type="Puff" color="#C70039" height={80} width={80}/>;

        const games = this.state.games.map((g: GameTO) => <Game game={g} key={g.timestamp}/>);
        return (
            <div>
                {this.state.loading ? spinner :
                <table>
                    <thead>
                        <tr>
                            <th>Sarja</th>
                            <th>Kotijoukkue</th>
                            <th>Vierasjoukkue</th>
                            <th>Pelipäivä</th>
                            <th>Linkki pelin lisätietoihin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games}
                    </tbody>
                </table>}
            </div>
        );
    };
}

export default GameIndex;