import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.scss"
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import { auth } from "../../firebase/Firebase.utils";

const Header = ({currentUser}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/"> 
         <Logo className="logo"/>
      </Link>
       
      <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/contact">Contact</Link>

          {
            currentUser
            ? <div className="option" onClick={()=> auth.signOut()}>
                Sign Out
            </div>
            : <Link className="option" to="/signIn">Sign In</Link>
          }
      </div>

    </div>
  )
}

export default Header