import useConfig from "../components/useConfig";
import config from "../server/config";

const fetchGames = () => fetch(config.server.games_url);

export default {
    fetchGames
}