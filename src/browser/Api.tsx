import useConfig from "../components/useConfig";
import config from "../server/config";

const fetchGames = () => {
    console.log('Calling API URL', config.server.games_url)
    return fetch(config.server.games_url);
}

export default {
    fetchGames
}