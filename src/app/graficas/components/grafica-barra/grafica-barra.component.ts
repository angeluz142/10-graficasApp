import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartType, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html'
})
export class GraficaBarraComponent implements OnInit {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true  ,
    indexAxis:'x'
  };
  public barChartType: ChartType = 'bar';

  @Input() horizontal:boolean = false;
  @Input() labels:string[]=[];
  @Input() dataset:ChartDataset<'bar'>[]=[];


  public barChartData: ChartData<'bar'> = {
    labels:[],
    datasets:[]
  } ;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.horizontal);
    
    if(this.horizontal){
      this.barChartOptions!.indexAxis='y';
    }
    
    this.barChartData.labels = this.labels;
    this.barChartData.datasets = this.dataset;
  }

}
