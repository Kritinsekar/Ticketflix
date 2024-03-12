
import {useEffect,useState} from 'react';

export default function SearchMovies(props){

    let [moviesData,setMoviesData]=useState({});
    let[isLoading,setIsLoading]=useState(false);
    let [isError,setIsError]=useState(false);
    let[fetchedMovieDetails,setFetchedMovieDetails]=useState({});
    let[fetchedMovieTitle,setFetchedMovieTitle]=useState('');

    useEffect(()=>{

        let getter= async function(){
            try{
            setIsError(false);
            setIsLoading(true);
            let response=await fetch(`http://www.omdbapi.com/?apikey=4c703437&t=${props.searchedValue}`);
            

            if(!response.ok){
                throw new Error("Unable To Fetch Movie Details");
                
            }

            let data=await response.json();

            if(data.Response==="False"){
                throw new Error("Unable To Fetch Movie Details");
            }

            setMoviesData(data);
            setIsLoading(false);
            console.log(data);

            }catch(err){
                setIsError(true);    
            }
        }
        getter();
    },[props.searchedValue]);

    function handleMovieDetails(title){
        props.setMovieDetails(true);
        setFetchedMovieTitle(title);
    }


    useEffect(()=>{

        let getterMovieDetails= async function(){
          
            setIsError(false);
            setIsLoading(true);
            let response=await fetch(`http://www.omdbapi.com/?apikey=4c703437&t=${fetchedMovieTitle}`);

            let data=await response.json();

            setFetchedMovieDetails(data);
            setIsLoading(false);
    
        }

        getterMovieDetails();
    },[fetchedMovieTitle]);

    function handleMovieFocused(){
        props.setMovieDetails(false);
    }


    return(
        <>
        <div className="searchedmovies">

            {props.MovieDetails?
                <div className='focusedmoviecontainer'>
                    <img src={fetchedMovieDetails.Poster} alt={fetchedMovieDetails.Title} className="focusedmovieimg" />

                    <div className="focusedtexts">
                        <h1 className='focusedh1'><span className='focusedtitle'>Title:- </span>{fetchedMovieDetails.Title}</h1>
                        <h1 className='focusedh1'><span className='focusedtitle'>Actors:- </span>{fetchedMovieDetails.Actors}</h1>
                        <h1 className='focusedh1'><span className='focusedtitle'>Director:- </span>{fetchedMovieDetails.Director}</h1>
                        <h1 className='focusedh1'><span className='focusedtitle'>Genre:- </span>{fetchedMovieDetails.Genre}</h1>
                        <h1 className='focusedh1'><span className='focusedtitle'>Rated:- </span>"{fetchedMovieDetails.Rated}"</h1>
                        <h1 className='focusedh1'><span className='focusedtitle'>Ratings:- </span>{fetchedMovieDetails.imdbRating}</h1>
                        <h1 className='focusedh1'><span className='focusedtitle'>RunTime:- </span>{fetchedMovieDetails.Runtime}</h1>
                        <h1 className='focusedh1'><span className='focusedtitle'>Released:- </span>{fetchedMovieDetails.Released}</h1>
                    </div>
                    <h1 className='focusedclosebutton' onClick={handleMovieFocused}>X</h1>
                </div>
            :
            isError?
            <div>
                <h4 className='errortext'>Movie Not Found!</h4>
            </div>

            : /*IS AN ERROR*/ 

            isLoading?
            <div>
                <p className='loadingtext'>Loading...</p>
            </div>
            
            : /*IF NOT LOADING*/
            
            <div className="searchedmoviescard" onClick={()=>handleMovieDetails(moviesData.Title)}>
                
                <img src={moviesData.Poster} alt={moviesData.Title}/>
                

                <div className="insidemoviecardtext">
                <h1>{moviesData.Title}</h1>
                <p>{moviesData.Plot}</p>
                <p className="searchedmovierating">{moviesData.Year}</p>
                </div>

            </div>}
            

     
            
        </div>

        </>
    )
}