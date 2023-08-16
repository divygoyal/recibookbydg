import React from 'react'
import { useEffect , useState } from 'react'
import homeimage from "./girl.png"
import thai from "./foodimages/thai.jpg"
import american from "./foodimages/american.jpg"
import chinese from "./foodimages/chinese.jpg"
import mexican from "./foodimages/mexican.jpg"
import spanish from "./foodimages/spanish.jpg"
import { Link } from 'react-router-dom';
import publish from "./publish-recipe.png"
// import springroll from "../../../backend/uploads/spring-rolls.jpg"
import "../Pagescss/Home.css"
const Home = () => {
    
const[sortarr , setsortarr] = useState([]);

    const [recipedata, setrecipedata] = useState([]);
    const helper = async()=> {
        try {
            const res = await fetch('https://recipeapi-apm6.onrender.com/getdata', {
                method: "GET",
                // headers: {
                //     Accept: "appllication/json",
                //     "Content-Type": "application/json"
                // },
                // credentials: "include"
            });
            
            
            const data = await res.json();
            
            // console.log(data);
            setrecipedata(data);
         
            if(!res.status===200  ){
                console.log('bc');
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
        console.log(err);
        console.log("mc");
    }
    }

    const helper2 = async()=>{
      try{
        const res = await fetch("/latestrecipes" , {
          method:"GET"
        })
        const result = await res.json();
        setsortarr(result);
        // console.log(result);
        if(res.status !== 200 ){
          console.log("latest recipe not fetching sorry");
          const error = new Error(res.error);
          throw error;
        }
      }
      catch(err){
        console.log(err);
        console.loog(err);

      }
      
    }

    useEffect(()=>{
        helper();
        helper2();
    },[])
    const chineserecipes = recipedata.filter(obj => obj.category === "Chinese");
    const americanrecipes = recipedata.filter(obj => obj.category === "American");
    const thairecipes = recipedata.filter(obj => obj.category === "Thai");

  return (
    <>
      <div className='home'>
        <div className="homecontent">
            <h1 >Huge selection of delicios recipe ideas</h1>
            <p style={{fontSize:"1.25rem" , fontWeight:"300"}}>Explore our huge selection of delicious recipe ideas including; easy desserts
            ,delicious vegan and vegetarian dinner ideas, gorgeous pasta recipes, quick bakes,
             family-friendly meals and gluten-free recipes.</p>
             <div className="homebutton">
             <Link to ="/latestrecipes">
             <button className='buttonfirst'>Explore latest</button>
             </Link>
                <Link to = "/randomrecipe">
                <button className='buttonsecond' >Show Random</button>
                </Link>
               
             </div>
        </div>
        <div className="homeimage">
            <img src={homeimage} alt="" />
        </div>
      </div>


      <div className="section">
        <div className="country">
            <div className="countryimage">
            <Link to={`/viewmore/Chinese`}>
              <img src={thai} alt="" />
            </Link>
                {/* <img src={thai} alt="" /> */}
            </div>
            <p style={{marginTop:"15px"}}>Thai</p>
        </div>
        <div className="country">
            <div className="countryimage">
            <Link to={`/viewmore/Chinese`}>
              <img src={american} alt="" />
            </Link>
                {/* <img src={american} alt="" /> */}
            </div>
            <p style={{marginTop:"15px"}}>American</p>
        </div>
        <a href="https://chat.openai.com/">
        <div className="country">
            <div className="countryimage">
            <Link to={`/viewmore/Chinese`}>
              <img src={spanish} alt="" />
            </Link>
                {/* <img src={spanish} alt="" /> */}
            </div>
            <p style={{marginTop:"15px"}}>Spanish</p>
        </div>
        </a>
        
        <div className="country">
            <div className="countryimage">
            <Link to={`/viewmore/Chinese`}>
              <img src={chinese} alt="" />
            </Link>
                
            </div>
            <p style={{marginTop:"15px"}}>Chinese</p>
        </div>
        <div className="country">
            <div className="countryimage">
            <Link to={`/viewmore/Chinese`}>
              <img src={mexican} alt="" />
            </Link>
                {/* <img src={mexican} alt="" /> */}
            </div>
            <p style={{marginTop:"15px"}}>Mexican</p>
        </div>
        

      </div>
      
      {/* country section over  */}
      <div className="viewmore" style={{textAlign:"left"}}>
      <h1 style={{margin:"20px" }}>Latest Recipes</h1>
      {/* <Link to={`/viewmore/Thai`}>
      <p style={{margin:"20px"}}>view more</p>
      </Link> */}
      
      </div>

      <div className="recipesection">
      {sortarr.slice(0,5).map((object) => (
        <div className="recipe">
        <div className="recipeimage">
        <Link to={`/recipe/${object._id}`}>
        {object.imageurl && <img src={`http://localhost:3000/uploads/${object.imageurl}`} alt="" /> }
        {object.image && <img src={`http://localhost:3000/uploads/${object.image}`} alt="" /> }
        
        </Link>
        
        
            
            {/* <img src={springroll} alt="" /> */}
        </div>
        <p style={{marginTop:"15px"}}>{object.name}</p>
      </div>
      ))}
      
      </div>

    
      <div className="viewmore" style={{textAlign:"left" , marginTop:"80px"}}>
      <h1 style={{margin:"20px" }}>Chinese Recipes</h1>
      <Link to={`/viewmore/Chinese`}>
      <p style={{margin:"20px"}}>view more</p>
      </Link>
      
      </div>

      <div className="recipesection">
      {chineserecipes.slice(0,5).map((object) => (
        <div className="recipe">
        <div className="recipeimage">
        <Link to={`/recipe/${object._id}`}>
        {/* <img src={`http://localhost:3000/uploads/${object.image}`} alt="" /> */}
        {object.imageurl && <img src={`http://localhost:3000/uploads/${object.imageurl}`} alt="" /> }
        {object.image && <img src={`http://localhost:3000/uploads/${object.image}`} alt="" /> }
        </Link>
          
            {/* <img src={springroll} alt="" /> */}
        </div>
        <p style={{marginTop:"15px"}}>{object.name}</p>
      </div>
      ))}
      
      </div>

      
      <div className="viewmore" style={{textAlign:"left"  , marginTop:"80px"}}>
      <h1 style={{margin:"20px" }}>Thai Recipes</h1>
      <Link to={`/viewmore/Thai`}>
      <p style={{margin:"20px"}}>view more</p>
      </Link>
      
      </div>
      

      <div className="recipesection">
      {thairecipes.slice(0,5).map((object) => (
        <div className="recipe">
        <div className="recipeimage">
        <Link to={`/recipe/${object._id}`}>
        {/* <img src={`http://localhost:3000/uploads/${object.image}`} alt="" /> */}
        {object.imageurl && <img src={`http://localhost:3000/uploads/${object.imageurl}`} alt="" /> }
        {object.image && <img src={`http://localhost:3000/uploads/${object.image}`} alt="" /> }
        </Link>
        </div>
        <p style={{marginTop:"15px"}}>{object.name}</p>
      </div>
      ))}
      
      </div>

      <div className="viewmore" style={{textAlign:"left", marginTop:"80px"}}>
      <h1 style={{margin:"20px" }}>American Recipes</h1>
      <Link to={`/viewmore/American`}>
      <p style={{margin:"20px"}}>view more</p>
      </Link>
      
      </div>

      <div className="recipesection">
      {americanrecipes.slice(0,5).map((object) => (
        <div className="recipe">
        <div className="recipeimage">
        <Link to={`/recipe/${object._id}`}>
        {/* <img src={`http://localhost:3000/uploads/${object.image}`} alt="" /> */}
        {object.imageurl && <img src={`http://localhost:3000/uploads/${object.imageurl}`} alt="" /> }
        {object.image && <img src={`http://localhost:3000/uploads/${object.image}`} alt="" /> }
        </Link>
        </div>
        <p style={{marginTop:"15px"}}>{object.name}</p>
      </div>
      ))}
      
      </div>

      <div className="publish">
        <div className="publishimg">
            <img src={publish} alt="" />
        </div>
        <h1>Publish your recipe for FREE today</h1>
        <p>Publish your Recipe in front of thousands of people for free.</p>
        <Link to ="/publish">
                <button className='buttonfirst'>Submit</button>
        </Link>
      </div>
    </>
  )
}

export default Home
