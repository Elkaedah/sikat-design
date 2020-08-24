import React from "react";
import "./style/index.scss";
import profile from './img/profile-exam.jpg';
import { Nav } from "react-bootstrap";

class Navbar extends React.Component{
render(){
    return (
      <Nav
        className="justify-content-between"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link className="judul" href="/home">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <img className="profile-icon"  src={profile} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
}
}
export default Navbar;