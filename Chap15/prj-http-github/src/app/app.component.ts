import {Component, OnInit} from '@angular/core';
import {GithubService} from './github.service';
import {Repo} from './repo.model';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  template: `
      <h1>Liste des repositories</h1>
      <hr />
      <ul>
          <li *ngFor="let repo of repos; let i = index">
              <span>{{repo.id}} {{repo.name}}</span><span> --> <a (click)="delRepo(repo, i)" href="#">Supprimer</a></span>
          </li>
      </ul>
      <hr />
      <input placeholder="créer un nouveau repo" #repo />
      <button (click)="addRepo(repo.value); repo.value=''">Créer un nouveau repo</button>
      <hr>
      <p  *ngIf="message">{{message}}</p>`
})
export class AppComponent implements OnInit {

  repos: Repo[];
  message: string;

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.getRepos('wKoza');
  }

  getRepos(username: string): void {
    this.message = null;
    this.githubService.getRepos(username).subscribe(
        repos => {
          this.repos = repos;
          console.log(repos);
        },
        error => this.message = error
    );
  }

  addRepo(reponame: string): void {

    this.message = null;

    this.githubService.addRepo(reponame)
        .flatMap(repo => {
          this.message = repo.name + ' a été créé';
          return this.githubService.getRepos('wKoza');
        })
        .subscribe(
            repos => {
              this.repos = repos;
            },
            error => this.message = error
        );
  }

  delRepo(repo: Repo, index: number): void {

    this.message = null;

    this.githubService.delRepo('wKoza', repo.name)
        .subscribe(
            (status) => {
              this.message = 'Repository supprimé avec status ' + status;
              this.repos.splice(index, 1);
            },
            error => this.message = error
        );
  }

}
