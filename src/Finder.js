import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './Finder.css';

function Finder() {
    return (
        <div className='finder'>
          
            <Sidebar/>
            
           
            <Feed/>
        </div>
    )
}

export default Finder
