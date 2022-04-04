import {scrape} from './sendMessaje';
import express from 'express';
const app = express();

app.listen(3000, () => {
  console.info('SERVER RUNNING ON PORT: 3000');
});

app.post('/send', async (req, res) => {
  await scrape('https://web.whatsapp.com');
  return res.send('Se han mandado los mensajes con éxito');
})

app.get('/send', async (req, res) => {
  await scrape('https://web.whatsapp.com');
  return res.send('Se han mandado los mensajes con éxito');
})