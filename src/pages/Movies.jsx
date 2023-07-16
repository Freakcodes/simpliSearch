import React  from 'react'
import { useState,useEffect } from 'react';
import Cards from '../components/Cards';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons'


function Movies() {
  const searchURL="https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query="
  const [search,setSearch]=useState("");
  const[page,setPage]=useState(1);
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    if(search.trim()!==''){
      searchData()
    }else{
      getData();
    }
      
  },[page,search])
  const searchData=()=>{
    axios.get(searchURL+search)
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
  const getData=()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`)
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
          <div className="top-section flex justify-between items-center">
          <h1 className='font-bold cursor-pointer mt-4 ml-2  font-sans pb-4 text-3xl'>Movies</h1>
            <div className="relative  text-black pr-3">
        <FontAwesomeIcon icon={faSearch} className="absolute right-20 mr-4 my-3 pr-[40px] cursor-pointer text-black"/>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  placeholder="Search for any  movies..." className=" md:w-[300px]  border-solid border-2 rounded-md outline-none mr-[120px] py-1"/>
        </div>
          </div>
           
            <div className=' grid grid-cols-3 gap-[1rem] md:grid  md:grid-cols-4 pl-4 text-3xl bg-black w-full m-auto '>
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

export default Movies