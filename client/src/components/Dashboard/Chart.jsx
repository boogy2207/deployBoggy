Chart.deaults.color = "#fff";

const printCharts = () => {
   renderModelChart();
};

const renderModelsChart = () => {
   const data = {
      //    type: "bar",
      labels: [
         //array with X: data
         "January",
         "February",
         "March",
         "April",
         "May",
         "June",
         "July",
         "August",
         "September",
         "October",
         "November",
         "Dicember",
      ],
      datasets: [
         {
            label: "Clients",
            data: [65, 59, 80, 27, 59, 88, 15, 23, 47, 12, 55, 27], //array with y: data
            borderWidth: 1,
            backgroundColor: [
               "rgb(255,51,51)",
               "rgb(255,115,51)",
               "rgb(255,169,51)",
            ],
         },
      ],
   };

   const options = {
      options: {
         legend: { position: "left" },
         scales: {
            y: {
               beginAtZero: true,
            },
         },
      },
   };

   new Chart("modelsChart", { type: "bar", data }, options);
};

printCharts();

// function Chart() {
//    const ctx = document.getElementById("myChart").getContext("2d");
//    var myChart = new Chart(ctx, {
//
//       data: {
//          labels: [
//             "January",
//             "February",
//             "March",
//             "April",
//             "May",
//             "June",
//             "July",
//             "August",
//             "September",
//             "October",
//             "November",
//             "Dicember",
//          ],
//          datasets: [
//             {
//                label: "Clients",
//                data: [65, 59, 80, 27, 59, 88, 15, 23, 47, 12, 55, 27], //array with monthly data
//                borderWidth: 1,
//                backgroundColor: [
//                   "rgb(255,51,51)",
//                   "rgb(255,115,51)",
//                   "rgb(255,169,51)",
//                ],
//             },
//          ],
//       },
//       options: {
//          scales: {
//             y: {
//                beginAtZero: true,
//             },
//          },
//       },
//    });
// }

// export default Chart;
