
export default function CinemaList(props){

    return(
        
            <div className="cinemalist">
    
                {props.Cinemas.map((items)=>(
                    
                    <div className="insidecinema">
                        {items.cinemalist.map((cinemaslists)=>(
                            <ul className="cinemasul">
                                <li className="cinemasli">{cinemaslists}</li>
                            </ul>
                        ))}
                    </div>

                ))}
                    
            </div> 
        
    )
}