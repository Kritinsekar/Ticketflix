import MovieCard from "./MovieCard";
import LeoImage from "./Leo Movie Poster.webp";
import MarkImage from "./Mark Antony Poster.webp";
import ChithhaImage from "./Chithha Poster.webp";
import PawPatrolImage from "./Paw Patrol Poster.webp";
import MiniPoster from "./MiniPoster";
import miniposter1 from "./miniposter1.webp";
import miniposter2 from "./miniposter2.webp";
import miniposter3 from "./miniposter3.webp";
import miniposter4 from "./miniposter4.webp";
import miniposter5 from "./miniposter5.webp";
import premiere1 from "./premiere1.webp";
import premiere2 from "./premiere2.webp";
import premiere3 from "./premiere3.webp";
import premiere4 from "./premiere4.webp";
import premiere5 from "./premiere5.webp";
import PremiereCard from "./premierecard";
import event1 from "./event1.webp";
import event2 from "./event2.webp";
import event3 from "./event3.webp";
import event4 from "./event4.webp";
import event5 from "./event5.webp";
import EventCard from "./EventCard";

let MoviesOnPlay=[
    {
        image:LeoImage,
        MovieName:"Leo",
        MovieGenre:"Action/Thriller",
    },
    {
        image:ChithhaImage,
        MovieName:"Chithha",
        MovieGenre:"Drama/Thriller",
    },
    {
        image:MarkImage,
        MovieName:"Mark Antony",
        MovieGenre:"Sci-Fi/Thriller",
    },
    {
        image:PawPatrolImage,
        MovieName:"Paw Patrol",
        MovieGenre:"Adventure/Animation/Comedy",
    },
    
]


let MiniMovies=[
    {
        image:miniposter1,
    },
    {
        image:miniposter2,
    },
    {
        image:miniposter3,
    },
    {
        image:miniposter4,
    },
    {
        image:miniposter5,
    },
]

let premierecard=[
    {
        image:premiere1,
    },
    {
        image:premiere2,
    },
    {
        image:premiere3,
    },
    {
        image:premiere4,
    },
    {
        image:premiere5,
    },
]

let Events=[
    {
        image:event1,
    },
    {
        image:event2,
    },
    {
        image:event3,
    },
    {
        image:event4,
    },
    {
        image:event5,
    },
]

export default function Body(props){

    

    return(
        <>
        <div className="body">
            <div className="bodycontainer">
                {/* BODY HEAD CONTAINER RECOMMENDED MOVIES AND SEE ALL */}
                <div className="bodyhead">
                <h1 className="recommendedmovies">Recommended Movies</h1>
                <p className="seeall">See All &rarr;</p>
                </div>

                <div className="playingmovies">
                    
                {MoviesOnPlay.map((items)=>(
                    <MovieCard image={items.image} moviename={items.MovieName} moviegenre={items.MovieGenre} key={items.MovieName} setBookMovies={props.setBookMovies} setBookMovieName={props.setBookMovieName} bookMovieName={props.bookMovieName}/>
                ))}

                </div>

                <div className="minipostercontainer">
                    <h1 className="recommendedmovies">The Best Of Live Events</h1>
                    <div className="miniposterrow">
                        {MiniMovies.map((items)=>(
                            <MiniPoster image={items.image}/>
                        ))}
                    </div>
                </div>

            </div> {/* END OF BODY CONTAINER */}

            {/* PREMIERE SECTION */}
            <div className="premiere">
                
                <div>
                    <div className="redboxpremiere">
                        <h3 className="redboxtext">Premiere</h3>
                    </div>

                        <p className="redboxp">Watch new movies at home, every Friday</p>
                

                <div className="premiererow">
                    {premierecard.map((items)=>(
                         <PremiereCard image={items.image}/>
                    ))}
                   
                </div>
                </div>  
            </div>

            <div className="bodycontaineragain">

                <h1 className="eventstext">Online Streaming Events</h1>

                <div className="playingmovies">
                    
                    {Events.map((items)=>(
                        <EventCard image={items.image} moviename={items.MovieName} moviegenre={items.MovieGenre} key={items.MovieName}/>
                    ))}

                </div>

            </div>
        </div>
        </>
    )
}