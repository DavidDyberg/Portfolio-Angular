import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { AboutType } from '../../types/aboutType';
@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private apiUrl = 'https://david-dyberg-portfolio-api.vercel.app/api/about';
  private cachedData: AboutType | null = null;

  constructor(private http: HttpClient) {}

  getAboutData(): Observable<AboutType> {
    if (this.cachedData) {
      return of(this.cachedData);
    }
    return this.http.get<AboutType[]>(this.apiUrl).pipe(
      map((data) => {
        this.cachedData = data[0];
        return this.cachedData;
      })
    );
  }
}
