import App from './App';

const app = new App().getApp();

app.listen(3333, () => { console.log('Server on') })