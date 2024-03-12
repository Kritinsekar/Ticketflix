import {useState} from "react";
import MovieList from "./movielist";
import CinemaList from "./cinemalist";

export default function Search(props){

let[movies,setMovies]=useState(true);
let[cinema,setcinema]=useState(false);
let[tamilMovie,setTamilMovie]=useState(false);
let[englishMovie,setEnglishMovie]=useState(false);
let[teluguMovie,setTeluguMovie]=useState(false);
let[hindiMovie,sethindiMovie]=useState(false);
let [movieFades,setMovieFades]=useState(false);

function handleSetCinema(){
    setMovies(false);
    setcinema(true);
}

function handleSetMovie(){
    setMovies(true);
    setcinema(false);
}

let filters=[
    {
        language:"tamil",
    },
    {
        language:"english",
    },
    {
        language:"hindi",
    },
    {
        language:"telugu",
    },
]

let Movies=[

    {head:"tamil" ,
    movielist:["800 (U)","Akku (2023) (A)","Chandramukhi 2 (UA)","Iraivan (A)","Irugapatru (U)","Mark Antony (UA)","Maynanji (UA)","Vinnaithaandi Varuvaayaa (UA)"],
    },

    {head:"english" ,
    movielist:["Dumb Money (A)","Gravity (IMAX 30) (UA)","Paw Patrol: The Mighty Movie (U)","The Exorcist: Believer"],
    },

    {head:"hindi" ,
    movielist:["3 Idiots (IJA)","Dhak Dhak (LIA)","Jawan (UA)","Thank You For Coming (A)","Mission Kashmir (UA)","Yaariyan 2 (UA)"],
    },

    {head:"telugu" ,
    movielist:["Tiger Nageswara Rao (UA)","Mad (2023) (UA)","Bhagavanth Kesari (UA)","Gnost (UA)"],
    }
];

let Cinemas=[

    {
        cinemalist:["The Vijay Park Multiplex: Injambakkam ECR 4K","MAYAJAAL Multiplex: ECR, Chennai","PVR: Heritage RSL ECR","PVR: VR Chennai, Anna Nagar","INOX: The Marina Mall, OMR","INOX: LUXE Phoenix Market City"," Velachery","PVR: Escape-Express", "Avenue Mall,PVR: Ampa Mall", "Nelson Manickam Road","AGS Cinemas: Maduravoyal","AGS Cinemas: Villivakkam","PVR: Palazzo,The Nexus Vijaya Mall"],
    },
    {
        cinemalist:["PVR: Perambur, Spectrum Mall","PVR: Aerohub"," Chennai,PVR: Grand Galada, Pallavaram","AGS Cinemas OMR: Navlur","EVP Cinemas: Chennai","INOX National: Arcot Road","PVR: SKLS Galaxy Mall, Red Hills Chennai"],
    },
    {
        cinemalist:["Medavakkam Kumaran Cinemas RGB LASER Dolby Atmos","BG Parimalam Cinemas (Silver Screen): Kundrathur","SB Cinemas (Sri Bhagavathi) 4K Atmos: Poonamallee","Anand Theatre Madhuranthagam RGB LASER 4k","GanapathyRam Theatre 4K Dolby 7.1: Chennai","Cinepolis: BSR Mall, OMR, Thoraipakkam","Rohini Silver Screens: Koyambedu","Rohini Venkateshwara: Periyapalayam"],
    },
    {
        cinemalist:["Sivasakthi Cinemas RGB 4K Laser: Padi","Vetrivel 4k Dolby Atmos: Nanganallur, Madipakkam","PVR: Theyagaraja, Thiruvanmiyur, Chennai","Arul Muruga Theatre 4K: Thiruporur", "Venkateswara Cinemas DOLBY ATMOS: Kundrathur","Sree Roja Theatre 2K ATMOS AC: Thiruvallur","Raj Theatre 4K 3D A/C Dts Saidapet Chennai","Shree Radha Movie Park 4K Dolby Atmos: Redhills"],
    },

];

function handleMovieFades(){

    if (tamilMovie ===true || englishMovie ===true || teluguMovie ===true || hindiMovie===true) {
        setMovieFades(true);
      } else {
        setMovieFades(false);
      }
  

    console.log(`Movie Fade? ${movieFades}`);
}

    function handleFilter(usermovielanguage){
        usermovielanguage==="tamil" && tamilMovie===false?setTamilMovie(true):usermovielanguage==="tamil" && tamilMovie?setTamilMovie(false):setTamilMovie(false);
        usermovielanguage==="telugu" && teluguMovie===false?setTeluguMovie(true):usermovielanguage==="telugu" && teluguMovie?setTeluguMovie(false):setTeluguMovie(false);
        usermovielanguage==="english" && englishMovie===false?setEnglishMovie(true):usermovielanguage==="english" && englishMovie?setEnglishMovie(false):setEnglishMovie(false);
        usermovielanguage==="hindi" && hindiMovie===false?sethindiMovie(true):usermovielanguage==="hindi" && hindiMovie?sethindiMovie(false):sethindiMovie(false);   
        handleMovieFades();
        // console.log(usermovielanguage);
    }

    return(
        <div className="searchbody">
            <div className="searchcontainer">
                <div className="searchrow1">
                    <div>
                        <button className={`searchselect ${movies===true?`searchselectbuttonactive`:""}`} onClick={handleSetMovie}>MOVIES</button>
                        <button className={`searchselect2 ${cinema===true?`searchselectbuttonactive`:""}`} onClick={handleSetCinema}>CINEMAS</button>
                    </div> 
                    <div className="filterrow">
                        <h6 className="searchfilter">Filter</h6>

                        {filters.map((items)=>(
                           
                            <button className="filterbutton" key={items.language} onClick={()=>handleFilter(items.language)}>{items.language}</button>
                            
                           
                        ))}
                        
                    </div>
                </div>
                            
                <div className="searchlistcontainer">

                   {movies?<MovieList Movies={Movies} filters={filters} tamilMovie={tamilMovie} englishMovie={englishMovie} hindiMovie={hindiMovie} teluguMovie={teluguMovie} movieFades={movieFades}/>:<CinemaList Cinemas={Cinemas}/>}         
                 

                 </div>

            </div>

                          
        </div>
    )
}