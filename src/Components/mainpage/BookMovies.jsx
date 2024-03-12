
export default function BookMovies(props){

    let cinemaslist=[
        {
            Name:"AGS Navallur",
            showtime:[
                {
                    time:"08 : 00",
                    availability:"free",
                    type:"Laser",
                },
                {
                    time:"10 : 10",
                    availability:"free",
                    type:"4k Dolby",
                },
                {
                    time:"10 : 15",
                    availability:"full",
                },
                {
                    time:"13 : 45",
                    availability:"free",
                    type:"Laser",
                },
                {
                    time:"10 : 10",
                    availability:"free",
                },
                {
                    time:"10 : 40",
                    availability:"full",
                },
                {
                    time:"12 : 45",
                    availability:"free",
                },
                ,
                {
                    time:"22 : 45",
                    availability:"free",
                    type:"4k Dolby",
                },
                ,
                {
                    time:"11 : 00",
                    availability:"almostfull",
                },
                {
                    time:"09 : 40",
                    availability:"full",
                    type:"4k Dolby",
                },
                {
                    time:"11 : 00",
                    availability:"almostfull",
                },
                {
                    time:"10 : 40",
                    availability:"full",
                    type:"4k Dolby",
                },
                {
                    time:"12 : 45",
                    availability:"free",
                },
                ,
                {
                    time:"22 : 45",
                    availability:"free",
                },
            ],
           
        },

        {
            Name:"INOX Navallur",
            showtime:[
                {
                    time:"09 : 40",
                    availability:"full",
                },
                {
                    time:"11 : 00",
                    availability:"almostfull",
                    type:"Laser",
                },
                {
                    time:"10 : 40",
                    availability:"full",
                },
                {
                    time:"12 : 45",
                    availability:"free",
                    type:"4k Dolby",
                },
                ,
                {
                    time:"22 : 45",
                    availability:"free",
                },
                ,
                {
                    time:"11 : 00",
                    availability:"almostfull",
                },
                {
                    time:"10 : 40",
                    availability:"full",
                },
                {
                    time:"12 : 45",
                    availability:"free",
                    type:"Laser",
                },
                ,
                {
                    time:"22 : 45",
                    availability:"free",
                },
                ,
                {
                    time:"11 : 00",
                    availability:"almostfull",
                    type:"4k Dolby",
                },
                {
                    time:"08 : 00",
                    availability:"free",
                },
                {
                    time:"10 : 10",
                    availability:"free",
                },
                {
                    time:"10 : 15",
                    availability:"full",
                    type:"4k Dolby",
                },
                {
                    time:"13 : 45",
                    availability:"free",
                    type:"Laser",
                },
            ],
            
        },

        {
            Name:"Varadaraja Chrompet",
            showtime:[
                {
                    time:"10 : 40",
                    availability:"full",
                    type:"Laser",
                },
                {
                    time:"12 : 45",
                    availability:"free",
                },
                ,
                {
                    time:"22 : 45",
                    availability:"free",
                },
                ,
                {
                    time:"11 : 00",
                    availability:"almostfull",
                    type:"4k Dolby",
                },
            ],
            
        },

        {
            Name:"Vidya Tambaram",
            showtime:[
                {
                    time:"16 : 40",
                    availability:"full",
                    type:"Laser",
                },
                {
                    time:"22 : 45",
                    availability:"free",
                },
                {
                    time:"09 : 30",
                    availability:"full",
                },
                {
                    time:"17 : 45",
                    availability:"free",
                    type:"Laser",
                },
                {
                    time:"09 : 30",
                    availability:"full",
                },
                {
                    time:"17 : 45",
                    availability:"free",
                },
            ],
            
        },

        {
            Name:"PVR ECR",
            showtime:[
                {
                    time:"09 : 30",
                    availability:"full",
                    type:"4k Dolby",
                },
                {
                    time:"17 : 45",
                    availability:"free",
                },
            ],
            
        },

        {
            Name:"Varadaraja Chrompet",
            showtime:[
                {
                    time:"10 : 15",
                    availability:"full",
                },
                {
                    time:"13 : 45",
                    availability:"free",
                },
                {
                    time:"10 : 10",
                    availability:"free",
                    type:"4k Dolby",
                },
            ],
            
        },
    ]
    return(
        <div>

            <div className="bookmoviesheader1">
            
            <div className="bookmoviecontainer">
            <h1>{props.bookMovieName} - Tamil</h1>
            </div>

            </div>



            <div className="bookmoviesheader2">

            {cinemaslist.map((items)=>(

                <div className="bookmoviecontainer2">

                <div className="thecinemaname">
                    <h1 className="bookcinemaname">{items.Name}</h1>
                </div>

                <div className="showtiming">

                {items.showtime.map((items2)=>(
                    <div>
                        <div className="showborder">
                            <p className="bookmoviespara" style={items2.availability==="free"?{color:"rgb(48, 221, 48)"}:items2.availability==="almostfull"?{color:"orange"}:items2.availability==="full"?{color:"grey",cursor:"default"}:{}}>{items2.time}</p>

                            <p className="screentype" style={items2.availability==="free"?{color:"rgb(48, 221, 48)"}:items2.availability==="almostfull"?{color:"orange"}:items2.availability==="full"?{color:"grey",cursor:"default"}:{}}>{items2.type}</p>
                        </div>
                    </div>
                ))}

                </div>  
                    
                

            </div>
            ))}
                
                
    
            </div>




        </div>
    )
}