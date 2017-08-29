import { PrjDataBindingPage } from './app.po';

describe('prj-data-binding App', () => {
  let page: PrjDataBindingPage;

  beforeEach(() => {
    page = new PrjDataBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
