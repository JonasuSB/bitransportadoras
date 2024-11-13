import { Component, OnInit } from '@angular/core';
import { mockData } from '../model/mock-data';
import * as echarts from 'echarts';

@Component({
  selector: 'app-testegrafico3',
  standalone: true,
  imports: [],
  templateUrl: './testegrafico3.component.html',
  styleUrl: './testegrafico3.component.scss'
})
export class Testegrafico3Component implements OnInit {

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
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: filteredData.map((item) => item.day)
      },
      yAxis: {
        type: 'value'
      },
      legend: {
        data: ['qtd', 'cubagem', 'peso'],
        selected: {
          qtd: true,
          cubagem: false,
          peso: false,
        },
      },
      series: [
        {
          name: 'qtd',
          data: filteredData.map((item) => item.qty),
          type: 'bar',
          barWidth: 65
        },
        {
          name: 'cubagem',
          data: filteredData.map((item) => item.cubage),
          type: 'bar',
          barWidth: 65
        },
        {
          name: 'peso',
          data: filteredData.map((item) => item.weight),
          type: 'bar',
          barWidth: 65
        },
      ]
    };

    myChart.setOption(option);

  }
}