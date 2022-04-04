import puppeteer from 'puppeteer';
const frasesDeAmor = [
  'eres hermosa',
  'espero que tengas un bello día',
  'que descances',
  'te amo tanto',
];

const personas = [
  {
    nombre: 'Alfonso',
    whats: 'Alfonsopondio Gutierrez',
    nacimiento: '21 Agosto 1998',
    nivel: 5,
    sexo: 'H',
  },
  {
    nombre: 'Lilly',
    whats: 'Beibi Mi Amors 🌝❤️ Bb',
    nacimiento: '27 Octubre 1999',
    nivel: 10,
    sexo: 'M',
  },
]
const frasesIniciales = [
  {
    frase: 'Hola {nombre} !',
    nivel: 0,
  },
  {
    frase: 'Que buen día te amo {nombre}!',
    nivel: 10,
  },
]

const frasesMedio = [
  {
    frase: 'Te quiero mucho',
    nivel: 8,
    sexo: null,
  }
]

export const scrape =  async (url: string) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  console.log('waiting for coding...');
  await new Promise(r => setTimeout(r, 10000));
  console.log('trying to get user...');
  await page.waitForSelector("span[title='Beibi Mi Amors 🌝❤️ Bb']", { timeout: 10000 });
  const target = await page.$("span[title='Beibi Mi Amors 🌝❤️ Bb']");
  await target?.click();
  const inp = await page.$(
    "div[title='Escribe un mensaje aquí']"
  );
  let mensage = "Te amo"
  for (let i = 0; i < 10; i++) {
    await inp?.type(mensage + "❤");
    await page.keyboard.press("Enter");
    mensage += "❤";
  }
  return;
}

