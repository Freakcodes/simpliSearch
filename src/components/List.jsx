import  axios  from 'axios'
import React,{useEffect,useState} from 'react'
import Cards from '../components/Cards'
import { useParams } from 'react-router-dom'
import { faStar} from '@fortawesome/free-solid-svg-icons'

function List() {
    const [page,setPage]=useState(1);
    const [movieList,setMovieList]=useState([])
    const {type}=useParams()
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        getData()
    },[type])
    const getData=()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${type?type:"top_rated"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&`)
        .then(
          (response)=>{
            setMovieList(response.data.results);
            
          }
        )

        .catch(
          (error)=>{
            console.log(error);
          })
    }
  return (
    <div>
        <h1 className='text-3xl font-semibold mb-6 mt-3 ml-3 font-sans'>TOP RATED</h1>
        <div className='md:grid   md:grid-cols-4 md:ml-[60px] grid grid-cols-3 gap-[20px]'>
            {
                movieList.map(movie=>{
                  return (<Cards movie={movie}/>) 
                })
            }
        </div>
      
    </div>
  )
}

export default List