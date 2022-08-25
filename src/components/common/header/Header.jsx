import { Link } from "react-router-dom";
import "./header.css";
import { nav } from "../../data/Data"


const Header = () => {
  return (
    <>
      <div className="container flex">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="nav">
          <ul>
            {nav.map((links, index) => {
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            })}
          </ul>
        </div>
    </div>
    </>
  )
}

export default Header