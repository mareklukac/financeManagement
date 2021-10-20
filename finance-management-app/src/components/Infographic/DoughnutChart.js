import React from "react";
import { Doughnut } from "react-chartjs-2";

import styles from "./DoughnutChart.module.css";

// const data = {
//   labels: ["Red", "Green"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [0, 0],
//       backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 255, 132, 1)"],
//       borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 255, 132, 1)"],
//       borderWidth: 1,
//     },
//   ],
// };

const options = {
  animation: {
    animateScale: true,
  },
};

const DoughnutChart = (props) => {
  return (
    <div className={styles.doughnutChart}>
      {/* <div className="header">
      <h1 className="title">Doughnut Chart</h1>
    </div> */}
      <Doughnut
        data={{
          labels: ["Red", "Green"],
          datasets: [
            {
              label: "# of Votes",
              data: [15, 19],
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 255, 132, 1)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 255, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default DoughnutChart;
