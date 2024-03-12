

export default function MovieCard(props){

    function handleBookMovies(moviename){
        props.setBookMovies(true);
        console.log(props.bookMovies);
        props.setBookMovieName(moviename);
    }


    return(
        
    <>
        <div className="moviecard" onClick={()=>handleBookMovies(props.moviename)}>
            <img src={props.image}/>
            <div className="moviedetails">
                <h2 className="moviename">{props.moviename}</h2>
                <p className="moviegenre">{props.moviegenre}</p>
            </div>
        </div>
    </>
)
}