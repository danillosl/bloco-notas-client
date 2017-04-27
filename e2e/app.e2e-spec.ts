import { BlocoNotasClientPage } from './app.po';

describe('bloco-notas-client App', () => {
  let page: BlocoNotasClientPage;

  beforeEach(() => {
    page = new BlocoNotasClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
