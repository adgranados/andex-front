import { AndexPage } from './app.po';

describe('andex App', () => {
  let page: AndexPage;

  beforeEach(() => {
    page = new AndexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
