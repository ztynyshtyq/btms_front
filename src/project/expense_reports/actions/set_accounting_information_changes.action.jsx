import * as actions from "../constants/actions"

const setAccountingInformationChanges = (newInputData) =>{
    console.log(newInputData)
   return{
       type: actions.SET_ACCOUNTING_INFORMATION_CHANGE,
        newInputData
   }
}

export default setAccountingInformationChanges