import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {useEffect,useState}from "react";
import  Skeleton,{SkeletonTheme} from "react-loading-skeleton"
import {Link} from "react-router-dom";
import Series from './Series';
function Cards({movie}) {
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])
    
  return (
    <div>
        {
          <div className="mb-10 w-fit hover:scale-110 hover:transition-all cursor-pointer shadow-lg">
            <div className=''>
            <img className='w-[200px] h-[300px] object-contain shadow rounded-lg bg-black  ' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
            </div>
            
            
            <div className='flex flex-col '>
                <div className="text-xl font-sans mt-5  font-semibold ">
                    {movie?movie.original_title:""}
                    {movie?movie.original_name:""}
                </div>
                <div className='font-semibold text-lg'>
                    {movie?movie.release_date:""}
                    <span className='ml-3'>{movie?movie.vote_average:""}<FontAwesomeIcon icon={faStar}/></span>

                </div>
                
            </div>
          </div>
          
        }
        
    </div>
  )
}

export default Cards