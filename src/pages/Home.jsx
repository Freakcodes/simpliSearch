import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import Trending from '../components/Trending';

function Home() {
    const APIURL="https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
    const [popularMovies,setPopularMovies]=useState([]);
    const [search,setSearch]=useState("");
    useEffect(
        ()=>{
          
            getAllMovies();
         
         
        },
        []
      )
    
    
    const getAllMovies=()=>{
        axios.get(APIURL)
        .then(
          (response)=>{
            setPopularMovies(response.data.results);
            
          }
        )

        .catch(
          (error)=>{
            console.log(error);
          }
        )
      }
      const getSearchedMovies=()=>{

      }
    
  return (

    <div className="poster ">
    <Carousel
     showThumbs={false}
     autoPlay={true}
     transitionTime={3}
     infiniteLoop={true}
     showStatus={false}
    >
        {
             popularMovies.map(movie=>{
                 return (
                <>
                
                 <div className='posterImage h-[600px] object-contain '>
                    <img  className= " m-auto block w-full  "src={`https://image.tmdb.org/t/p/original${movie&&movie.backdrop_path}`} alt="" />
                 </div>
                 <div className="overlay h-[70%]  text-bold text-white  flex flex-col absolute bottom-0 w-full p-[5rem] text-start md:block">
                        <div className="title text-[4rem]  mx-4 font-extrabold ">{movie ? movie.original_title:""}</div>
                        <div className="runtime w-[600px] text-3xl text-center mb-6">
                          {movie?movie.release_date:""}
                          <span className="rating m-6 text-3xl ">
                          {movie?movie.vote_average:" "} <FontAwesomeIcon icon={faStar}/> 
                          </span>
                        </div>
                        <div className="description font-medium text-lg w-[600px] italic hidden md:block text-white">{movie?movie.overview:""}</div>
                 </div>
                 
                 </>
                 )
            })
        }

    </Carousel> 
    <Trending/>
</div>
  )
}

export default Home
