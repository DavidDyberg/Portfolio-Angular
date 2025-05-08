import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

type AboutType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: number;
  bio?: string;
  phoneNumber?: string;
  profileImage?: string;
  skills?: string[];
  socials?: {
    platformLogo?: string;
    url?: string;
  }[];
};

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private apiUrl = 'https://david-dyberg-portfolio-api.vercel.app/api/about';

  constructor(private http: HttpClient) {}

  getAboutData(): Observable<AboutType> {
    return this.http.get<AboutType[]>(this.apiUrl).pipe(map((data) => data[0]));
  }
}
