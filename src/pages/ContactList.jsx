import ContactCard from "../components/ContactCard.jsx";
import { Link } from "react-router-dom";


const ContactList = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-end my-3">
                <Link to="/create" type="button" className="btn btn-success">Add new contact</Link>
            </div>
            <ContactCard />
        </div>
    );
};

export default ContactList;