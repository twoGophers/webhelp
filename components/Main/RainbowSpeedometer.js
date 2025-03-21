'use client'
import React from "react";
import ReactECharts from "echarts-for-react";
import './RainbowSpeedometer.scss'
import { SpeedRounded } from "@mui/icons-material";

const speedometerData = [
    { value: 15624, color:  "#CB3CFF", test: "Desktop users" },
    { value: 5546, color: "#0038FF", test: "Phone app users" },
    { value: 2478, color: "#00C2FF", test: "Laptop users" },

  ];
  
  const RainbowSpeedometer = () => {
    const total = speedometerData.reduce((sum, item) => sum + item.value, 0);
  
    const option = {
      series: [
        {
          type: "gauge",
          startAngle: 180,
          endAngle: 0,
          radius: "90%",
          progress: { show: true, width: 15 },
          pointer: { show: false },
          axisLine: {
            lineStyle: {
              width: 15,
              color: [
                [speedometerData[0].value / total, speedometerData[0].color],
                [(speedometerData[0].value + speedometerData[1].value) / total, speedometerData[1].color],
                [1, speedometerData[2].color],
              ],
            },
          },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
        },
      ],
    };
  
    return (
        <div className="speed">
            <div className="speed__color">
                <ReactECharts option={option} style={{ height: "250px", width: "100%" }} />
                <div className="speed__total">
                    {total}
                    <span>Users by device</span>
                </div>
            </div>
            <div className="speed__info">
                {
                    speedometerData.map((item, index) => (
                        <div className="speed__info-block" key={index}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="speed__info-eclipse" style={{ background: item.color }}></div>
                                <span>{item.test}</span>
                            </div>
                            <span>{item.value.toLocaleString('en-US')}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    ) 
  };
  
  export default RainbowSpeedometer;