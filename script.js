// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

let counterMainPage = 0;
let counterSecondPage = 0;

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<h1>Главная страница</h1>
        <a href="/about">Переход на вторую страницу</a>
        <p>Вы зашли на страницу ${counterMainPage} раз</p>`);
    counterMainPage++
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<h1>Вы перешли на вторую страницу</h1>
        <a href="/">Вернуться на главную</a>
        <p>Вы зашли на страницу ${counterSecondPage} раз</p>`);
    counterSecondPage++
    
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<h5>Страница не найдена:(</h5>`);
  }
});
server.listen(3008);
