import {useState} from "react";
import {useLocalStorage} from "../../hook/useLocalStorage";
import "./home.css"
const Home = () => {
    const [user,setUser] = useLocalStorage("USER", "")
    const [inputValue, setInputValue] = useState("")
    return(
        <div>
            {user &&(
                <div className="Home_">
                    <div>Welcome back {user}</div>
                    <button className="home_button" onClick={() => setUser("")}>Logout</button>
                </div>
            )}
            {!user &&(
                <div className="Home_">
                    <label>Enter your name:</label>
                    <input className="home_input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button className="home_button"  onClick={() => setUser(inputValue)}>Login</button>
                </div>
            )}
        </div>

    )
}
export default Home