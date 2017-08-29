import { MonPremierProjetPage } from './app.po';

describe('mon-premier-projet App', () => {
  let page: MonPremierProjetPage;

  beforeEach(() => {
    page = new MonPremierProjetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
