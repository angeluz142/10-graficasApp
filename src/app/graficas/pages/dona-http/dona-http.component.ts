import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
    `
      .lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  background-color:#146152;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}


    `
  ]
})
export class DonaHttpComponent implements OnInit {


  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels:[],
    datasets: [
      { data: [],  
        backgroundColor: [
        '#FF5A33',
        '#FFEC5C',
        '#B4CF66'
      ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor(private _srvGrafica:GraficasService) { }

  ngOnInit(): void {
    this._srvGrafica.getUserBySocials()
    .subscribe(data => {
      this.doughnutChartData.labels = Object.keys(data);
      const values:number[] = Object.values(data);
      this.doughnutChartData.datasets[0].data = values;
      console.log(this.doughnutChartData.datasets);      
    })
  }

}
