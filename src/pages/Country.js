import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "../Pagescss/Home.css"

const Country = () => {
    const {country} = useParams();
    const [recipedata , setrecipedata] = useState([]);
    const [countrydata , setcountrydata] = useState([]);
    
    const helper = async()=>{
        try{
            const result = await fetch("https://recipeapi-apm6.onrender.com/getdata" , {
                method:"GET",
            })

            const data = await result.json();
            setrecipedata(data);
            setcountrydata(data.filter(obj=>obj.category===country));
            // console.log(countrydata);

            if(!result.status===200  ){
                console.log('bc');
                const error = new Error(result.error);
                throw error;
            }
            

        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        helper();
    },[])
  return (
    <>
    <div style={{textAlign:"left"}}>
      <h1 style={{margin:"20px" }}>{country} Recipes</h1>
      </div>
     <div className="recipesection">
      {countrydata.map((object) => (
        <div className="recipe" style={{marginBottom:"30px" , marginTop:"30px"}}>
        <div className="recipeimage">
        <Link to={`/recipe/${object._id}`}>
        <img src={`http://localhost:3000/uploads/${object.image}`} alt="" />
        </Link>
        
        
            
            {/* <img src={springroll} alt="" /> */}
        </div>
        <p style={{marginTop:"15px"}}>{object.name}</p>
      </div>
      ))}
      </div>
      
    </>
  )
}

export default Country
