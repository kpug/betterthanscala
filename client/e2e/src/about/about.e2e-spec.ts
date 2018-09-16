import { HomePage } from './home.po';
import { getCurrentRouteUrl } from '../utils';

describe('Home Page', () => {
  let page: HomePage;

  beforeEach(() => (page = new HomePage()));

  it('should display main heading', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ANGULAR NGRX MATERIAL STARTER');
  });

  it('should display "Geting Started" section', () => {
    page.navigateTo();
    page
      .getGettingStarted()
      .isPresent()
      .then(isPresent => expect(isPresent).toBe(true));
  });

  it('first action button should lead to "Features" route', () => {
    page.navigateTo();
    page
      .getActionButton(0)
      .click()
      .then(() => expect(getCurrentRouteUrl()).toBe('features'));
  });
});
