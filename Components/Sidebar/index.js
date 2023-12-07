import { FiBarChart2 } from "react-icons/fi";
import "../../style/Header/style.css";
import Menu from "../Menu";


function SideBar() {
  return (
    <div className='header-wrap'>
      <p className="brand-description">Digital experience design studio</p>
      <Menu/>
    </div>
  )
}

export default SideBar
