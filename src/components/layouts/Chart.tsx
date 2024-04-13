import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { LineChart, axisClasses } from "@mui/x-charts";
import { ChartsTextStyle } from "@mui/x-charts/ChartsText";
import Title from "./Title";
import { useGetXData, useGetYData } from "@/hooks/charts/useCharts";

export default function Chart() {
  const theme = useTheme();

  const { GetXData } = useGetXData();
  const { GetYData } = useGetYData();

  const [XData, setXdata] = React.useState([]);
  const [YData, setYdata] = React.useState([]);
  const [xLabels, setXLabels] = React.useState([]);
  const [yLabels, setYLabels] = React.useState([]);

  const GetData = async () => {
    GetXData()
      .then((res: any) => {
        if (res.status) {
          const xValues = res.data.slice(0, 50);

          const xinfor = xValues.map((item: any) =>
            parseFloat(item.RandomNumber)
          );
          setXdata(xinfor);

          const labels = xValues.map((item: any) => item.Label);
          setXLabels(labels);
        } else {
          setXdata([]);
          setXLabels([]);
        }
      })
      .catch((error: any) => {
        alert(error.message);
      });
    GetYData()
      .then((res: any) => {
        if (res.status) {
          const yValues = res.data.slice(0, 50);

          const yinfor = yValues.map((item: any) =>
            parseFloat(item.RandomNumber)
          );
          setYdata(yinfor);

          const labels = yValues.map((item: any) => item.Label);
          setYLabels(labels);
        } else {
          setYdata([]);
          setYLabels([]);
        }
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  React.useEffect(() => {
    GetData();
  }, []);

  return (
    <React.Fragment>
      <Title>Today</Title>
      <div style={{ width: "100%", flexGrow: 1, overflow: "hidden" }}>
        <LineChart
          dataset={YData.map((value: any, index: any) => ({
            x: XData[index],
            y: value,
          }))}
          margin={{
            top: 16,
            right: 20,
            left: 70,
            bottom: 30,
          }}
          xAxis={[
            {
              scaleType: "point",
              data: XData,
              dataKey: "x",
              label: "X-Axis Label",
              // Use xLabels for xAxis labels
              ticks: xLabels,
            },
          ]}
          yAxis={[
            {
              label: "Y-Axis Label",
              // Use yLabels for yAxis labels
              ticks: yLabels,
            },
          ]}
          series={[
            {
              dataKey: "y",
              showMark: false,
              color: theme.palette.primary.light,
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: {
              stroke: theme.palette.text.secondary,
            },
            [`.${axisClasses.root} text`]: {
              fill: theme.palette.text.secondary,
            },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: "translateX(-25px)",
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
