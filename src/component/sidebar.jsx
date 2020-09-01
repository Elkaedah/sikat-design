import React from "react";
import "./style/index.scss";
import foto from "./img/Asset 8.svg";
import Foto1 from "./img/Dashboard1.svg";
import Foto2 from "./img/Dashboard.svg";
import { BrowserRouter as Router, useRouteMatch, Link } from "react-router-dom";
// import routes from "./js/routes.js";

function LinkInto({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <div className={match ? "aktif" : ""}>
      {/* {match && <img src={Foto2} className="icon" />} */}
      <img src={match ? Foto2 : Foto1} className="icon"></img>
      <Link className={match ? "aktif" : ""} to={to}>
        {label}
      </Link>
    </div>
  );
}

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar text-nowrap ">
        <div className="brand-icon">
          <img src={foto} alt="prop" />
        </div>
        <ul className="select text-break">
          <li>
            <LinkInto label="Dashboard" to="/" activeOnlyWhenExact={true} />
          </li>
          <li>
            <LinkInto
              label="Logistik"
              to="/Logistik"
              activeOnlyWhenExact={true}
            />
          </li>
          <li>
            <LinkInto
              label="Penanggulangan Bencana"
              to="/Penanggulangan"
              activeOnlyWhenExact={true}
            />
          </li>
          <li>
            <LinkInto label="User" to="/Pegawai" activeOnlyWhenExact={true} />
          </li>
          <li>
            <LinkInto label="Laporan" to="/Laporan" activeOnlyWhenExact={true} />
          </li>
        </ul>
      </div>
    );
  }
}
