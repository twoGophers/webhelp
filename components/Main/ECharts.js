'use client'
import React from 'react'
import ReactECharts from 'echarts-for-react';

import './ECharts.scss'
import PriceGreen from '../UI/PriceGreen';

import item from "@/api/statistic"
import Link from 'next/link';

export default function ECharts() {
    const option = {
        tooltip: {
          trigger: 'axis',
        },
        // legend: {
        //   data: ['Revenue', 'Expenses'],
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
          ],
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 250000,
          interval: 50000,
          splitLine: { show: false }, // Убираем вертикальные линии
        },
        series: [
          {
            name: 'Revenue',
            type: 'line',
            smooth: true,
            data: [25000, 35000, 15000, null, 75000, null, 50000, null, 150000, null, 50000, null],
            areaStyle: { color: 'rgba(66, 135, 245, 0.4)' },
            lineStyle: { color: '#00C2FF', width: 2 },
            connectNulls: true, 
          },
          {
            name: 'Expenses',
            type: 'line',
            smooth: true,
            data: [0, null, null, null, 100000, null, 100000, null, null, null, null, 220000],
            areaStyle: { color: 'rgba(155, 66, 245, 0.4)' },
            lineStyle: { color: '#CB3CFF', width: 2 },
            connectNulls: true,
            markPoint: {
              data: [
                {
                  name: 'Current Point', // Название точки
                  coord: [4, 100000], // Мая (индекс 4), значение 100000
                  symbol: 'circle', 
                  symbolSize: 10, // Размер круга
                  itemStyle: { color: '#CB3CFF' }, // Цвет точки
                  label: {
                    show: true,
                    formatter: (100000 / 1000).toFixed(1) + 'K',
                    position: 'top',
                    color: '#fff',
                    fontWeight: 'bold',
                  },
                },
              ],
            },
          },
        ],
    };

    const optionDiagram = {
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: [
            '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
            '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
          ], // Все 24 часа на оси X
          axisLine: {
            lineStyle: {
              color: '#dcdcdc', // Цвет линии оси X
            },
          },
          axisLabel: {
            color: '#AEB9E1', // Цвет текста меток на оси X
            interval: 7, // Показывать метки только на 12 AM, 8 AM, 4 PM, 11 PM
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          show: false, // Скрыть ось Y
          splitLine: {
            show: false, // Убираем вертикальные линии
          },
        },
        series: [
          {
            data: [1200, 1500, 1800, 1300, 2000, 2300, 2500, 2200, 2100, 2400, 2600, 2800, 1500, 2000, 2500, 2200, 2800, 2000, 1200, 2800, 2500, 1700, 1900, 1200], 
            type: 'bar', // Столбики
            barWidth: '50%', // Ширина столбиков
            itemStyle: {
              normal: {
                color: function (params) {
                  // Чередование цветов для столбиков
                  return params.dataIndex % 2 === 0 ? '#00C2FF' : '#CB3CFF';
                },
              },
            },
          },
        ],
    };
    
    const optionLine = {
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: [
            '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', 
            '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', 
            '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
          ],
          axisLine: {
            lineStyle: {
              color: '#dcdcdc', // Цвет оси X
            },
          },
          axisLabel: {
            color: '#AEB9E1', // Цвет подписей на оси X
            interval: 7, // Отображать только 12 AM, 8 AM, 4 PM, 11 PM
          },
        //   splitLine: {
        //     show: true, // Разделительные вертикальные линии
        //     lineStyle: {
        //       color: '#eaeaea',
        //       type: 'dashed',
        //     },
        //   },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 500,
          interval: 100,
          axisLine: {
            lineStyle: {
              color: '#dcdcdc', // Цвет оси Y
            },
          },
          axisLabel: {
            color: '#AEB9E1',
          },
        //   splitLine: {
        //     show: true, // Разделительные горизонтальные линии
        //     lineStyle: {
        //       color: '#eaeaea',
        //       type: 'dashed',
        //     },
        //   },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [
              0, 50, 100, 150, 200, 250, 250, 250, // до 8 AM
              300, 350, 400, 450, 500, 450, 400, 350, // пик между 8 AM и 4 PM
              250, 200, 150, 100, 50, 25, 0, 0 // Спад и завершение
            ],
            type: 'line',
            smooth: true,
            areaStyle: {
              color: 'rgba(0, 194, 255, 0.3)', // Полупрозрачная заливка
            },
            lineStyle: {
              color: '#00C2FF', // Цвет линии
              width: 2,
            },
            symbol: 'circle', // Точки на линии
            symbolSize: 6,
            itemStyle: {
              color: '#00C2FF',
              borderWidth: 2,
            },
          },
        ],
    };
    
      return (
        <div className='charts'>
            <div className='charts__schedule'>
                <div className='charts__title'>
                    <div>
                        <span>Total revenue</span>
                        <div className='charts__total-price'>
                            $ <PriceGreen item={item[1]} />
                        </div>
                    </div>
                    <div className='charts__line-name'>
                        <div className='charts__revenue'>Revenue</div>
                        <div className='charts__expenses'>Expenses</div>
                        <div>Jan 2024 - Dec 2024</div>
                    </div>
                </div>
                <ReactECharts option={option} style={{ height: '100%', width: '100%', display: 'flex' }} />;
            </div>
            <div className='charts__diagram'>
                <div className='charts__diagram-item'>
                    <span>Total profit</span>
                    <div className='charts__total-price'>
                        $ <PriceGreen item={item[1]} />
                    </div>
                    <ReactECharts option={optionDiagram} style={{ height: '100%', width: '100%', display: 'flex' }} />
                    <div className='charts__total-price-foot'>
                        <span>Daily profit</span>
                        <Link href={'/'}>View report</Link>
                    </div>
                </div>
                <div className='charts__diagram-item'>
                    <span>Total sessions</span>
                    <div className='charts__total-price'>
                        $ <PriceGreen item={item[1]} />
                    </div>
                    <ReactECharts option={optionLine} style={{ height: '100%', width: '100%', display: 'flex' }} />
                    <div className='charts__total-price-foot'>
                        <span>Daily profit</span>
                        <Link href={'/'}>View report</Link>
                    </div>
                </div>
            </div>
        </div>

      ) 
}
