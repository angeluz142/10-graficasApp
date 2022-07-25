import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private httpCli:HttpClient) { }


  getUserBySocials(){
    return this.httpCli.get('http://localhost:3000/grafica');
  }


}
