import React from 'react';
import Homepage from "./pages/Homepage/Homepage.components";
import {  Route,Switch} from "react-router-dom";
import  ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import './App.css';
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp';
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils"

class App extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;


componentDidMount(){
 this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
   if (userAuth) {
     const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot =>{
            this.setState({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            }
            ,()=> {console.log(this.state)}
            )

        } )
     }
     this.setState({
       currentUser:userAuth //after logging out userAuth = null
     })
  

  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div> 
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signIn" component={SignInSignUp}/>
      </Switch>
    </div>
  );
}
} 

export default App;
