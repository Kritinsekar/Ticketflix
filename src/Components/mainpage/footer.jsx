import FooterRow from "./footerrow";

export default function Footer(){

    return(
        <footer>
            <div className="footercontainer">

                <div className="footerrow1">
                    <h4>Got a show, event, activity or a great experience? Partner with us & get listed on ticketflix</h4>
                    <button className="contactus">Contact today!</button>
                </div>
                <FooterRow/>
            </div>

            <div className="footerline">
                <div className="footerlogo">
                    <div className="redbox">
                        <p className="logo">ticketflix</p>
                    </div>
                </div>
            </div>

            <div className="footercopyright">
                <p className="footerrowsecondp">Copyright &copy; 2023 ticketflix. All Rights Reserved</p>
                <p className="footerrowsecondp">The content ard images used on this site are copyright protected and copyrights vests vvith the respective owners. The usage of the content and Images on this website is intended to promote the works and no endorsement of the artist shall he implied Unauthorized use is prohibited and punishable by law</p>
            </div>

        </footer>
        
    )
}