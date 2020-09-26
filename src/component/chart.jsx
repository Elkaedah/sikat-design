import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import {Line} from "react-chartjs-2";
import {Link,useRouteMatch} from "react-router-dom";
import './js/isi.js'

const state = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Tanah Longsor",
      fill: false,
      lineTension: 0.2,
      backgroundColor: "#5AA7FF",
      borderColor: "#5AA7FF",
      borderWidth: 3,
      data: [15, 13, 11, 11, 11,9],
    },
    {
      label: "Batu Terbang",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#FF7E7E",
      borderColor: "#FF7E7E",
      borderWidth: 3,
      data: [20, 18, 18, 23, 17, 19],
    },
    {
      label: "Batu Rapuh",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#FFB95D",
      borderColor: "#FFB95D",
      borderWidth: 3,
      data: [11, 12, 13, 17, 19, 22],
    },
    {
      label: "Batu Terbang",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#FFB95D",
      borderColor: "#FFB95D",
      borderWidth: 3,
      data: [20, 18, 18, 23, 17, 19],
    },
  ],
};
const options = {
  title: {
    display: false,
    text: "Average Rainfall per month",
    fontSize: 20,
  },
  legend: {
    display: false,
    position: "right",
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

class Chart extends React.Component {
 
  render() {
    return (
      <Container className="container-fluid">
        <Row className="chart">
          <Col md={10}>
            <div className="judul">Grafik Rekapitulasi Bencana</div>
            <div className="select">
              <LinkInto
                label="1 Minggu"
                to="/?bulanke=1-minggu"
                activeOnlyWhenExact={true}
              />
              <LinkInto
                label="1 Bulan"
                to="/?bulanke=1-bulan"
                activeOnlyWhenExact={true}
              />
              <LinkInto
                label="6 Bulan"
                to="/?bulanke=6-bulan"
                activeOnlyWhenExact={true}
              />
              <LinkInto
                label="1 Tahun"
                to="/?bulanke=1-tahun"
                activeOnlyWhenExact={true}
              />
            </div>
            <Line data={state} options={options} />
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
export default Chart;