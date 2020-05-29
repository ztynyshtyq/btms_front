import * as constants from "../constants/actions";

const setUpdatedStatementGroup = (statementGroupCode, statementGroupFields) => ({
    type: constants.SET_UPDATED_STATEMENT_GROUP,
    statementGroupCode,
    statementGroupFields,
});

export default setUpdatedStatementGroup;