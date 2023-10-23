import {Link} from "react-router-dom";
import styles  from "./style.module.css"
const Header = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.links}>Home</Link>
                <Link to="/chat" className={styles.links}>Chat</Link>
                <Link to="/test" className={styles.links}>Test API</Link>
            </nav>

        </div>
    )
}
export default Header