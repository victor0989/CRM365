import { chromium } from '@playwright/test';
import login from '../utils/login';
import * as dotenv from 'dotenv';
dotenv.config();

const authFile = '/storage-state/storageState.json';
const username = process.env.DYN365_USERNAME ?? 'valonsog@emeal.nttdata.com';
const password = process.env.DYN365_PASSWORD ?? 'nttdata.124';
const orgurl = process.env.DYN365_ORGURL ?? 'https://adfsprod40.everis.com/adfs/ls/?login_hint=valonsog%40emeal.nttdata.com&mkt=en-US&client-request-id=d85b1c1d-e1c3-4abe-a486-7d60230c818c&username=valonsog%40emeal.nttdata.com&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQQIARAAjZM9iOR0GMYnM7uz7rKey2mhorCgqCiZTf75mlkQnI_MR3YnyeRrNrFYk0yS-c_ka5NMshOwsBELlcPiigNB5Gy2ENFGFI4Du63OTk8tBCsLEasr3TsbG8Hm5Xl5P5rn-e1sMQ2igTewV2uggR2-SDI0RZKUhRLAplGyZWFok3BoFJ-1iKsRYGjbTK7v7D3_3Js_fPfrHe72u2-_9cLuO-9fIC_NsyxODw8OiqJoBNBOojRyM4KmGnYUHPhmOIOhl4OvEeQegnxUfTY3_ShMI-8NJ3BMvxFm2czMzIfLt6qbToiq8kU1pYkm2QQkjTE4oFoEwFsNPjB8vuws-IWX8YpNGTKG8UofHivzQC_1TFeWlBGohb6YkIbSgWOFWxqKNNdLL9PLJRhDDDN67PnxlKXGip3xgJsbi_5Cn3JQ6OnE_eoTQnuVzcHDEiWwdP6qbrtREpzGUZrdqt2sGc1shjH5KTHOmvZ41vNwd9oyA64PR13NBKMjOV-2xaZM59qg2aNzvZCTM96SwjwgtYmmHsnMQhNUsJbjVYJ1h65nkUfTmXXePjuZGKQl04G0YPxAZXTUEDROH5HN1AZxe81oQB1o7DzHQZDlrOCJYJWbQ9sMyzksh2kk9W0hcvwhUfLxhIAFAJwoDmQxMAOAYx6GDUuwhGsMtadLH-eKQCgXR7wOOWrOjky7QE8ELjyfWLKLEmK-9gaiAbujftqfts5zfdTKVStVdDk5YXUWDftjeCYoTlRKlCCcFc1pmiWGzy1bStwy176qk5KaJKgz41biKlc0UbXtiBfo6VE_hZmG55Sow6vPtEcdwyxbmWqxTrUr14DLBYCH_oldekWB8jNHL5SuzEpiLMk6hsbMaOi46THHuq46oE1Nyr2L2jP_TmDkutB2HmUvB1_W6lciiMLLGhPFTghn-3ESudB39v_z5kB41A2jwGm0ff_eBvL7xu5jW3u1p5H9yitPYdcebCCfbl6hcOenb3_8-JcP259_8vJne2hUudw8sK1U6lqTODSkFeynCyvvFZPCwQu-4yta9prb6cxHQ8s22fbr2CF-o47cqNcv69uj3inPKvQp9mcdeW-r8s32_4Tq_u6TOzsreOpHtuk76fV_-Ln7eOXBta9--_n72x_c_GP4xV7lbw2#';

async function globalSetup(config) {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  const password = 'nttdata.124';
  console.log(typeof password); // Debería imprimir 'string'


  await page.goto('https://adfsprod40.everis.com/adfs/ls/?login_hint=valonsog%40emeal.nttdata.com&mkt=en-US&client-request-id=d85b1c1d-e1c3-4abe-a486-7d60230c818c&username=valonsog%40emeal.nttdata.com&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQQIARAAjZM9iOR0GMYnM7uz7rKey2mhorCgqCiZTf75mlkQnI_MR3YnyeRrNrFYk0yS-c_ka5NMshOwsBELlcPiigNB5Gy2ENFGFI4Du63OTk8tBCsLEasr3TsbG8Hm5Xl5P5rn-e1sMQ2igTewV2uggR2-SDI0RZKUhRLAplGyZWFok3BoFJ-1iKsRYGjbTK7v7D3_3Js_fPfrHe72u2-_9cLuO-9fIC_NsyxODw8OiqJoBNBOojRyM4KmGnYUHPhmOIOhl4OvEeQegnxUfTY3_ShMI-8NJ3BMvxFm2czMzIfLt6qbToiq8kU1pYkm2QQkjTE4oFoEwFsNPjB8vuws-IWX8YpNGTKG8UofHivzQC_1TFeWlBGohb6YkIbSgWOFWxqKNNdLL9PLJRhDDDN67PnxlKXGip3xgJsbi_5Cn3JQ6OnE_eoTQnuVzcHDEiWwdP6qbrtREpzGUZrdqt2sGc1shjH5KTHOmvZ41vNwd9oyA64PR13NBKMjOV-2xaZM59qg2aNzvZCTM96SwjwgtYmmHsnMQhNUsJbjVYJ1h65nkUfTmXXePjuZGKQl04G0YPxAZXTUEDROH5HN1AZxe81oQB1o7DzHQZDlrOCJYJWbQ9sMyzksh2kk9W0hcvwhUfLxhIAFAJwoDmQxMAOAYx6GDUuwhGsMtadLH-eKQCgXR7wOOWrOjky7QE8ELjyfWLKLEmK-9gaiAbujftqfts5zfdTKVStVdDk5YXUWDftjeCYoTlRKlCCcFc1pmiWGzy1bStwy176qk5KaJKgz41biKlc0UbXtiBfo6VE_hZmG55Sow6vPtEcdwyxbmWqxTrUr14DLBYCH_oldekWB8jNHL5SuzEpiLMk6hsbMaOi46THHuq46oE1Nyr2L2jP_TmDkutB2HmUvB1_W6lciiMLLGhPFTghn-3ESudB39v_z5kB41A2jwGm0ff_eBvL7xu5jW3u1p5H9yitPYdcebCCfbl6hcOenb3_8-JcP259_8vJne2hUudw8sK1U6lqTODSkFeynCyvvFZPCwQu-4yta9prb6cxHQ8s22fbr2CF-o47cqNcv69uj3inPKvQp9mcdeW-r8s32_4Tq_u6TOzsreOpHtuk76fV_-Ln7eOXBta9--_n72x_c_GP4xV7lbw2#');

  // Rellenar el campo de nombre de usuario
  await page.getByTestId('userNameInput');
  
  // Esperar a que el elemento coincida con el XPath
await page.waitForSelector('//input[@id="userNameInput"]');
// Obtener el elemento utilizando XPath
const element = await page.$('//input[@id="userNameInput"]');

// Llenar el campo de entrada
await element.fill('valonsog@emeal.nttdata.com');



  // Rellenar el campo de contraseña
  await page.waitForSelector('input#passwordInput');
  const element1 = await page.$('input#passwordInput');
  await page.fill('#passwordInput', 'nttdata.124');
  // Hacer clic en el botón de4 inicio de sesión
  await page.click('span#submitButton');

  // Verificar que el inicio de sesión fue exitoso
const loggedInUrl = 'https://adfsprod40.everis.com/adfs/ls/?login_hint=valonsog%40emeal.nttdata.com&wfresh=0&client-request-id=16401da1-8078-8000-8725-279941baf606&username=valonsog%40emeal.nttdata.com&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQQIARAAnVJNaBNBFM5m09X0z9KDiOAlpIiVTWZ2JrszAaW7mw31Ym0RD4qE2dmJXU2ya3bTtJZC9aIXoXhQFEQUkdJTUZAaED0XwZ5zFERREFGQHk3w4sFD8Tt8PB7fe7zvvTcpwxwsZsEfILXPKqhWocpFP_oLzfHBscdHpg4uriZWb04cvW92fikbEp2P4zAq5vNiQTT96FIzaIVqfSkXzbOmCAO_Eed4UM9XqkGzHuU9UWWtWpxjUbi4JUk7kvRZklaT0p3k4QVWCxpRcGlK1AWr5Rpx7LGY9Ys3klfLpqEhqiNadkwKCEQEQLusAWxADEuOXtJ0qmum6WCoaY4NVGKXdV2jug5sRIFONQ06FBR03S5j03YsGxmablkYYERLFihYJWwaxDKBDQrEKVvd5IEZsxXPa30Kmv418SOZ7nuohEEUP5BTMyXQ3pD3tLjnchYBTDxODBWjKlAx7Cko467KBKQG5AZFtNCRsxRwKjRGVa4bSMWceCrDtKfVXVwFDKEC5duyEoSi4Xs7KelLKglGd1PSk4HebSaPvf5Y_9meeZi7_tR9NJHYHshzN5qz3dmwcX6u5Zejy-5CqT3bFrB92qqdPRcfr1rW_KlplzPHPAGKcE2R1hSlo6T3y2OJjGyfgd8V6da-RCf9_1feGZK6Q73pDp1MfF0PZevlp3ebb14tvfjwr2R3GA6meeA2WcPzvfEshK5HAEEqMUR_bW5BdV2DqMDlGHHCiCCsO4wHFV5jfj0an1zO-F4lDq6IRqa4nFmsRxXO-1HvuVoiyhQvZHqmMhdXVlZujOyp-9uRxO7o-rP3W_du3_02vTmW-A01&ssoCookie=MSISTempAuth_92dc7da0-490a-44a4-9503-b975f5b12087';

await page.waitForURL('https://adfsprod40.everis.com/adfs/ls/?login_hint=valonsog%40emeal.nttdata.com&wfresh=0&client-request-id=16401da1-8078-8000-8725-279941baf606&username=valonsog%40emeal.nttdata.com&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQQIARAAnVJNaBNBFM5m09X0z9KDiOAlpIiVTWZ2JrszAaW7mw31Ym0RD4qE2dmJXU2ya3bTtJZC9aIXoXhQFEQUkdJTUZAaED0XwZ5zFERREFGQHk3w4sFD8Tt8PB7fe7zvvTcpwxwsZsEfILXPKqhWocpFP_oLzfHBscdHpg4uriZWb04cvW92fikbEp2P4zAq5vNiQTT96FIzaIVqfSkXzbOmCAO_Eed4UM9XqkGzHuU9UWWtWpxjUbi4JUk7kvRZklaT0p3k4QVWCxpRcGlK1AWr5Rpx7LGY9Ys3klfLpqEhqiNadkwKCEQEQLusAWxADEuOXtJ0qmum6WCoaY4NVGKXdV2jug5sRIFONQ06FBR03S5j03YsGxmablkYYERLFihYJWwaxDKBDQrEKVvd5IEZsxXPa30Kmv418SOZ7nuohEEUP5BTMyXQ3pD3tLjnchYBTDxODBWjKlAx7Cko467KBKQG5AZFtNCRsxRwKjRGVa4bSMWceCrDtKfVXVwFDKEC5duyEoSi4Xs7KelLKglGd1PSk4HebSaPvf5Y_9meeZi7_tR9NJHYHshzN5qz3dmwcX6u5Zejy-5CqT3bFrB92qqdPRcfr1rW_KlplzPHPAGKcE2R1hSlo6T3y2OJjGyfgd8V6da-RCf9_1feGZK6Q73pDp1MfF0PZevlp3ebb14tvfjwr2R3GA6meeA2WcPzvfEshK5HAEEqMUR_bW5BdV2DqMDlGHHCiCCsO4wHFV5jfj0an1zO-F4lDq6IRqa4nFmsRxXO-1HvuVoiyhQvZHqmMhdXVlZujOyp-9uRxO7o-rP3W_du3_02vTmW-A01&ssoCookie=MSISTempAuth_92dc7da0-490a-44a4-9503-b975f5b12087', { timeout: 60000 }); // 60 segundos de tiempo de espera
await page.waitForURL('https://adfsprod40.everis.com/adfs/ls/?login_hint=valonsog%40emeal.nttdata.com&wfresh=0&client-request-id=16401da1-8078-8000-8725-279941baf606&username=valonsog%40emeal.nttdata.com&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQQIARAAnVJNaBNBFM5m09X0z9KDiOAlpIiVTWZ2JrszAaW7mw31Ym0RD4qE2dmJXU2ya3bTtJZC9aIXoXhQFEQUkdJTUZAaED0XwZ5zFERREFGQHk3w4sFD8Tt8PB7fe7zvvTcpwxwsZsEfILXPKqhWocpFP_oLzfHBscdHpg4uriZWb04cvW92fikbEp2P4zAq5vNiQTT96FIzaIVqfSkXzbOmCAO_Eed4UM9XqkGzHuU9UWWtWpxjUbi4JUk7kvRZklaT0p3k4QVWCxpRcGlK1AWr5Rpx7LGY9Ys3klfLpqEhqiNadkwKCEQEQLusAWxADEuOXtJ0qmum6WCoaY4NVGKXdV2jug5sRIFONQ06FBR03S5j03YsGxmablkYYERLFihYJWwaxDKBDQrEKVvd5IEZsxXPa30Kmv418SOZ7nuohEEUP5BTMyXQ3pD3tLjnchYBTDxODBWjKlAx7Cko467KBKQG5AZFtNCRsxRwKjRGVa4bSMWceCrDtKfVXVwFDKEC5duyEoSi4Xs7KelLKglGd1PSk4HebSaPvf5Y_9meeZi7_tR9NJHYHshzN5qz3dmwcX6u5Zejy-5CqT3bFrB92qqdPRcfr1rW_KlplzPHPAGKcE2R1hSlo6T3y2OJjGyfgd8V6da-RCf9_1feGZK6Q73pDp1MfF0PZevlp3ebb14tvfjwr2R3GA6meeA2WcPzvfEshK5HAEEqMUR_bW5BdV2DqMDlGHHCiCCsO4wHFV5jfj0an1zO-F4lDq6IRqa4nFmsRxXO-1HvuVoiyhQvZHqmMhdXVlZujOyp-9uRxO7o-rP3W_du3_02vTmW-A01&ssoCookie=MSISTempAuth_92dc7da0-490a-44a4-9503-b975f5b12087', { timeout: 100000 }); // 60 segundos de tiempo de espera
await page.waitForURL(loggedInUrl);
const currentUrl = page.url();

if (currentUrl === loggedInUrl) {
  console.log('Inicio de sesión exitoso.');
} else {
  console.error('No se pudo iniciar sesión correctamente.');
}


  await page.context().storageState({
    path: authFile,
  });

  await browser.close();
}

export default globalSetup;

async function verificarCodigo() {
  // Iniciar el navegador
  const browser = await chromium.launch({ headless: false });
  
  // Crear una nueva página
  const page = await browser.newPage();
  
  // Navegar a la página donde se introduce el código de autenticación
  await page.goto('https://adfsprod40.everis.com/adfs/ls/?login_hint=valonsog%40emeal.nttdata.com&wfresh=0&client-request-id=16401da1-8078-8000-8725-279941baf606&username=valonsog%40emeal.nttdata.com&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQQIARAAnVJNaBNBFM5m09X0z9KDiOAlpIiVTWZ2JrszAaW7mw31Ym0RD4qE2dmJXU2ya3bTtJZC9aIXoXhQFEQUkdJTUZAaED0XwZ5zFERREFGQHk3w4sFD8Tt8PB7fe7zvvTcpwxwsZsEfILXPKqhWocpFP_oLzfHBscdHpg4uriZWb04cvW92fikbEp2P4zAq5vNiQTT96FIzaIVqfSkXzbOmCAO_Eed4UM9XqkGzHuU9UWWtWpxjUbi4JUk7kvRZklaT0p3k4QVWCxpRcGlK1AWr5Rpx7LGY9Ys3klfLpqEhqiNadkwKCEQEQLusAWxADEuOXtJ0qmum6WCoaY4NVGKXdV2jug5sRIFONQ06FBR03S5j03YsGxmablkYYERLFihYJWwaxDKBDQrEKVvd5IEZsxXPa30Kmv418SOZ7nuohEEUP5BTMyXQ3pD3tLjnchYBTDxODBWjKlAx7Cko467KBKQG5AZFtNCRsxRwKjRGVa4bSMWceCrDtKfVXVwFDKEC5duyEoSi4Xs7KelLKglGd1PSk4HebSaPvf5Y_9meeZi7_tR9NJHYHshzN5qz3dmwcX6u5Zejy-5CqT3bFrB92qqdPRcfr1rW_KlplzPHPAGKcE2R1hSlo6T3y2OJjGyfgd8V6da-RCf9_1feGZK6Q73pDp1MfF0PZevlp3ebb14tvfjwr2R3GA6meeA2WcPzvfEshK5HAEEqMUR_bW5BdV2DqMDlGHHCiCCsO4wHFV5jfj0an1zO-F4lDq6IRqa4nFmsRxXO-1HvuVoiyhQvZHqmMhdXVlZujOyp-9uRxO7o-rP3W_du3_02vTmW-A01&ssoCookie=MSISTempAuth_92dc7da0-490a-44a4-9503-b975f5b12087');
  await page.waitForURL('https://adfsprod40.everis.com/adfs/ls/?login_hint=valonsog%40emeal.nttdata.com&wfresh=0&client-request-id=16401da1-8078-8000-8725-279941baf606&username=valonsog%40emeal.nttdata.com&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQQIARAAnVJNaBNBFM5m09X0z9KDiOAlpIiVTWZ2JrszAaW7mw31Ym0RD4qE2dmJXU2ya3bTtJZC9aIXoXhQFEQUkdJTUZAaED0XwZ5zFERREFGQHk3w4sFD8Tt8PB7fe7zvvTcpwxwsZsEfILXPKqhWocpFP_oLzfHBscdHpg4uriZWb04cvW92fikbEp2P4zAq5vNiQTT96FIzaIVqfSkXzbOmCAO_Eed4UM9XqkGzHuU9UWWtWpxjUbi4JUk7kvRZklaT0p3k4QVWCxpRcGlK1AWr5Rpx7LGY9Ys3klfLpqEhqiNadkwKCEQEQLusAWxADEuOXtJ0qmum6WCoaY4NVGKXdV2jug5sRIFONQ06FBR03S5j03YsGxmablkYYERLFihYJWwaxDKBDQrEKVvd5IEZsxXPa30Kmv418SOZ7nuohEEUP5BTMyXQ3pD3tLjnchYBTDxODBWjKlAx7Cko467KBKQG5AZFtNCRsxRwKjRGVa4bSMWceCrDtKfVXVwFDKEC5duyEoSi4Xs7KelLKglGd1PSk4HebSaPvf5Y_9meeZi7_tR9NJHYHshzN5qz3dmwcX6u5Zejy-5CqT3bFrB92qqdPRcfr1rW_KlplzPHPAGKcE2R1hSlo6T3y2OJjGyfgd8V6da-RCf9_1feGZK6Q73pDp1MfF0PZevlp3ebb14tvfjwr2R3GA6meeA2WcPzvfEshK5HAEEqMUR_bW5BdV2DqMDlGHHCiCCsO4wHFV5jfj0an1zO-F4lDq6IRqa4nFmsRxXO-1HvuVoiyhQvZHqmMhdXVlZujOyp-9uRxO7o-rP3W_du3_02vTmW-A01&ssoCookie=MSISTempAuth_92dc7da0-490a-44a4-9503-b975f5b12087', { timeout: 100000 }); // 60 segundos de tiempo de espera
  // Esperar a que aparezca el campo para ingresar el código
  await page.waitForSelector('input#oneTimePasscodeInput');
  
  // Obtener el código de autenticación desde alguna fuente (por ejemplo, tu aplicación móvil)
  const codigo = '745734';
  
  // Introducir el código en el campo de entrada
  await page.fill('input#oneTimePasscodeInput', codigo);

  // Hacer clic en el botón para enviar el código (si es necesario)
  await page.click('input#authenticateButton');
  
  // Esperar a que se procese la autenticación
  // Aquí puedes agregar más lógica según sea necesario, como esperar a que se cargue la página siguiente o verificar algún elemento en la página de destino
  
  // Cerrar el navegador
  await browser.close();
}

// Llamar a la función para verificar el código
verificarCodigo().catch(console.error);
