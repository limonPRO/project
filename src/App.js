import React ,{useEffect}from 'react';

import './App.css';
import Feed from './Feed';
import {useDispatch,useSelector} from 'react-redux'
import Header from './Header';
import Sidebar from './Sidebar';
import Finder from './Finder';
import Login from './Login';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Addinfo from './Addinfo';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
   auth.onAuthStateChanged(authUser=>{
     if(authUser){
      dispatch(login({
        uid:authUser.uid,
        photo:authUser.photoURL,
        email:authUser.email ,
        displayName:authUser.displayName ,
      }));
     }else{ 
      dispatch(logout());
     }
   }
    )
  }, [])

  return (

    
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add">
          <Addinfo/>

          </Route>
        <Route path="/">
        {user?(
            <Finder/>
        
            
            ):(
            
               <Login/>
            )
          }
        </Route >
            
       
        </Switch>
      </Router>
        {/* {user?(
         <Finder/>
    
        
        ):(
          <Login/>
        )
      } */}
  
         
     
    </div>
  );
}

export default App;
