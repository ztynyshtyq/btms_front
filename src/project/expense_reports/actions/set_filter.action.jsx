import * as constants from "../constants/actions";

const setFilter = (filter) => ({
    type: constants.SET_FILTER,
    filter
});

export default setFilter;