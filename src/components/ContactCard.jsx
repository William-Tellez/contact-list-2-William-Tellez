import imagen from "../assets/img/imagen.webp";
import { SiGooglemaps } from "react-icons/si";
import { FaPhone, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function ContactCard() {
    return (     
            <div className="card mb-3 shadow-sm">
                <div className="card-body d-flex align-items-center">
                    {/* Imagen */}
                    <img
                        src={imagen}
                        alt="Profile"
                        className="rounded-circle me-3"
                        style={{ width: "80px", height: "80px" }}
                    />

                    {/* Información del contacto */}
                    <div className="flex-grow-1">
                        <h5 className="mb-1">Mike Anamendolla</h5>
                        <p className="mb-1">
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            <SiGooglemaps className="me-2" />5842 Hillcrest Rd
                        </p>
                        <p className="mb-1">
                            <i className="bi bi-telephone-fill me-2"></i>
                            <FaPhone className="me-2" />(870) 288-4149
                        </p>
                        <p className="mb-0">
                            <i className="bi bi-envelope-fill me-2"></i>
                            <MdEmail className="me-2" />mike.ana@example.com
                        </p>
                    </div>

                    {/* Botones visuales */}
                    <div className="d-flex align-items-start gap-5 me-5">
                        <FaPencilAlt
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleEdit(item.id)}
                        />
                        <FaTrashAlt
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleDelete(item.id)}
                        />
                    </div>

                </div>
            </div>
    );
}

export default ContactCard;