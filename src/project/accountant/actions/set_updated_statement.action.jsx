import * as constants from "../constants/actions";

const setUpdatedStatement = (statementId, statementCode, updatedStatementFields) => ({
    type: constants.SET_UPDATED_STATEMENT,
    updatedStatementFields,
    statementId,
    statementCode
});

export default setUpdatedStatement;