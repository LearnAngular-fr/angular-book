import { PrjLazyloadingPage } from './app.po';

describe('prj-lazyloading App', () => {
  let page: PrjLazyloadingPage;

  beforeEach(() => {
    page = new PrjLazyloadingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
