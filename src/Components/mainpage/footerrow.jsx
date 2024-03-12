export default function FooterRow(){

    let FooterRowValue=[
        {
            head:"MOVIES NOW SHOWING IN CHENNAI",
            para:"Leo | Irugapatru | Chithha Mark Antony Paw Patrol: The Mighty Movie | Chandramukhi2 | Raththam | The Road The Exorcist: Believer | Mad (2023)"
        },
        {
            head:"UPCOMING MOVIES IN CHENNAI",
            para:"Jongole Mitin Mashi Ghost Malyagiri | Dawshom Awbotaar Raktabeej | Bagha Jatin | ICC Mens World Cup 2023: India vs Bangladesh | Pyaar Hai Toh   Hai | Killers of the Flower Moon | Premam Two | Har Har Gange | Rowdy Raja | Boyz4"
        },
        {
            head:"EVENTS IN CHENNAI",
            para:"Workshops Comedy Shows Music Shows Kids | Spirituality | Online Streaming Events | Beer Festival Meetups | Conferences Exhibitions Celebrity Wishes | Award shows | Screening Vaccination | Talks | New Year Parties"
        },
        {
            head:"ACTIVITIES IN TOP CITIES",
            para:"Things to do in Mumbai Things to do in Delhi-NCR Things to do in Chennai Things to do in Bengaluru Things to do in Hyderabad | Things to do in Pune | Things to do in Ahmedabad | Things to do in Kolkata Things to do in Kochi"
        },
        {
            head:"COUNTRIES",
            para:"Indonesia Singapore | UAE | Sri Lanka | West Indies"
        },
        {
            head:"HELP",
            para:"About Us | Contact Us | Current Opening Press Release | Press Coverage | Sitemap FAQs | Terms and Conditions | Privacy Policy"
        },
        
    ]

    return(
        <div className="footerrows">

        {FooterRowValue.map((item) => (
          <div className="insidefooterrow">
            <p className="footerrowfirstp">{item.head}</p>
            <p className="footerrowsecondp">{item.para}</p>
          </div>
        ))}

      </div>
      
    )
}