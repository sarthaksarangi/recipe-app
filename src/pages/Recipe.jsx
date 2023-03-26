import { useState, useEffect } from "react";
import styled from "styled-components";
import {Link,useParams} from 'react-router-dom'

const Recipe = () => {
let params = useParams();
const [details,setDetails] = useState();


const fetchDetails = async ()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    
}



  return (
    <div>
      
    </div>
  )
}

export default Recipe

