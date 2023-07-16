import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cards from './Cards';


function Trending() {
    
    const[page,setPage]=useState(1);
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        getData()
    },[page])
    const getData=()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=8f0e30b8c0fa7b6877caba9e36d64013&page=${page}`)
        .then(
          (response)=>{
            setMovies(response.data.results);
            
          }
        )

        .catch(
          (error)=>{
            console.log(error);
          })
    }
  return (
    <div className="" >
        <div className="container  h-[100vh] pt-2  text-white bg-black w-full ">
            <h1 className=' ml-3 font-bold cursor-pointer text-3xl font-sans pb-4'>Discover </h1>
            <div className='grid grid-cols-3 md:grid md:grid-cols-4 gap-[1rem] pl-4  bg-black w-full'>
                {
                    movies.map(movie=>{
                        return (<Cards movie={movie}/>) 
                      })
                }
                
                
                
            </div>

            <div className='w-full bg-black text-white text-center flex justify-center '>
                    <button onClick={()=>setPage(page+1)} className='  block border border-white px-2 py-1 mb-3 rounded-md bg-white text-black'>NEXT</button>
                </div>  
        </div>
    </div>
  )
}

export default Trending