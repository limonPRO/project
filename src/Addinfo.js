import React ,{ useState ,useEffect } from 'react'
import "./Addinfo.css";
import {useSelector} from "react-redux";
import { selectUser } from './features/userSlice';
import db from './firebase';
import { selectTopicId } from './features/topicSlice';

function Addinfo() {
    const topicId =useSelector(selectTopicId);

    const user = useSelector(selectUser);
    const[input ,setInput]=useState("");
    const [topicdetails, setTopicdetails] = useState("");
   
    const [hostlink, setHostlink] = useState("");

    


    const handleSubmit=(e)=>{
        e.preventDefeault();
        db.collection("topics").
        add({
            user:"imlimon" ,
            projectTopic:input,
            topicdetails:topicdetails,
            proiectlink:hostlink,
        })
      
    }
    return (
        <div className="addinfo">
            <div className="addinfo__header">
                <h2>add information</h2>

                <div className="addinfo__details">
                    <form>
                        <input value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        placeholder={"enter topic name"}/>
                    
                        <input value={topicdetails}
                        onChange={(e)=> setTopicdetails(e.target.value)}
                         placeholder={"enter topic details"}/>
                        
                        <input value={hostlink}
                        onChange={(e)=> setHostlink(e.target.value)}
                        placeholder={"enter deplyment link"}/>
                        <button onClick={handleSubmit}  type="submit">
                            submit
                        </button>

                    </form>

                   
                </div>
                
            </div>
        </div>
    )
}

export default Addinfo
