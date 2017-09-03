import { MonProjetRoutagePage } from './app.po';

describe('mon-projet-routage App', () => {
  let page: MonProjetRoutagePage;

  beforeEach(() => {
    page = new MonProjetRoutagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
