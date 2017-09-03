import { PrjServicePage } from './app.po';

describe('prj-service App', () => {
  let page: PrjServicePage;

  beforeEach(() => {
    page = new PrjServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
