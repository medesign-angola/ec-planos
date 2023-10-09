import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects = new BehaviorSubject<any | null>(null);
  projects$: Observable<any | null> = this.projects.asObservable();

  constructor(private http: HttpClient) {
    this.fetchProjects();
  }

  fetchProjects(): void {
    const apiUrl = 'https://ec-planos-bo.medesign-angola.com/wp-json/wp/v2/pages/?slug=projectos'; 
    this.http.get<any>(apiUrl).subscribe(
      (projects: any) => {
        this.projects.next(projects['0'].acf.projectos);
      },
      (error: Error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  getProjects() {
    return this.projects;
  }

  getProjectByName(projectName: string): Observable<Project | null> {
    return this.projects.pipe(
      map((projects:any) => 
      projects?.find((project:any) => 
      project.titulo_apresentacao.toLowerCase() === projectName.toLowerCase()))
    );
  }
}


export interface Project {
  cliente: string
  data_execucao: string
  briefing: string
  descricao_area_1: string
  descricao_area_2: string
  equipa: string
  imagem_apresentacao: string
  imagem_area_1: string
  imagem_area_2: string
  imagem_capa: string
  imagem_informacao_adicional_1: string
  imagem_informacao_adicional_2: string
  informacao_adicional_1: string
  informacao_adicional_2: string
  seguimento: string
  titulo_apresentacao: string
  titulo_projecto: string
  descricao_apresentacao: string
}
