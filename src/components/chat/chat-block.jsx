import styles from "./style.module.css";

const ChatBlock = (props) => {

    return (
        <div className={styles.chat}>
            <div className={styles.chat_head}>Chat</div>
            {props.chatData.map((el, i) => {
                return (
                    <div className={styles.chat_main} key={i}>
                        {el}
                    </div>
                );
            })}
        </div>
    );
};

export default ChatBlock;
