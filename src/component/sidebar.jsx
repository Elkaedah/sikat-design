import React from "react";
import "./style/index.scss";
import foto from "./img/Asset 8.svg";
import icon1 from './img/Dashboard.svg'
// import { Dropdown, Container, Row, Col } from "react-bootstrap";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar text-nowrap ">
        <div className="brand-icon">
          <img src={foto} alt="prop" />
        </div>
        <ul className="select text-break">
          <li>
            <a href="#" className="aktif">
              <img className="icon" src={icon1} alt="icon"></img>
              Dashboard
            </a>
            <path class="block"></path>
          </li>
          <li>
            <a href="#">
              <img className="icon" src={icon1} alt="icon"></img>Logistik
            </a>
          </li>
          <li>
            <a href="#">
              <img className="icon" src={icon1} alt="icon"></img>Bencana Alam
            </a>
          </li>

          <li >
            <a href="#" >
              <img className="icon text" src={icon1} alt="icon"></img>
              Penanggulangan Bencana
            </a>
          </li>
          <li>
            <a href="#">
              <img className="icon" src={icon1} alt="icon"></img>Pegawai BPBD
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <img className="icon" src={icon1} alt="icon"></img>Relawan
            </a>
          </li>
          <li>
            <a href="#">
              <img className="icon" src={icon1} alt="icon"></img>Laporan
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Sidebar;
