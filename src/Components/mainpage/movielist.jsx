

export default function MovieList(props){



    return(
        <div className="movielist">

               {props.Movies.map((items)=>(

                <div className={`${props.movieFades?"moviefade":""} ${ items.head==="tamil" && props.tamilMovie?"movienotfade":""} ${ items.head==="telugu" && props.teluguMovie?"movienotfade":""} ${ items.head==="english" && props.englishMovie?"movienotfade":""} ${ items.head==="hindi" && props.hindiMovie?"movienotfade":""}`}>

                <h6 className="movielanguage">{items.head}</h6>

                {items.movielist.map((themovies)=>(
                    <p className="movienames1">{themovies}</p>
                ))}
                
                </div>

               ))}    
                
        </div> 
    )
}