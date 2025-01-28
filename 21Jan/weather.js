async function fetchWeather() {
  let c = document.getElementById("City").value;
  let ctx = document.getElementById("myChart").getContext("2d");
  let weather = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${c}&appid=25311ee59b53bf49d18f0052dd7c5cef&units=metric`
  );

  if (weather.ok) {
    let w = await weather.json();
    let msg = document.getElementById("msg");
    msg.innerHTML = "";
    let xValues = [];
    for (let i = 0; i < 40; i++) {
      xValues.push(i);
    }
    let temps = [];
    let humid = [];
    for (let i = 0; i < w.list.length; i++) {
      temps.push(w.list[i].main.temp);
      humid.push(w.list[i].main.humidity);
    }

    console.log(w);

    var ch = new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            label: "Temperature",
            borderColor: "red",
            data: temps,
          },
          {
            label: "Humidity",
            borderColor: "blue",
            data: humid,
          },
        ],
      },
    });
  } else {
    let msg = document.getElementById("msg");
    msg.innerHTML = "INVALID CITY NAME!!!";
    ch = new Chart("myChart",{
        
    });
    
  }
}
