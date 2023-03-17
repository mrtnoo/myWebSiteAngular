import { Component,  OnInit } from '@angular/core';
import { project } from 'src/app/modelo/Project';
import { projectService } from 'src/app/services/project.service';
import { ProjectsComponent } from '../Project/projects.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [projectService]
})
export class CreateComponent implements OnInit {

  public project: project;
  public title: string;
  

  constructor(
    private _projectService: projectService
  ){
    this.title = "Crear proyecto";
    this.project = new project('','','','',2023,'','');
  }
    

  ngOnInit(){

  }

  onSubmit(form: any){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response =>{

      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
