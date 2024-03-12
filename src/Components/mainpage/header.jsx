
export default function Header(props){
    
    function handleSearchChange(e){
        if(e.target.value!==""){
            props.setSearchValueActive(true);
            props.setSearchedValue(e.target.value);
            props.setMovieDetails(false);
            props.setBookMovies(false);
            props.setBookMovieName("");
            
        }else{
            props.setSearchValueActive(false);
            props.setBookMovies(false);
            props.setBookMovieName("");

        }
    }

    function handleSearchActive(){
        props.setSearchActive(true);
    }

    function handleClose(){
        props.setSearchActive(false);
        props.setSearchValueActive(false);
        props.setSearchedValue("");
    }

    function handleHomePage(){

    props.setBookMovies(false);
    props.setBookMovieName("");

    }

    return(
        <header style={props.searchActive?{backgroundColor:"whiteSmoke"}:{}}>

        <h4 className="headerclose1" style={props.searchActive?{display:"block"}:{}} onClick={handleClose}>&lt;</h4>
            {/* DIV ON LEFT CONTAINS LOGO AND SEARCH BAR */}

            <div className="div1" onClick={handleHomePage}>

                <div className="redbox" style={props.searchActive?{display:"none"}:{}}>
                    <p className="logo">ticketflix</p>
                </div>

                <input type="text" className="searchbar" placeholder="Search for Movies, Events, Plays, Sports and Activities. " onClick={handleSearchActive} onChange={handleSearchChange}/>
            </div>

            {/* DIV ON RIGHT CONTAINS DROPDOWN AND SIGN IN */}

            <div className="div2" style={props.searchActive?{display:"none"}:{}}>

                <select className="cityselect" >
                    <option className="cityoption">Chennai</option>
                    <option className="cityoption">Madurai</option>
                    <option className="cityoption">Coimbatore</option>
                </select>

                <button className="signin">Sign in</button>

                <div className="menu">
                    <div className="menuline"></div>
                    <div className="menuline"></div>
                    <div className="menuline"></div>
                </div>

            </div>

            <h4 className="headerclose2" style={props.searchActive?{display:"block"}:{}} onClick={handleClose}>X</h4>
        </header>
    )
}