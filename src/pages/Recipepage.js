import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from "./1681131590667Mutton-Biryani-Recipe.jpg"
import "../Pagescss/recipepage.css"
import checkbox from "./checkbox.png"

const Recipepage = () => {
    
    const {id} = useParams();
    const [recipedata , setrecipedata] = useState([]);
    const [recipeinfo , setrecipeinfo] = useState({});
    const helper = async()=>{
        try{
            const res = await fetch('https://recipeapi-apm6.onrender.com/getdata' , {
                method:"GET" , 
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });

            const result = await res.json();
            setrecipedata(result);
            // console.log(recipedata);
            setrecipeinfo(result.find(obj => obj._id === id)  || {});
            // console.log(recipeinfo);
            

            if(!res.status===200  ){
                console.log('bc');
                const error = new Error(res.error);
                throw error;
            }

        }
        catch(error){
            console.log(error);
            console.log("mc");
        }
    }

    useEffect(()=>{
        helper();
    },[])
  return (
    <>
    
    

      <div className="recipepage">
        <div className="recipepageimg">
            {recipeinfo.image &&< img src={`https://recipeapi-apm6.onrender.com/uploads/${recipeinfo.image}`} alt="" />} 
            {recipeinfo.imageurl &&< img src={`https://recipeapi-apm6.onrender.com/uploads/${recipeinfo.imageurl}`} alt="" />} 
        </div>
        <div className="recipepagecontent">
            <h1>{recipeinfo.name}</h1>
            <p>{recipeinfo.description}</p>
            {recipeinfo.ingredients && recipeinfo.ingredients.map((object)=>(
                <div className='listt'>
                <img src={checkbox} alt="" />
                <p> {object}</p>
                </div>
                
            ))}
        </div>
      </div>

    </>
  )
}

export default Recipepage
