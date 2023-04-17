import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Analysis from "./analysis";

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart(props) {
  const data = {
    labels: ["Positive Word", "Negative Word"],
    datasets: [
      {
        data: [props.data.positive.length, props.data.negative.length],
        backgroundColor: ["rgba(54, 162, 235)", "rgba(255, 99, 132)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const option = {
    plugins: {
      title: {
        display: true,
        text: "Sentiment Analysis",
      },
    },
    layout:{
      padding: 2,
    },
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
        <div className="row">
          <div className="col-lg-6 col-sm-6"><Doughnut data={data} options={option} /></div>
          <div className="col-lg-6 col-sm-6"><Analysis analysis={props.data} /></div>
        </div>          
        </div>
      </div>
    </>
  );
}

export default Chart;
