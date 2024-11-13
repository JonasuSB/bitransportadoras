import { Component, OnInit } from '@angular/core';
import { mockData } from '../model/mock-data';
import * as echarts from 'echarts';

@Component({
  selector: 'app-testegrafico2',
  standalone: true,
  imports: [],
  templateUrl: './testegrafico2.component.html',
  styleUrl: './testegrafico2.component.scss'
})
export class Testegrafico2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }


  initChart(): void {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    const filteredData = mockData.items.filter((item) => 
      item.qty > 0 ||
      item.cubage > 0 || 
      item.weight > 0
    );
    const option: echarts.EChartsOption = {
      title: {
        text: 'Gráfico de expedição semanal'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['qtd', 'cubagem', 'peso'],
        selected: {
          qtd: true,
          cubagem: false,
          peso: false,
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: filteredData.map((item) => item.day)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'qtd',
          type: 'line',
          stack: 'Total',
          data: filteredData.map((item) => item.qty)
        },
        {
          name: 'cubagem',
          type: 'line',
          stack: 'Total',
          data: filteredData.map((item) => item.cubage)
        },
        {
          name: 'peso',
          type: 'line',
          stack: 'Total',
          data: filteredData.map((item) => item.weight)
        },
      ]
    };

    myChart.setOption(option);

  }
}