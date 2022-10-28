const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("server ok");
});

// saludo
// http://localhost:3000/saludo/jorge/niglia
app.get("/saludo/:name/:lastname", (req, res) => {
  res.send(`Hola ${req.params.name} ${req.params.lastname}`);
});

// División permitida
// http://localhost:3000/dividir/5/3

// División no permitida
// http://localhost:3000/dividir/5/0

app.get("/dividir/:dividendo/:divisor", (req, res) => {
  let dividendo = Number(req.params.dividendo);
  let divisor = Number(req.params.divisor);
  if (divisor === 0) {
    res.send("No se puede dividir por cero");
  } else {
    res.json({
      resultado: dividendo / divisor,
    });
  }
});
// suma válida
// http://localhost:3000/suma/3/4

// suma no válida
// http://localhost:3000/suma/3/-1
app.get("/suma/:num1/:num2", (req, res) => {
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);
  if (num1 < 0 || num2 < 0) {
    res.send("Los números deben ser mayores a cero");
  } else {
    res.json({
      suma: num1 + num2,
    });
  }
});

// autorizado
// http://localhost:3000/autorizado?num=4

// no autorizado
// http://localhost:3000/autorizado?num=3
app.get("/autorizado", (req, res) => {
  let num = Number(req.query.num);
  if (num % 2 === 0) {
    res.send("autorizado");
  } else {
    res.send("no autorizado");
  }
});
// http://localhost:3000/listadecompras/?producto1=paraguas&producto2=cajon&producto3=casa&producto4=silla&producto5=mesa
app.get("/listadecompras", (req, res) => {
  res.json({
    producto1: req.query.producto1,
    producto2: req.query.producto2,
    producto3: req.query.producto3,
    producto4: req.query.producto4,
    producto5: req.query.producto5,
  });
});

app.listen(port, () => {
  console.log(`listen in port: ${port}`);
});
