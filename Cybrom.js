
import  {useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeColor } from "./themeSlice";



const Cybrom=()=>{
    const myclr=useSelector((state)=>state.mycolor.color);
    const mydis=useDispatch();

    const [val, setval]=useState("");
    return(
        <>
        color : <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}} />
        <button onClick={()=>{mydis(changeColor(val))}}>click here</button>
        <div style={{width:"300px",height:"250px", border:"2px solid black",
         backgroundColor:myclr}}>

         </div>
        </>
    );
}
export default Cybrom;