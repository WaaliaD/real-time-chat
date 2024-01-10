import {FC} from 'react';
import classes from './Message.module.scss'

interface messageProps {
    name: string;
    userID: string;
    ourID: string;
    photo: string;
    text: string;
}

const Message: FC<messageProps> = ({name, userID, photo, text, ourID}) => {
    return (
        <div className={ourID === userID ? `${classes.container} ${classes.ourMessage}` : classes.container}>
            <img className={classes.image} src={photo} alt={`${name} photo`}/>
            <div>
                <p className={classes.name}>{name}</p>
                <p className={classes.text}>{text}</p>
            </div>
        </div>
    );
};

export default Message;