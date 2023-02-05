
import Contact from "./Contact"
import data from "../Data/contact.json"

function Main() {
    return (
        <div className="Main">
            <h1><strong>CONTACT LIST</strong></h1>
            {
                data.results.map((contactData, index) =>{
                    return <Contact contactData={contactData} />
                })
            }
        </div>
    )
}

export default Main