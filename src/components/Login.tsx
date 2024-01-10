import classes from './Login.module.scss'
import {logInFirebase} from '../utils/firebaseConfig';
import Button from './Button';

const Login = () => {
    return (
        <div className={classes.login}>
            <Button
                onClick={async () => {
                    await logInFirebase();
                }}
            >
                LOGIN
            </Button>
        </div>
    );
};

export default Login;