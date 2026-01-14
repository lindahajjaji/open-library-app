import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  
  private subjectUrl = 'https://openlibrary.org/subjects/computers.json';
  private worksUrl = 'https://openlibrary.org/works';

  constructor(private http: HttpClient) {}
  getBooksList(): Observable<any> {
    return this.http.get<any>(this.subjectUrl);
  }

  
  getBookById(id: string): Observable<any> {
    return this.http.get<any>(`${this.worksUrl}/${id}.json`);
  }

  
  searchByTitle(title: string): Observable<any> {
    return this.http.get<any>(
      `https://openlibrary.org/search.json?title=${title}`
    );
  }
  
  searchByYear(year: number): Observable<any> {
    return this.http.get<any>(
      `https://openlibrary.org/search.json?first_publish_year=${year}`
    );
  }

}
