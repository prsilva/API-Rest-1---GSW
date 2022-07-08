const app = require('./apiBack/src/app.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`servidor escutando na porta http://localhost:${port}`);
});
