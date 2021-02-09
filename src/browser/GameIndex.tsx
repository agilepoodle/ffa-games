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
        try {
            const response = await Api.fetchGames();
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            console.log('games', json)
            this.setState({ games: json });
        } catch (error) {
            console.log('Failed to fetch game information', error)
        }
    }

    render() {
        const games = this.state.games.map((g: GameTO) => <Game game={g} key={g.timestamp}/>);
        return (
            <table>
                <thead>
                    <tr>
                        <td>Sarja</td>
                        <td>Kotijoukkue</td>
                        <td>Vierasjoukkue</td>
                        <td>Pelipäivä</td>
                        <td>Linkki pelin lisätietoihin</td>
                    </tr>
                </thead>
                <tbody>
                    {games}
                </tbody>
            </table>
        );
    };
}

export default GameIndex;