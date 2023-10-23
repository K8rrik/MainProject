import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Comment = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.comment}>
                <label>Write comment:</label>
                <input
                    value={props.inputValue}
                    onChange={(e) => props.setInputValue(e.target.value)}
                />
            </div>
            <div className={styles.send}>
                <button className="home_button" onClick={props.changeChat}>Send</button>
                <button className="home_button" onClick={() => props.setChatData([])}>Delete</button>
            </div>

            {props.showDialogReg && (
                <div>
                    You are not logged in, <Link className={styles.links} to="/">complete registration</Link>
                </div>
            )}
        </div>
    );
};

export default Comment;

