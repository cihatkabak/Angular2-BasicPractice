import { TestProjePage } from './app.po';

describe('test-proje App', function() {
  let page: TestProjePage;

  beforeEach(() => {
    page = new TestProjePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
