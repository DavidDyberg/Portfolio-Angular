import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projectType } from '../../types/projectTypes';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private apiUrl = 'https://david-dyberg-portfolio-api.vercel.app/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<projectType[]> {
    return this.http.get<projectType[]>(this.apiUrl);
  }

  getProjectById(id: string): Observable<projectType> {
    return this.http.get<projectType>(`${this.apiUrl}/${id}`);
  }
  addProject(project: Partial<projectType>): Observable<projectType> {
    return this.http.post<projectType>(this.apiUrl, project);
  }
}
