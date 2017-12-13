import { PrjFormPage } from './app.po';

describe('prj-form App', () => {
  let page: PrjFormPage;

  beforeEach(() => {
    page = new PrjFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
