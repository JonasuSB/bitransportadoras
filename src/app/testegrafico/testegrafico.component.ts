import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { shippingsData } from './mock';


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
    const option: echarts.EChartsOption = {
      title: {
        text: 'Gráfico de Barras Exemplo'
      },
      tooltip: {trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'log',
      },
      yAxis: {
        type: 'category',
        data: shippingsData.items.map((item) => ({
          value: item.shipping.name,
          textStyle: { fontWeight: 'bold', color: 'black' },
        })),
      },
      series: [
        {
          name: 'Em Preparação',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: shippingsData.items.map((item) => item.waintPrintItems),
        },
        {
          name: 'A Separar',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            formatter: (params: any) =>
              params.value.toLocaleString('pt-BR') + ' UN',
          },
          emphasis: {
            focus: 'series',
          },
          data: shippingsData.items.map((shipping) => shipping.separatingItems),
        },
        {
          name: 'Valor',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            formatter: (params: any) =>
              params.value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }),
          },
          emphasis: {
            focus: 'series',
          },
          data: sellers.items.map((seller) => seller.value),
        },
        {
          name: 'Margem',
          type: 'bar',
          stack: 'margin',
          label: {
            show: true,
            formatter: (params: any) => `${params.value}%`,
          },
          emphasis: {
            focus: 'series',
          },
          data: sellers.items.map((seller) => seller.margin),
        },
        {
          name: 'Prazo Médio',
          type: 'bar',
          stack: 'margin',
          label: {
            show: true,
            formatter: (params: any) => params.value.toLocaleString('pt-BR'),
          },
          emphasis: {
            focus: 'series',
          },
          data: sellers.items.map((seller) => seller.average),
        },
      ]
    };
    myChart.setOption(option);
  }

}