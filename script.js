const t = [
   "Wake up, Neo...\n",
   "The Matrix has you...\n",
   "Follow the white rabbit...\n",
   "               \n",
   "Knock knock, Neo.",
];

function typeText() {
   let line = 0,
      count = 0,
      out = "",
      htmlOut = document.querySelector(".out");

   function typeLine() {
      //рисуем строку
      let interval = setTimeout(() => {
         out += t[line][count];
         htmlOut.innerHTML = out + "<span>|</span>";
         count++;
         //проверки
         //не закончилась ли строка
         if (count >= t[line].length) {
            count = 0;
            line++;
            if (line == t.length) {
               clearTimeout(interval); //остановка таймаут
               htmlOut.innerHTML = out; //убираем верт черту
               return true;
            }
         }
         typeLine();
      }, getRandomInt(getRandomInt(350 * 3.0)));
   }

   typeLine();
}

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
}

typeText();
