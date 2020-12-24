import React from 'react';
import  './Feed.css';
import db from './firebase';
import {useState,useEffect} from "react"
 import {Link, useHistory} from "react-router-dom";
 import{useSelector}  from "react-redux";
 import {  selectUser } from './features/userSlice';

import { selectTopicId, selectTopicName } from './features/topicSlice';
 



function Feed() {
    const user = useSelector(selectUser);
    const history =useHistory();
    const topicId= useSelector(selectTopicId);
    const [projects,setProjects]=useState([]);
    
    const topicName = useSelector(selectTopicName);



        const add=(e)=>{
            // e.preventDefeault();
                history.push('/add');
            }
  useEffect(() => {
      if(topicId){
          db.collection("topics")
          .doc(topicId)
          .collection("projects")
          .orderBy('timestamp','desc')
          .onSnapshot((snapshot) =>
          setProjects(
                snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                }))
            
          )
        );
            }
     
  }, [topicId])
    
//    useEffect(() => {
//     db.collection('topics').onSnapshot(snapshot=>(
//         setProjects(snapshot.docs.map(doc=>doc.data()))
//     ))
  
// }, []);
    return (
        <div className="feed">
            <div className="feed__header">
                   <spam className="feed__name">{topicName}<Link onClick={add} to="add">add </Link> </spam>
                </div>
            <div className="feed__description">
               {projects.map(project=>(
                    <post
                    username={user.username}
                     projectTopic={project.projectTopic}
                     projectLink={project.projectLink}
                     projectDescription={project.projectDescription}
                    />

               ))}
            {/* <Post 
                
                projectTopic="this is the project for student"
                projectLink="www.abc.com"
                projectDescription="jhdkjhdkhkjhkjahdkshakhkhajkhkjdhakjhd"
                />
                <Post 
                profilePic="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7e%2FCircle-icons-profile.svg&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ACircle-icons-profile.svg&tbnid=w6dL3UELGZTR5M&vet=12ahUKEwj9xqfE39rtAhX6ELcAHQd7D9wQMygEegUIARDZAQ..i&docid=TKW6teBKD3wYJM&w=800&h=800&q=profile&ved=2ahUKEwj9xqfE39rtAhX6ELcAHQd7D9wQMygEegUIARDZAQ"
                username="limon"
                projectTopic="this is the project for student"
                projectLink="www.abc.com"
                projectDescription="jhdkjhdkhkjhkjahdkshakhkhajkhkjdhakjhd"
                />
                <Post 
                profilePic="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7e%2FCircle-icons-profile.svg&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ACircle-icons-profile.svg&tbnid=w6dL3UELGZTR5M&vet=12ahUKEwj9xqfE39rtAhX6ELcAHQd7D9wQMygEegUIARDZAQ..i&docid=TKW6teBKD3wYJM&w=800&h=800&q=profile&ved=2ahUKEwj9xqfE39rtAhX6ELcAHQd7D9wQMygEegUIARDZAQ"
                username="limon"
                projectTopic="this is the project for student"
                projectLink="www.abc.com"
                projectDescription="jhdkjhdkhkjhkjahdkshakhkhajkhkjdhakjhd"
                /> */}

            </div>
            
        </div>
    )
}

export default Feed
