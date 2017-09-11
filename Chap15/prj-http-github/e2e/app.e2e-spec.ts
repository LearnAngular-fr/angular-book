import { PrjHttpGithubPage } from './app.po';

describe('prj-http-github App', () => {
  let page: PrjHttpGithubPage;

  beforeEach(() => {
    page = new PrjHttpGithubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
