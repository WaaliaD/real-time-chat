import classes from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={classes.backGround}>
            <div className={classes.ldsGrid}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;