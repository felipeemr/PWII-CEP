import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepAPIService {
  apiURL: string = "https://viacep.com.br/ws/";

  constructor(private httpClient: HttpClient) { }
handleError(error){
  let errorMenssage = `Error code: ${error.status}\nMenssage: $Menssage: ${error.menssage}`;
  alert(errorMenssage);
  return throwError(errorMenssage);
  
}
}
