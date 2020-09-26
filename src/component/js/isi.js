class isi {
    constructor() {

    }
    dataSelect() {
        const data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45],
            }, ],
            maintainAspectRatio: false,
        };
    }
    option() {
        const Option = {
            scales: {
                xAxes: [{
                    ticks: {
                        callback: function(label, index, labels) {
                            return label.toFixed(2) + "%";
                        },
                    },
                }, ],
                yAxes: [{
                    ticks: {
                        callback: function(label, index, labels) {
                            return label;
                        },
                        fontSize: 18,
                        fontColor: "black",
                    },
                    display: true,
                }, ],
            },
        };
    }
}