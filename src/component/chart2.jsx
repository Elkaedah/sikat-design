import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import  { Doughnut }  from "react-chartjs-2";
import { Link, useRouteMatch } from "react-router-dom";

const state = {
  labels: ["January", "February", "April"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#C9DE00", "#C9DE00"],
      hoverBackgroundColor: ["#501800", "#4B5000", "#C9DE00"],
      data: [65, 59,23],
    },
  ],
};
const options = {
  legend: {
    display: true,
    position: "bottom",
  },
};

function LinkInto({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <Link className={match ? "active-select" : ""} to={to}>
      {label}
    </Link>
  );
}

class Chart2 extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="chart">
          <Col>
            <div className="judul">Grafik Rekapitulasi Bencana</div>
            <Doughnut data={state} width={85} options={options} />
            <div className="tahun">Tahun 2020</div>
          </Col>
          {/* <Col md={1}>
            <div className="keterangan">Keterangan</div>
          </Col> */}
        </Row>
      </Container>
    );
  }
}
export default Chart2;
