import { EmiratesairlineTodoappPage } from './app.po';

describe('emiratesairline-todoapp App', () => {
  let page: EmiratesairlineTodoappPage;

  beforeEach(() => {
    page = new EmiratesairlineTodoappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
