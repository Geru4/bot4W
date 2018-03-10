const TelegramBot = require('node-telegram-bot-api');
      token = '532568617:AAGtihy5o6VLTh9-MV7H2kmU6m0Rm2cOOBw';
      bot = new TelegramBot(token, {polling: true});
bot.onText(/\/echo (.+)/, (msg, match) => {
  const Id = msg.chat.id;
        resp = match[1]; 
   bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const Id = msg.chat.id;
  if (msg.text === 'привет') 
    {bot.sendMessage(Id, 'Бот приветствует тебя, Смертный!')};
  if (msg.text === 'картинка') 
    { //открыл скобку
      const url = 'https://picsum.photos/200/300/?random'
      function backgroundReadFile(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.addEventListener("load", function() {
    if (req.status < 400)
      callback(req.responseText);
  });
  req.send(null);
  bot.sendPhoto(Id, 'null')
}
      bot.sendPhoto(Id, 'https://picsum.photos/200/300/?random')
    } //закрыл скобку
});