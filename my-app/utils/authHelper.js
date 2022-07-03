import * as SecureStore from "expo-secure-store";

const getToken = async () => {
    const token = await SecureStore.getItemAsync("AUTH_TOKEN");
    return token;
};

const setToken = async (token = "") => {
    await SecureStore.setItemAsync("AUTH_TOKEN", token);
    return token;
};

const setUserType = async (userType = "") => {
    await SecureStore.setItemAsync("USER_TYPE", userType);
    return userType;
};

const getUserType = async () => {
    const userType = await SecureStore.getItemAsync("USER_TYPE");
    return userType;
};

export default { getToken, setToken, getUserType, setUserType };
