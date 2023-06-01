 
import {useState} from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import styles from './Sidebar.css';



const Sidebar=()=>{

    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    // return (
    //     <div className="sidebar">
    //     <ul className="nav flex-column">
    //       <li className="nav-item">
    //         <a className="nav-link active" href="#">Dashboard</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">My Payarc</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">About Payarc</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Payarc Training</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Marketing Materials</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Access to tools</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Settings</a>
    //       </li>
    //     </ul>
    //   </div>
    // );
    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
          <div className="toggle" onClick={toggleSidebar}>
            <span className={styles["icon"]}>{collapsed ? '>' : '<'}</span>
          </div>
          <ul className={styles["nav flex-column"]}>
            <li className={styles["nav-item"]}>
              <a className={styles["nav-link"]} href="#">
                <FaHome className={styles["icon"]} />
                {!collapsed && <span>Dashboard</span>}
              </a>
            </li>
            <li className={styles["nav-item"]}>
              <a className={styles["nav-link"]} href="#">
                <FaUser className={styles["icon"]} />
                {!collapsed && <span>Profile</span>}
              </a>
            </li>
            <li className={styles["nav-item"]}>
              <a className={styles["nav-link"]} href="#">
                <FaCog className={styles["icon"]} />
                {!collapsed && <span>Settings</span>}
              </a>
            </li>
          </ul>
        </div>
    )    
}

export default Sidebar;