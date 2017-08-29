import { MonProjetModulairePage } from './app.po';

describe('mon-projet-modulaire App', () => {
  let page: MonProjetModulairePage;

  beforeEach(() => {
    page = new MonProjetModulairePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
