import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
    const [book, setBook]=useState({        
        title: '',
        desc: '',
        price: null,
        cover: '',        
    })

    const navigate  = useNavigate();
    const location = useLocation();

    const bookId = location.pathname.split('/')[2];

    const handleChange = (e) =>{
        setBook((prev)=>({...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e =>{
        e.preventDefault();
        try{
            await axios.put("http://localhost:8800/books/" + bookId,book);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='form'>
        <h1>Update the book</h1>
        <input type="text" name="title" id="" placeholder='title' onChange={handleChange}/>
        <input type="text" name="desc" id="" placeholder='desc' onChange={handleChange}/>
        <input type="text" name="price" id="" placeholder='price' onChange={handleChange}/>
        <input type="text" name="cover" id="" placeholder='cover' onChange={handleChange}/>

        <button className='formButton' onClick={handleClick}>Update</button>
    </div>

  )
}

export default Update