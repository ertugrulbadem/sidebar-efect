import { FaPlus } from "react-icons/fa6";
import "../../style/ContactButton/style.css";

function ContactButton() {
  return (
    <button className="contact-button">
      <span>Contact us</span>
      <FaPlus />
    </button>
  )
}

export default ContactButton
