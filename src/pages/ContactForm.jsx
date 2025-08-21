import { Link } from "react-router-dom";

const ContactForm = () => {
    return (
        <div className="container" style={{ marginTop: "2rem" }}>
            <form className="row g-3">

                <legend className="text-center fs-1">Add a new contact</legend>

                <div className="col-md-12">
                    <label htmlFor="inputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
                </div>

                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter email" />
                </div>

                <div className="col-md-12">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="inputPhone" placeholder="Enter phone" />
                </div>

                <div className="col-md-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" />
                </div>

                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary w-100">save</button>
                </div>

                <div className="col-12 mt-2">
                    <Link to="/" className="text-primary text-decoration-none">or get back to contacts</Link>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;