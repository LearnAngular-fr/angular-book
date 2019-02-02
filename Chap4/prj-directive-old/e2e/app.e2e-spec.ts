import { PrjDirectivePage } from './app.po';

describe('prj-directive App', () => {
  let page: PrjDirectivePage;

  beforeEach(() => {
    page = new PrjDirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
