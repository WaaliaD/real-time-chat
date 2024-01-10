import {useState} from 'react';
import classes from './Chat.module.scss';
import {logOutFirebase, addData, auth, queryForGet} from '../utils/firebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth';
import { serverTimestamp } from "firebase/firestore";
import {useCollectionData} from 'react-firebase-hooks/firestore';
import Message from './Message';
import Button from './Button';

const Chat = () => {
    const [inputValue, setInputValue] = useState('');
    const [user] = useAuthState(auth);
    const [messages] = useCollectionData(queryForGet);

    async function sendMessage () {
        if(inputValue) {
            await addData({
                text: inputValue,
                name: user?.displayName,
                photo: user?.photoURL,
                userID: user?.uid,
                date: serverTimestamp(),
            });
            setInputValue('');
        }
    }

    return (
        <div className={classes.chat}>
            <div className={classes.header}>
                <Button onClick={async () => {
                    await logOutFirebase();
                }}>LOGUT</Button>
            </div>
            <div className={classes.main}>
                {messages?.map(({name, text, photo, userID}) =>
                    <Message key={Math.random()} name={name} userID={userID} ourID={user?.uid as string} photo={photo} text={text}/>
                )}
            </div>
            <div className={classes.footer}>
                <textarea
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                />
                <Button onClick={sendMessage}>SEND</Button>
            </div>
        </div>
    );
};

export default Chat;