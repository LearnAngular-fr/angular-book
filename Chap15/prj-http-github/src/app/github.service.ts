import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Repo } from './Repo.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


class UrlBuilder {

    constructor(private url: string, private token: string) {
    }

    getRepos(username: string): string {
        return this.appendToken(`${this.url}/users/${username}/repos`);
    }

    delRepo(username: string, repository: string): string {
        return this.appendToken(`${this.url}/repos/${username}/${repository}`);
    }

    addRepo(): string {
        return this.appendToken(`${this.url}/user/repos`);
    }

    private appendToken(url: string): string {
        if (this.token) {
            return url + `?access_token=${this.token}`;
        }
        return url;
    }

}

@Injectable()
export class GithubService {

    private urlBuilder: UrlBuilder;

    constructor(private http: HttpClient) {
        this.urlBuilder = new UrlBuilder(environment.GITHUB_API_ROOT, environment.GITHUB_API_TOKEN);
    }

    getRepos(username: string): Observable<Repo[]> {
        return this.http.get<Repo[]>(this.urlBuilder.getRepos(username))
            .catch(this.handleError);
    }

    delRepo(username: string, repository: string): Observable<string> {
        return this.http.delete(this.urlBuilder.delRepo(username, repository), {observe: 'response'})
            .map((res: HttpResponse<Response>) => res.status)
            .catch(this.handleError);
    }

    addRepo(reponame: string): Observable<Repo> {
        return this.http.post<Repo>(this.urlBuilder.addRepo(), {name: reponame})
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {

        let errMsg: string;
        if (err.error instanceof Error) {
            errMsg = err.error.message ? err.error.message : err.error.toString();
        } else {
            errMsg = `${err.status} - ${err.statusText || ''} ${err.error}`;
        }
        console.error(errMsg);
        return Observable.throw(err);
    }

}

