import app from './app';

const port = process.env.PORT;

if (!port) {
  throw new Error('PORT EV not found. Please set it up!');
}

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
