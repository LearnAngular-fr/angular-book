import { PrjCommunicationPage } from './app.po';

describe('prj-communication App', () => {
  let page: PrjCommunicationPage;

  beforeEach(() => {
    page = new PrjCommunicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
