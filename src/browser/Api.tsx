import useConfig from "../components/useConfig";

const fetchGames = () => {
    const config = useConfig();
    return fetch(config.server.games_url);
}

export default {
    fetchGames
}