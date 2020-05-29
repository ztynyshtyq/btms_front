import * as constants from "./constants";

const setPageSettings = (page, pageSettings) => ({
    type: constants.ACTION_SET_PAGE_SETTINGS,
    page,
    pageSettings
});

export default setPageSettings;