import * as SecureStore from "expo-secure-store";

const getToken = async () => {
    let token = await SecureStore.getItemAsync("AUTH_TOKEN");
    return token;
};

const setToken = async (token = "") => {
    await SecureStore.setItemAsync("AUTH_TOKEN", token);
    return token;
};

export default { getToken, setToken };
