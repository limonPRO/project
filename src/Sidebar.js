import React ,{useState,useEffect}from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import CodeIcon from '@material-ui/icons/Code';
import AddIcon from '@material-ui/icons/Add';
import { Avatar } from '@material-ui/core';
import {useSelector} from "react-redux";
import { selectUser } from './features/userSlice';
import {auth} from "./firebase"
 import {Link, useHistory} from "react-router-dom";
 import db from "./firebase";

function Sidebar() {

    const user = useSelector(selectUser );
    const [topics,setTopics] =useState([ ]);
    const history =useHistory();
    

    useEffect(() => {
        db.collection('topics').onSnapshot((snapshot)=>
            setTopics(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        )
        );
      
    }, []);

     const add_information=()=>{
         const topicName = prompt ("jjj");
    
        if(topicName){
            db.collection("topics").add({
                topicName:topicName,

            });
        }
            // history.push('/add');
     };

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div classNane="sidebar__avater">
                    <Avatar onClick={()=>auth.signOut( )} src={user.photo} />
                </div>
                <spam> {user.displayName} </spam>
                <div className="sidebar__add">
                   <p className="add"> < AddIcon onClick={add_information}/>
                   <Link to="add">add </Link> </p> 
                </div>
            </div>
            <div className="sidebar__option">
                {topics.map(({id ,data:{topicName}})=>(
                    <SidebarRow  Icon={CodeIcon} key={id} id={id } topicName = {topicName }
                    />
                ))}
              
             <SidebarRow  Icon={CodeIcon}  
            />
           
            {/* <SidebarRow Icon={CodeIcon} text="thesis"/> 
             */}
            </div>
            
        </div>
    )
}

export default Sidebar
