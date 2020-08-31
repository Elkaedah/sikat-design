import React from "react";
import "./style/index.scss";
import foto from "./img/Asset 8.svg";
import { BrowserRouter as Router, useRouteMatch, Link } from "react-router-dom";
// import routes from "./js/routes.js";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar text-nowrap ">
        <div className="brand-icon">
          <img src={foto} alt="prop" />
        </div>
        <ul className="select text-break">
          <li>
            <Link to="/" >
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Logistik">
              {/* <img className="icon" src={icon1} alt="icon"></img> */}
              Logistik
            </Link>
          </li>
          <li>
            <Link to="/Bencana">
              {/* <img className="icon" src={icon1} alt="icon"></img> */}
              Bencana Alam
            </Link>
          </li>

          <li>
            <Link to="/Penanggulangan">
              {/* <img className="icon text" src={icon1} alt="icon"></img> */}
              Penanggulangan Bencana
            </Link>
          </li>
          <li>
            <Link to="/Pegawai">
              {/* <img className="icon" src={icon1} alt="icon"></img> */}
              Pegawai BPBD
            </Link>
          </li>
          <li>
            <Link to="/Relawan">
              {" "}
              {/* <img className="icon" src={icon1} alt="icon"></img> */}
              Relawan
            </Link>
          </li>
          <li>
            <Link to="/Laporan">
              {/* <img className="icon" src={icon1} alt="icon"></img> */}
              Laporan
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
