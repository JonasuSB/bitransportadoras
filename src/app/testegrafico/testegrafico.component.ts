import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { shippingsData } from '../model/mock';


@Component({
  selector: 'app-testegrafico',
  standalone: true,
  imports: [],
  templateUrl: './testegrafico.component.html',
  styleUrl: './testegrafico.component.scss'
})
export class TestegraficoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    const filteredData = shippingsData.items.filter(item =>
      item.waintPrintItems > 0 ||
      item.separatingItems > 0 ||
      item.expeditingItems > 0 ||
      item.expeditionFinItems > 0
    );
    const option: echarts.EChartsOption = {
      title: {
        text: 'Gráfico de Barras Exemplo'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        top: '10%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: filteredData.map(item => ({
          value: item.shipping.name,
          textStyle: { fontWeight: 'bold', color: 'black' },
        })),
      },
      series: [
        {
          name: 'Em Preparação',
          type: 'bar',
          stack: 'total',
          barWidth: 25,
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: filteredData.map(item => item.waintPrintItems || null),
        },
        {
          name: 'A Separar',
          type: 'bar',
          stack: 'total',
          barWidth: 25,
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: filteredData.map(item => item.separatingItems || null),
        },
        {
          name: 'A Expedir',
          type: 'bar',
          stack: 'total',
          barWidth: 25,
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: filteredData.map(item => item.expeditingItems || null),
        },
        {
          name: 'Expedição Finalizada',
          type: 'bar',
          stack: 'margin',
          barWidth: 25,
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: filteredData.map(item => item.expeditionFinItems || null),
        },
      ],
      barGap: '15%',
    };
    myChart.setOption(option);
  }
}