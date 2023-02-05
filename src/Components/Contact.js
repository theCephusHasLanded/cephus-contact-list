

function Contact(props) {
let data = props.contactData
    return (
        <div className="Contact">
            <ul>
                <li id="listItem">
                    <img src={data.picture.large} alt="pic" id="pic" />
                    <div id="info">
                    <h3>{data.name.first} {data.name.last}</h3>
                    <p><strong>🏠 Home:</strong> {data.phone}</p>
                    <p><strong>📱 Mobile:</strong> {data.cell}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Contact