import { testController } from '../support/world'
import { select } from '../support/utils'
import { ClientFunction } from 'testcafe';

const dotenv = require('dotenv');

export class Login {
  constructor () {
    dotenv.config();
    this.url = process.env.URL_HOST
    this.urlHome = process.env.URL_HOST + `apps/home`
  }
//LOGIN SELECTORS

  googleLoginSection () {
    return select('button.MuiButtonBase-root:nth-child(2) > span:nth-child(1)');
  }
  googleLoginButton () {
    return select('.jss9');
  }

  nextGoogle () {
    return select('#identifierNext > div > button');
  }
  emailImput  () {
    return select('#identifierId')
  }

  passwordImput () {
    return select('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input')
  }

  nextGoogleFinal () {
    return select('#passwordNext > div > button');
  }

  appoveGoogleAccount () {
    return select('#submit_approve_access > div > button > span')
  }

  webtoolDescription () {
    return select('h6.MuiTypography-root:nth-child(3)').exists
  }
  
  searchMasImg () {
    return select ('.w-128').exists
  }
  
  webtoolTitle () {
    return select ('h3.MuiTypography-root').innerText
  }

  loginButton () {
    return select('.MuiButton-label');
  }
  registerAccountButton() {
    return select('a.font-medium');
  }

  async navigate () {
    await testController.navigateTo(this.url)
  }

  async navigateHome () {
    dotenv.config();
    this.urlHome = process.env.URL_HOST + `apps/home`;
    console.log(this.urlHome);
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains(this.urlHome);
  }
  async navigateHomeAndExit () {
    dotenv.config();
    this.urlHome = process.env.URL_HOST + `apps/home`;
    console.log(this.urlHome);
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController
    .expect(getLocation()).contains(this.urlHome)
    .click(this.logoutButton())
    .expect(getLocation()).contains(this.url);
  }

  async login (email) {
    await testController
      .click(this.googleLoginSection())
      .click(this.googleLoginButton())
      .click(this.emailImput())
      .typeText(this.emailImput(), email, { paste: false })
      .wait(5000)
      .click(this.nextGoogle())
      .click(this.passwordImput())
      .typeText(this.passwordImput(), process.env.PASSWORD, { paste: true })
      .wait(5000)
      .click(this.nextGoogleFinal())
      .click(this.appoveGoogleAccount())
      .wait(5000)
  }

  async loginValidate () {
    const webtoolTitle = this.webtoolTitle();
    const webtoolDescription = this.webtoolDescription();
    const searchMasImg = this.searchMasImg();

    await testController
      .expect(webtoolDescription).ok('El titulo de Semillas se visualiza', { allowUnawaitedPromise: false })
      .expect(searchMasImg).ok('El logo de searchmas se visualiza', { allowUnawaitedPromise: false })
      .expect(webtoolTitle).eql("Bienvenido a SearchMAS")
  }

  async singUpNavigate() {
    await testController
      .click(this.registerAccountButton());
  }
}
