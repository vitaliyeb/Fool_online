import Input from "../../components/UI/Input/Input";
import styles from './style.module.css';

const Login = () => {
    const handleChange = () => {

    }

    return (<div className={styles.wrapper}>
        <form action="">
            <Input
                onChange={handleChange}
                value={''}
                label='login'
                placeholder={'Ki$$a_V_Kedd4X'}
            />
            <Input
                onChange={handleChange}
                value={''}
                label='login'
                placeholder={'Ki$$a_V_Kedd4X'}
            />
        </form>
    </div>)
}

export default Login;