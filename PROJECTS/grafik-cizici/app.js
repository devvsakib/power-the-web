var xValues = [];
var yValues = [];

var chart = new Chart("grafik-cizimi", {
    type: "line",
    data: {
        labels: [1, 2, 3],
        datasets: [{
            fill: false,
            pointRadius: 2,
            borderColor: "rgba(0,0,255,0.5)",
            data: [1, 2, 1]
        }]
    },
    options: {
        legend: {
            display: false
        },
    }
});

function grafikCiz(artmaSayisi = 1) {
    xValues = [];
    yValues = [];
    var denklem = (document.getElementById('denklem').value) ? math.parse(document.getElementById('denklem').value).compile() : math.parse(1).compile();
    var baslangic = (document.getElementById('baslangic').value) ? Number(document.getElementById('baslangic').value) : 1;
    var bitis = (document.getElementById('bitis').value) ? Number(document.getElementById('bitis').value) : 100;

    for (let x = baslangic; x <= bitis; x += artmaSayisi) {
        yValues.push(denklem.evaluate({
            x: x
        }));
        xValues.push(x);
    }
    chart.data.labels = xValues
    chart.data.datasets[0].data = yValues
    chart.update()
}