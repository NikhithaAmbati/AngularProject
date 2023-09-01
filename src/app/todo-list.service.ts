import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  //addData: any;

  private apiUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  getValues(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateValue(id: string, newName: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, { name: newName });
  }

  deleteValue(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  addValue(newName: string): Observable<any> {
    return this.http.post(this.apiUrl, { name: newName });
  }
}