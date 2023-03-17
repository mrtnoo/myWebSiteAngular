import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { project } from '../modelo/Project';
import { global } from './global';

@Injectable()
export class projectService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    testService(){
        return 'probando el servidor angular'
    }

    saveProject(project: project){
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','aplication/json')

        return this._http.post(this.url+'save-`rpject', params, {headers: headers});
    }
    
}