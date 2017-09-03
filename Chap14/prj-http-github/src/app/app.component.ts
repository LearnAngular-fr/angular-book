import {Component, OnInit} from '@angular/core';
import {GithubService} from './github.service';
import {Repo} from './Repo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  repos: Repo[];
  message: string;

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.getRepos('learnAngular');
  }

  getRepos(username: string): void {
    this.message = null;
    this.githubService.getRepos(username).subscribe(
      repos => {
        this.repos = repos
        console.log(repos);
      },
      error => this.message = error
    );
  }

  addRepo(reponame: string): void {

    this.message = null;

    this.githubService.addRepo(reponame).map(repo => repo)
      .flatMap(repo => {
        this.message = repo.name + ' a été créé';
        return this.githubService.getRepos('learnAngular')
      })
      .subscribe(
        repos => {
          this.repos = repos
        },
        error => this.message = error
      )
  }

  delRepo(repo: Repo, index: number): void {

    this.message = null;

    this.githubService.delRepo('wKoza', repo.name)
      .subscribe(
        () => {
          this.message = 'Repository supprimé';
          this.repos.splice(index, 1);
        },
        error => this.message = error
      )
  }

}
