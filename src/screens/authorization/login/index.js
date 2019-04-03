import Login from './login';
import { connect } from 'react-redux';
import { setLogin } from '../../../redux/actions/auth/auth'

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        setLogin: (isLoggedIn) => {
            dispatch(setLogin(isLoggedIn))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);