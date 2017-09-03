import { Injectable } from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/mergeMap";


import {Repo} from "./Repo.model";


@Injectable()
export class GithubService {

  private urlBuilder: UrlBuilder;

  constructor(private http:Http) {
    this.urlBuilder = new UrlBuilder(environment.GITHUB_API_ROOT, environment.GITHUB_API_TOKEN);
  }

  getRepos(username:string): Observable<Repo[]> {
    return this.http.get(this.urlBuilder.getRepos(username))
      .map(res => res.json())
      .catch(this.handleError);
  }

  delRepo(username:string,repository:string): Observable<string> {

    return this.http.delete(this.urlBuilder.delRepo(username,repository))
      .map(res => res.status)
      .catch(this.handleError)
  }

  addRepo(reponame:string): Observable<Repo> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.urlBuilder.addRepo(),{name:reponame},options)
      .map(res => res.json())
      .catch(this.handleError)
  }



  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}


class UrlBuilder {

  constructor(private url:string, private token:string){}

  getRepos(username:string):string{
    return this.appendToken(`${this.url}/users/${username}/repos`);
  }

  delRepo(username:string,repository:string):string {
    return this.appendToken(`${this.url}/repos/${username}/${repository}`);
  }

  addRepo():string {
    return this.appendToken(`${this.url}/user/repos`);
  }

  private appendToken(url:string):string{
    if(this.token){
      return url+`?access_token=${this.token}`;
    }
    return url;
  }

}
