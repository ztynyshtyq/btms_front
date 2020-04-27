import * as constants from "./constants";
// TODO: please, document that all methods started with "set" will be change current state through reducers (api)
export const setUser = (userData) => {
    const result = {};

    // Получение данных, которые прилетели (динамчыыый список)
    Object.keys(userData).forEach((key) => {
        result[key] = userData[key]
    });

    result['type'] = constants.ACTION_SET_USER

    return result;
}