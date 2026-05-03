import axios from "axios"

export const loadAgents = async () => {
    try {
        const { data } = await axios.get("https://valorant-api.com/v1/agents", { params: { isPlayableCharacter: true } });

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const loadMaps = async () => {
    try {
        const { data } = await axios.get("https://valorant-api.com/v1/maps");
        
        return data;
    } catch (error) {
        console.log(error);
    }
}