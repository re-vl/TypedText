const t = ["Wake up, Neo...", "The Matrix has you..."];

function typeText() {
   let line = 0,
      count = 0,
      direct = 1,
      dalay = 350,
      out = "",
      htmlOut = document.querySelector(".out");

   function typeLine() {
      //рисуем строку
      setTimeout(() => {
         out = t[line].slice(0, count);
         htmlOut.innerHTML = out + "<span>|</span>";
         count += direct;

         if (count >= t[line].length) {
            direct = -1;
            dalay = 50;
         }
         if (count == 0 && direct == -1) {
            direct = 1;
            dalay = 350;
            if (line == 0) {
               line = 1;
            } else if (line == 1) {
               line = 0;
            }
         }
         typeLine();
      }, getRandomInt(getRandomInt(dalay * 3.0)));
   }
   typeLine();
}

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
}

typeText();
