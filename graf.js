//Af david Wogelius

google.charts.load('current', {'packages':['corechart']});

function drawChart() {
  names = localStorage.getItem("tlongn")
  if(names !== null) {
    names = names.split(",");
  }
  else{
    localStorage.setItem("tlongn", "Heroku,Slack");
    names = localStorage.getItem("tlongn").split(",")
  }

  numbers = localStorage.getItem("tlongp");
  if(numbers !== null) {
      numbers = numbers.split(",");

      sum(numbers)
  }
  else{


      sum(numbers)
  }

  function sum(x){
      let sum = 0;
      for (let i = 0; i < x.length ; i++) {
      sum += parseInt(x[i]);
      }

  var data = google.visualization.arrayToDataTable([
      ['Tjeneste', 'forbrug i kr.'],
      ['Total', sum, ],
      [names[0],x[0]],
      [names[1],x[1]],
      [names[2],x[2]],
      [names[3],x[3]]
  ]);

    var chart = new google.visualization.ColumnChart(document.getElementById('myChart'));
    chart.draw(data);
  };
}

window.addEventListener('load', drawChart);
