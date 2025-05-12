import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type projectType = {
  _id: string;
  title: string;
  description: string;
  image?: string;
  techStack?: string[];
  githubLink?: string;
  liveDemo?: string;
};

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private apiUrl = 'https://david-dyberg-portfolio-api.vercel.app/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<projectType[]> {
    return this.http.get<projectType[]>(this.apiUrl);
  }
}
