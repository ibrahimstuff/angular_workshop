import { AnguarHnPage } from './app.po';

describe('anguar-hn App', () => {
  let page: AnguarHnPage;

  beforeEach(() => {
    page = new AnguarHnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hn works!');
  });
});
