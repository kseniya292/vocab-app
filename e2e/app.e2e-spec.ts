import { VocabAppPage } from './app.po';

describe('vocab-app App', () => {
  let page: VocabAppPage;

  beforeEach(() => {
    page = new VocabAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
