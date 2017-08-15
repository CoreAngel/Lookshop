import { LookShopPage } from './app.po';

describe('look-shop App', () => {
  let page: LookShopPage;

  beforeEach(() => {
    page = new LookShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
