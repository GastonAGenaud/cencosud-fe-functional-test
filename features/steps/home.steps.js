/* eslint-disable import/no-extraneous-dependencies  */
import { When, Given, Then } from 'cucumber';
import { pages } from '../pages/pages';

Given('Ingreso a la pantalla de login', async () => {
  await pages.home.navigate();
});
When('Realizo {int} pedidos', async (pedidos) => {
  for (let p = 0; p = pedidos ; p ++) {
     //await pages.home.testCompra();
     await pages.home.testCompra2();
    } 
});
Then('retorna la pagina home', async () => {
  //await pages.login.navigateHome();
});
