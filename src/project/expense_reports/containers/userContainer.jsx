import {connect, container} from "react-redux"
import defaultComponent from "../pages/expense_reports.page"

const mapStateToProps = state => {
    console.log(state.userData)
    return{
        user: state.userData
    }
}

export default (component = defaultComponent)=>connect(mapStateToProps)(component)