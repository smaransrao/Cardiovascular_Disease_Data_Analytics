import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private http: HttpClient) { }

  sendDataInsert(data:any)
  {
    console.log(data);
    return this.http.post("api/insert",data).toPromise().then(response => {
      return response;
    });
  }

  sendDataFindSpecific(data:any){
    console.log(data);
    return this.http.post("api/findSpecific",data).toPromise().then(response => {
      return response;
  });
  }
  
  sendDataDelete(data:any){
    console.log(data);
    return this.http.post("api/delete",data).toPromise().then(response => {
      return response;
  });
  }

  sendDataUpdate(data:any){
    console.log(data);
    return this.http.post("api/update",data).toPromise().then(response => {
      return response;
  });
  }

  getAllData()
  {
    return this.http.get("api/findAll").toPromise().then(response => {
      return response;
    });
  }
}
