import { SiteVisitCardPage } from './app.po';

describe('site-visit-card App', () => {
  let page: SiteVisitCardPage;

  beforeEach(() => {
    page = new SiteVisitCardPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
