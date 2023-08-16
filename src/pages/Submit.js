import React from 'react'
import { useState } from 'react';
import "../Pagescss/publishpage.css"
const Submit = () => {
  


    
    const [textValue, setTextValue] = useState('');
  
    const [textarr, settextarr] = useState([]);
    const [text4, settext4] = useState('');
    const [text1, settext1] = useState('');
    const [text2, settext2] = useState('');
    const [text3, settext3] = useState('');
    const [fileValue, setFileValue] = useState(null);
  
    const addElement = () => {
      const copyarray = [...textarr];
      copyarray.push(text4);
      settextarr(copyarray);
      settext4('');
      
    };
  
    const handleTextChange = (e) => {
      setTextValue(e.target.value);
    };
    const handleTextChange1 = (e) => {
      settext1(e.target.value);
    };
    const handleTextChange2 = (e) => {
      settext2(e.target.value);
    };
    const handleTextChange3 = (e) => {
      settext3(e.target.value);
    };
    const handleTextChange4 = (e) => {
      settext4(e.target.value);
    };
    const handleFileChange = (e) => {
      setFileValue(e.target.files[0]);
    };
  
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const formData = new FormData();
        formData.append('name', textValue);
        formData.append('description', text1);
        formData.append('email', text2);
        formData.append('ingredients', textarr);
        formData.append('category', text3);
        formData.append('file', fileValue);
        
        const response = await fetch('https://recipeapi-apm6.onrender.com/', {
          method: 'POST',
          body: formData,
        });
        if(response){
          const data = response.json();
          console.log(response, data);
          setTextValue('');
          settext1('');
          settext2('');
          settext3('');
          settext4('');
          setFileValue(null);
        }
        else{
          console.error('Error:', response.status);
        }
      }catch (error) {
        console.error('Error:', error);
      }
    }

  return (
    <>
   <div className='publishpage'>
    <h1>Submit Your Recipe</h1>
<p>Share your amazing recipies with thousands of people accross the world. Fill our form to get started.</p>
<form onSubmit={handleSubmit}>
<div className="publishpagebox">
  <h5>Recipe Name</h5>
       <input
          type="text"
          id="text"
          value={textValue}
          onChange={handleTextChange}
        />
</div>
<div className="publishpagebox">
  <h5>description</h5>
       <input
          type="text"
          id="text"
          value={text1}
          onChange={handleTextChange1}
        />
</div>
<div className="publishpagebox">
  <h5>Email</h5>
       <input
          type="text"
          id="text"
          value={text2}
          onChange={handleTextChange2}
        />
</div>
<div className="publishpagebox">
  <h5>category</h5>
       <input
          type="text"
          id="text"
          value={text3}
          onChange={handleTextChange3}
        />
</div>

<div className="publishpagebox">
<h5>Ingredients added: {textarr.join(' ')}</h5>
  <h5>Ingredients</h5>
       <input
          type="text"
          id="text"
          value={text4}
          onChange={handleTextChange4}
        />
</div>
<div className="buttondiv">
<button type="button" className="buttonseconda"onClick={addElement}>Add Ingredients</button>
</div>

<div className="publishpagebox file">
  <h5>Product image</h5>
  <input  type="file" id="file"  onChange={handleFileChange} />
       
</div>
<div className="buttondiv" style={{marginTop:"20px"}}>
<button style={{height:"40px"  , fontSize:"20px"}}type="submit" >Submit</button>
</div>

  </form>

  
    
    </div>
      
   
    </>
   
    // <div>
    //   <div style={{marginTop:"50px"}}>
    // <form onSubmit={handleSubmit}>
    //   <div>

      

    //     <label htmlFor="text">name:</label>
    //     <input
    //       type="text"
    //       id="text"
    //       value={textValue}
    //       onChange={handleTextChange}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="text">description:</label>
    //     <input
    //       type="text"
    //       id="text"
    //       value={text1}
    //       onChange={handleTextChange1}
    //     />
    //   </div> <div>
    //     <label htmlFor="text">email:</label>
    //     <input
    //       type="text"
    //       id="text"
    //       value={text2}
    //       onChange={handleTextChange2}
    //     />
    //   </div> <div>
    //     <label htmlFor="text">category:</label>
    //     <input
    //       type="text"
    //       id="text"
    //       value={text3}
    //       onChange={handleTextChange3}
    //     />
    //   </div>
    //   <p>ingredients added: {textarr.join(' ')}</p>
    //    <div>
    //     <label htmlFor="text">ingredients:</label>
    //     <input
    //       type="text"
    //       id="text"
    //       value={text4}
    //       onChange={handleTextChange4}
    //     />
    //   </div>

    //   <div>
    //     <button type="button" onClick={addElement}>Add</button>
    //   </div>

    //   <div>
    //     <label htmlFor="file">File:</label>
    //     <input type="file" id="file"  onChange={handleFileChange} />
    //   </div>

    //   <button type="submit" >Submit</button>
    // </form>
    // </div>
    // </div>
  )
}

export default Submit
