import { Avatar } from '@material-ui/core';
import React from 'react'
import './post.css';
function Post({profilePic,username ,projectTopic,projectLink,projectDescription}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avater"/>
                <div className="post__topinfo">
                    <h3>{username}</h3>
                    
                </div>
            </div>
            <div className="post__bottom">
                <p>{projectTopic}</p>
            </div>
            <div className="post__maininfo">
                
                 <p>{projectDescription}</p>
                 <p>{projectLink}</p>
            </div>
            
        </div>
    )
}

export default Post
