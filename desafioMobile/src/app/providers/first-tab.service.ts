import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstTabService {

  constructor(private http: HttpClient) { }


  getReleases(): Observable<any> {
    return this.http.get("https://api.github.com/repos/balderdashy/sails/releases");
  }

}
