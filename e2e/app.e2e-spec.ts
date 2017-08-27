import { Angular2RxJsPage } from './app.po';

describe('angular2-rx-js App', () => {
  let page: Angular2RxJsPage;

  beforeEach(() => {
    page = new Angular2RxJsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
