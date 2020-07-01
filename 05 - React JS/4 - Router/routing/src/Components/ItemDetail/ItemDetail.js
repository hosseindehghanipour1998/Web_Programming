import React,{useState,useEffect} from 'react';
import { Link } from'react-router-dom';


function ItemDetail({match}) {

useEffect ( ()=> {
    fetchItem();
    console.log(match);
},[]);

const [item,setItem] = useState([]);
const fetchItem = async() => {
}

  return (
    <div>
    <h1>Information</h1>
    </div>
  );
}

export default ItemDetail;
