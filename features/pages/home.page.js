import { testController } from '../support/world'
import { select } from '../support/utils'
import { ClientFunction } from 'testcafe';

const dotenv = require('dotenv');

export class Home {
  constructor () {
    dotenv.config();
    this.url = process.env.URL_HOST + `/login`
    this.urlCart = process.env.URL_HOST + `/cart`
    this.urlCheckout = process.env.URL_HOST + `/checkout/#/payment`
  }

  //HOME SELECTORS
  async navigate () {
    await testController.navigateTo(this.url)
  }

  changeStoreButton () {
    return select ('.shipping-preference__change-preference')
  }

  changeStoreButton2 () {
    return select ('button.type-selector__button:nth-child(2)')
  }
  
  changeStoreButton3 () {
    return select ('.Select-input')
  }

  changeStoreButton4 () {
    return select ('#react-select-2--option-1')
  }

  recojoAquiButton() {
    return select ('.storepickup__submit > button:nth-child(1)')
  }
  
  closePopUp() {
    return select('.storepickup__submit > button:nth-child(1)')
  }
  
  acceptCookies(){
    return select('#home-page > div.swal2-container.swal2-bottom-left.swal2-fade.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled')
  }
  myAccountButton() {
    return select ('.user-menu__content')
  }
  loginButton() {
    return select('a.user-menu__link:nth-child(1)')
  }

  loginWithUserAndPasswordBtn () {
    return select ('#loginWithUserAndPasswordBtn > span:nth-child(1)')
  }

  emailInput () {
    return select ('#inputEmail')
  }

  passwordInput () {
    return select ('#inputPassword')
  }
  ingresarButton () {
    return select ('#vtexIdUI-form-classic-login > div:nth-child(3) > button:nth-child(2)')
  }

  searchInput () {
    return select ('#search-autocomplete-input')
  }

  moreProduct1Azucar () {
    return select ('div.product-item:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)')
  }

  moreProduct1AzucarAdd () {
    return select ('div.product-item:nth-child(1) > div:nth-child(4) > button:nth-child(2) > span:nth-child(1)')
  }
      
  moreProduct2Azucar () {
    return select ('div.product-item:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)')
  }

  moreProduct2AzucarAdd () {
    return select ('div.product-item:nth-child(3) > div:nth-child(4) > button:nth-child(2)')
  }  
    
  moreProduct3Azucar () {
    return select ('div.product-item:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)')
  }
  
  moreProduct3AzucarAdd () {
    return select ('div.product-item:nth-child(2) > div:nth-child(4) > button:nth-child(2)')
  }
    
  seeAllProductsButton() {
    return select ('.see-all > span:nth-child(1)')
  }

  moreProduct_1_Vino() {
    return select ('.product-item--4840 > div:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)')
  }
  
  moreProduct_1_Vino_Add () {
    return select ('div.product-item--4840:nth-child(1) > div:nth-child(3) > div:nth-child(5) > button:nth-child(2)')
  }

  moreProduct_2_Vino() {
    return select ('div.product-item--4841:nth-child(1) > div:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)')
  }
  
  moreProduct_2_Vino_Add () {
    return select ('div.product-item--4841:nth-child(1) > div:nth-child(3) > div:nth-child(5) > button:nth-child(2)')
  }

  moreProduct_3_Vino() {
    return select ('div.product-item--4839:nth-child(1) > div:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)')
  }   
  
  moreProduct_3_Vino_Add () {
    return select ('div.product-item--4839:nth-child(1) > div:nth-child(3) > div:nth-child(5) > button:nth-child(2)')
  }

  moreProduct_4_Vino() {
    return select ('.render-verified-mega--14903 > div:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)')
  }  

  moreProduct_4_Vino_Add () {
    return select ('.render-verified-mega--14903 > div:nth-child(3) > div:nth-child(5) > button:nth-child(2)')
  }
  
  seeCarritoButton () {
    return select ('div.minicart__body:nth-child(1) > div:nth-child(2) > a:nth-child(5)')
  }

  carritoButton() {
    return select ('button.btn:nth-child(5)')
  }   

  checkboxProduct () {
    return select ('span.field:nth-child(1) > label:nth-child(1) > span:nth-child(2)')
  }
   
  termsButton () {
    return select ('.terms-text')
  }
    
  finalizarCompraButton () {
    return select ('#bolsas-on-48h')
  }
  
  noAgregarBolsasButton () {
    return select ('.bolsa-noagregar > a:nth-child(1)')
  }

  retiroEnTiendaButton () {
    return select ('#shipping-data > div > div.accordion-inner > div:nth-child(3) > div.address-shipping-options > div > fieldset > div > div.span.btn-group.btn-group-vertical > label.shipping-option-item.label-vertical-group.input.btn.active > i')
  }

  pagoEnLinea () {
    return select ('#payment-group-creditCardPaymentGroup > span:nth-child(1)')
  }

  cuotasComboBox () {
    return select ('#creditCardpayment-card-0Brand')
  }

  cantidadCuotas () {
    return select ('#creditCardpayment-card-0Brand > option:nth-child(3)')
  }
  pagoContraEntregaButton() {
    return select ('#payment-data > div > div.accordion-body.collapse.in.payment-body > div > div.box-step > div.box-step-content > form.form-step.box-new.row-fluid > fieldset > div.required.payment-group-list-btn > button > span')
  }
 pagoContraEntregaDebitoButton () {
    return select ('#payment-data > div > div.accordion-body.collapse.in.payment-body > div > div.box-step > div.box-step-content > form.form-step.box-new.row-fluid > div > div.upondelivery-payment > div:nth-child(3) > label')
 }

 pagoVisaCheckbox () {
    return select ('#payment-data > div > div.accordion-body.collapse.in.payment-body > div > div.box-step > div.box-step-content > form.form-step.box-new.row-fluid > div > div.upondelivery-payment > div:nth-child(3) > div > div.upondelivery-payment-method__card.upondelivery-payment-method__debit.upondelivery-payment-method__debit--Visa > label')
 }   
 
 pagoCompraAhora () {
    return select ('#fakePaymentDataSubmit')
 } 
 
 selectPagoEfectivo () {
   return select ('#payment-data > div > div.accordion-body.collapse.in.payment-body > div > div.box-step > div.box-step-content > form.form-step.box-new.row-fluid > div > div.upondelivery-payment > div.upondelivery-payment-method.upondelivery-payment-method--cash > label')
 }
 muchasGracias(){
   return select ('body > div.mask-verify > div > div > p > span').exists;
 }

 selectTable () {
   return select ('tr:nth-child(4) > td:nth-child(1) > .picker__day')
 }
 selecttoday() {
   //return select('#P380435303_root > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)')
   return select ('#P256442040_root > div > div > div > div > div.picker__footer > button.picker__button--today')
 }
 selectDayDelivery () {
    return select ('#P1388642851_table > tbody > tr:nth-child(4) > td:nth-child(1) > div')
 }
 
 selectDay2Delivery () {
    return select ('#P1553204742_table > tbody > tr:nth-child(4) > td:nth-child(1) > div')
 }   

 selectMetodoDePago () {
    return select ('.btn-go-to-payment')
 }

 wongLogo() {
   return select ('#checkout-confirmation-header > div.checkout-header.clear-fix > div > div.logo-wrapper.pull-left > a')
 }
 logoutButton() {
   return select ('a.user-menu__link:nth-child(5)')
 }

  async homeValidate () {
    const homeTitle = this.homeTitle();
    const wellcomeHome = this.wellcomeHome();

    await testController
      .expect(wellcomeHome).ok('El texto de bienvenido a searchMas se visualiza', { allowUnawaitedPromise: false })
      .expect(homeTitle).eql("Inicio")
  }

 async testCompra () {
    await testController
     //.click(this.closePopUp())
     .wait(5000)
     //.click(this.acceptCookies())
     //.click(this.loginButton())
     //.click(this.myAccountButton())
     .click(this.loginWithUserAndPasswordBtn())
     .click(this.emailInput())
     .typeText(this.emailInput(), "gaston.genaud@coderio.co", {paste : true })
     .click(this.passwordInput())
     .typeText(this.passwordInput()(), "QAAutomation1", {paste : true })
     .click(this.ingresarButton())
     .wait(5000)
     .click(this.acceptCookies())
     .click(this.changeStoreButton())
     .click(this.changeStoreButton2())
     .click(this.changeStoreButton3())
     .click(this.changeStoreButton4())
     .click(this.recojoAquiButton())
     .wait(2000)
     .click(this.searchInput())
     .wait(5000)
     .typeText(this.searchInput(), 'azucar', {paste: true })
     .click(this.moreProduct1Azucar())   
     .click(this.moreProduct1Azucar())   
     .click(this.moreProduct1Azucar())   
     .click(this.moreProduct1Azucar())   
     .click(this.moreProduct1AzucarAdd())   
     .click(this.moreProduct2Azucar())   
     .click(this.moreProduct2Azucar())   
     .click(this.moreProduct2Azucar())   
     .click(this.moreProduct2Azucar())   
     .click(this.moreProduct2AzucarAdd())   
     .click(this.moreProduct3Azucar())   
     .click(this.moreProduct3Azucar())   
     .click(this.moreProduct3Azucar())   
     .click(this.moreProduct3Azucar())   
     .click(this.moreProduct3AzucarAdd())   
     .click(this.seeAllProductsButton())
     .wait(2000)   
     .click(this.searchInput())   
     .typeText(this.searchInput(), "Vino", {paste: true }) 
     .click(this.seeAllProductsButton())
     .click(this.moreProduct_1_Vino())   
     .click(this.moreProduct_1_Vino())   
     .click(this.moreProduct_1_Vino())   
     .click(this.moreProduct_1_Vino())   
     .click(this.moreProduct_1_Vino())   
     .click(this.moreProduct_1_Vino())   
     .click(this.moreProduct_1_Vino())   
     .click(this.moreProduct_1_Vino())   
     .click(this.moreProduct_1_Vino())   
     .click(this.moreProduct_1_Vino_Add())   
     .click(this.moreProduct_2_Vino())   
     .click(this.moreProduct_2_Vino())   
     .click(this.moreProduct_2_Vino())   
     .click(this.moreProduct_2_Vino())   
     .click(this.moreProduct_2_Vino())   
     .click(this.moreProduct_2_Vino_Add())   
     .click(this.moreProduct_3_Vino())   
     .click(this.moreProduct_3_Vino())   
     .click(this.moreProduct_3_Vino())   
     .click(this.moreProduct_3_Vino())   
     .click(this.moreProduct_3_Vino())   
     .click(this.moreProduct_3_Vino())   
     .click(this.moreProduct_3_Vino())   
     .click(this.moreProduct_3_Vino_Add())   
     .click(this.moreProduct_4_Vino())   
     .click(this.moreProduct_4_Vino())   
     .click(this.moreProduct_4_Vino())   
     .click(this.moreProduct_4_Vino())   
     .click(this.moreProduct_4_Vino())   
     .click(this.moreProduct_4_Vino())   
     //.click(this.moreProduct_4_Vino())   
     //.click(this.moreProduct_4_Vino_Add())  
     .click(this.seeCarritoButton())   
     .click(this.checkboxProduct())   
     .click(this.termsButton())
     .wait(2000)
     .click(this.finalizarCompraButton())   
     .wait(5000)
     .click(this.noAgregarBolsasButton())
     .wait(5000)
     .click(this.retiroEnTiendaButton())
     .click(this.selectTable())
     .wait (3000)
     .click(this.retiroEnTiendaButton())
     .wait(2000)
     //.click(this.selectDayDelivery())
     .click(this.selectMetodoDePago())
     .click(this.pagoContraEntregaButton())
     .click(this.pagoContraEntregaDebitoButton())
     .click(this.pagoVisaCheckbox())
     //.click(this.selectPagoEfectivo())
     .click(this.pagoCompraAhora())
     .wait(15000)
     .click(this.wongLogo())
     .click(this.logoutButton())
     .wait(5000)
     ;//expect(this.muchasGracias()).eql(true);
 }
 async testCompra2 () {
  await testController
  //.click(this.closePopUp())
  .wait(5000)
  //.click(this.acceptCookies())
  //.click(this.loginButton())
  //.click(this.myAccountButton())
  .click(this.loginWithUserAndPasswordBtn())
  .click(this.emailInput())
  .typeText(this.emailInput(), "gaston.genaud@coderio.co", {paste : true })
  .click(this.passwordInput())
  .typeText(this.passwordInput()(), "QAAutomation1", {paste : true })
  .click(this.ingresarButton())
  .wait(5000)
  .click(this.acceptCookies())
  .click(this.changeStoreButton())
  .click(this.changeStoreButton2())
  .click(this.changeStoreButton3())
  .click(this.changeStoreButton4())
  .click(this.recojoAquiButton())
  .wait(2000)
  .click(this.searchInput())
  .wait(5000)
  .typeText(this.searchInput(), 'azucar', {paste: true })
  .click(this.moreProduct1Azucar())   
  .click(this.moreProduct1Azucar())   
  .click(this.moreProduct1Azucar())   
  .click(this.moreProduct1Azucar())   
  .click(this.moreProduct1AzucarAdd())   
  .click(this.moreProduct2Azucar())   
  .click(this.moreProduct2Azucar())   
  .click(this.moreProduct2Azucar())   
  .click(this.moreProduct2Azucar())   
  .click(this.moreProduct2AzucarAdd())   
  .click(this.moreProduct3Azucar())   
  .click(this.moreProduct3Azucar())   
  .click(this.moreProduct3Azucar())   
  .click(this.moreProduct3Azucar())   
  .click(this.moreProduct3AzucarAdd())   
  .click(this.seeAllProductsButton())
  .wait(2000)   
  .click(this.searchInput())   
  .typeText(this.searchInput(), "Vino", {paste: true }) 
  .click(this.seeAllProductsButton())
  .click(this.moreProduct_1_Vino())   
  .click(this.moreProduct_1_Vino())   
  .click(this.moreProduct_1_Vino())   
  .click(this.moreProduct_1_Vino())   
  .click(this.moreProduct_1_Vino())   
  .click(this.moreProduct_1_Vino())   
  .click(this.moreProduct_1_Vino())   
  .click(this.moreProduct_1_Vino())   
  .click(this.moreProduct_1_Vino())   
  .click(this.moreProduct_1_Vino_Add())   
  .click(this.moreProduct_2_Vino())   
  .click(this.moreProduct_2_Vino())   
  .click(this.moreProduct_2_Vino())   
  .click(this.moreProduct_2_Vino())   
  .click(this.moreProduct_2_Vino())   
  .click(this.moreProduct_2_Vino_Add())   
  .click(this.moreProduct_3_Vino())   
  .click(this.moreProduct_3_Vino())   
  .click(this.moreProduct_3_Vino())   
  .click(this.moreProduct_3_Vino())   
  .click(this.moreProduct_3_Vino())   
  .click(this.moreProduct_3_Vino())   
  .click(this.moreProduct_3_Vino())   
  .click(this.moreProduct_3_Vino_Add())   
  .click(this.moreProduct_4_Vino())   
  .click(this.moreProduct_4_Vino())   
  .click(this.moreProduct_4_Vino())   
  .click(this.moreProduct_4_Vino())   
  .click(this.moreProduct_4_Vino())   
  .click(this.moreProduct_4_Vino())   
  //.click(this.moreProduct_4_Vino())   
  //.click(this.moreProduct_4_Vino_Add())  
  //.click(this.seeCarritoButton())   
  .navigateTo(this.urlCart)
  .wait(5000)
  .click(this.checkboxProduct())   
  .click(this.termsButton())
  .click(this.finalizarCompraButton())   
  .wait(5000)
  .click(this.noAgregarBolsasButton())
  .wait(5000)
  .navigateTo(this.urlCheckout)
  .wait(5000)
  //.click(this.retiroEnTiendaButton())
  .click(this.selectTable())
  .wait (3000)
  .click(this.retiroEnTiendaButton())
  .wait(2000)
  //.click(this.selectDayDelivery())
  .click(this.selectMetodoDePago())
  .click(this.pagoEnLinea())
  .click(this.cuotasComboBox())
  .click(this.cantidadCuotas())
  .click(this.pagoContraEntregaButton())
  .click(this.pagoContraEntregaDebitoButton())
  .click(this.pagoVisaCheckbox())
  .click(this.selectPagoEfectivo())
  .click(this.pagoContraEntregaDebitoButton())
  .click(this.pagoVisaCheckbox())
  .click(this.pagoCompraAhora())
  .wait(15000)
  .navigateTo(this.url)
  //click(this.wongLogo())
  .click(this.logoutButton())
  .wait(5000)
  ;//expect(this.muchasGracias()).eql(true);
}
}

