import {Plane, Mail, Phone} from "lucide-react";
import './Booking.css'
function booking() {
    return(
        <div className="orange">
            <div className="planeNtext">
            <Plane className="Plane"/>
            <p>Ready for a transformation?</p>
            </div>
            <h3>Book your family getaway to Majella today and watch the magic happen!</h3>
            <div className="bookingbtns">
                <button className="btn-or"><a href="/kest/book">Book Now</a></button>
            </div>
            <div className="phoneNmail">
                <span>
                    <Mail/>
                    <p>
                    info@majella-travel.com
                    </p>
                </span>
                <span>
                    <Phone/>
                    <p>
                        +353 6767676767
                    </p>
                </span>
                
            </div>
        </div>
    )
}

export default booking