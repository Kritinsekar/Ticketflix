export default function SubHeader(props){

    return(
        <>
            <div className="subheader" style={props.searchActive?{backgroundColor:"whiteSmoke",margin:"0rem 0 3rem 0"}:{}}>

                {/* DIV ON LEFT CONTAINS MOVIE TO BUZZ */}
                <div className="subleft" style={props.searchActive?{display:"none"}:{}}>
                    <p className="subp">Movies</p>
                    <p className="subp">Stream</p>
                    <p className="subp">Events</p>
                    <p className="subp">Plays</p>
                    <p className="subp">Sports</p>
                    <p className="subp">Activities</p>
                    <p className="subp">Buzz</p>
                </div>
                
                <div className="subright" style={props.searchActive?{display:"none"}:{}}>
                    <p className="subp">ListYourShow</p>
                    <p className="subp">Corporates</p>
                    <p className="subp">Offers</p>
                    <p className="subp">GiftCards</p>
                </div>

            </div>
        </>
    )
}