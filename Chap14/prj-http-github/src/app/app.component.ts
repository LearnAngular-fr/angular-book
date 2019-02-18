import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs/operators';
import { Repo } from './repo.model';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  template: `
      <h1>Liste des repositories</h1>
      <hr/>
      <ul>
          <li *ngFor="let repo of repos; let i = index">
              <span>{{repo.id}} {{repo.name}}</span>
              <span> --> <a (click)="delRepo(repo, i)" href="#">Supprimer</a>
	          </span>
          </li>
      </ul>
      <hr/>
      <input placeholder="créer un nouveau repo" #repo/>
      <button (click)="addRepo(repo.value); repo.value=''">Créer un nouveau repo</button>
      <hr>
      <p *ngIf="message">{{message}}</p>
  `
})
export class AppComponent implements OnInit {

  repos: Repo[];
  message: string;
  username = 'wkoza';


  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.getRepos(this.username);
  }


  getRepos(username: string): void {

    this.message = null;

    this.githubService.getRepos(username).subscribe(
      repos => this.repos = repos,
      error => this.message = error.message
    );

  }

  addRepo(reponame: string): void {

    this.message = null;

    this.githubService.addRepo(reponame).pipe(
      flatMap(repo => {
        this.message = repo.name + ' a été créé';
        return this.githubService.getRepos(this.username);
      }))
      .subscribe(
        repos => {
          this.repos = repos;
        },
        error => this.message = error.message
      );
  }

  delRepo(repo: Repo, index: number): void {

    this.message = null;

    this.githubService.delRepo(this.username, repo.name)
      .subscribe(
        () => {
          this.message = 'Repository supprimé';
          this.repos.splice(index, 1);
        },
        error => this.message = error.message
      );
  }

}
