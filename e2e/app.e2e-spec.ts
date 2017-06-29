import { PosreportsPage } from './app.po';

describe('posreports App', () => {
  let page: PosreportsPage;

  beforeEach(() => {
    page = new PosreportsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
