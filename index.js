/*let number = 10;
let string = "'kavichka'";
let bool = false;
let nothing = null;
let empty = undefined;
let obgect = {
  clichka: "жорик",
  age: 123,
};
console.log(number, string, bool, nothing, empty, obgect);
console.log(obgect.age, obgect.clichka);

// alert('abdurbec')

// string= prompt('vvedite imya')

console.log(string);

// Задача: Счет за такси складывается из минимальной суммы 85р + 15р за каждые 150 метров. Пользователь вводит, сколько он проехал метров, а программа подсчитывает и выводит общую сумму

// let minSum=85
// let metr=prompt('вы проехали х метров введите это число')
// let Sum=metr/150*15+85
// console.log('с вас',Sum,"руб");
function bobrintel(metr) {
  let minSum = 85;
  let Sum = (metr / 150) * 15 + 85;
  console.log("с вас", Sum, "руб");
}
bobrintel(1);
bobrintel(142);
bobrintel(5425);

// Задача 2. Есть теорема, согласно которой, треугольник может существовать, если сумма любых его сторон больше третьей стороны. Пример: треугольник со сторонами 3, 4, 5 существует 3+4>5, 4+5>3, 5+3>4. Треугольника со сторонами 2, 6, 12 не существует 2+6<12.
// Пользователь вводит три числа, а программа говорит, существует треугольник или нет

function bobryzen(a, b, c) {
  if (a + b > c && c + b > a && a + c > b) {
    console.log("треугольник сущ");
    if (a == b && a == c && b == c) {
      console.log("треугольник равносторонний");
    } else {
      if (a == b || b == c || c == a) {
        console.log("равнобедренный");
      }
      if (
        c * c + b * b == a * a ||
        a * a + b * b == c * c ||
        c * c + a * a == b * b
      ) {
        console.log("треугольник прямой");
      }
    }
  } else {
    console.log("треугольник не сущ");
  }
  let sum = 1;
  for (let aj = 1; aj < 0; aj = aj + 1) {
    sum = sum * aj;
    console.log("sum*aj", aj);
    console.log(sum);
  }
}
bobryzen(4, 1, 3);
bobryzen(6, 3, 4);
bobryzen(5, 6, 7);
// let a = 4;
// let b = 4;
// let c = 4;

// if (a + b > c && c + b > a && a + c > b) {
//   console.log("треугольник сущ");
//   if (a == b && a == c && b == c) {
//     console.log("треугольник равносторонний");
//   } else {
//     if (a == b || b == c || c == a) {
//       console.log("равнобедренный");
//     }
//     if (
//       c * c + b * b == a * a ||
//       a * a + b * b == c * c ||
//       c * c + a * a == b * b
//     ) {
//       console.log("треугольник прямой");
//     }
//   }
// } else {
//   console.log("треугольник не сущ");
// }
// let sum = 1;
// for (let aj = 1; aj < 0; aj = aj + 1) {
//   sum = sum * aj;
//   console.log("sum*aj", aj);
//   console.log(sum);
// }

// let a = Math.floor(Math.random() * 10);
// let b = prompt(
//   "соединение потеряно, пожалуйста внесите 10тысяч рублей для повторногго подключения"
// );
// b = Number(b);
// let count = 99;
// while (a != b) {
//   console.log(a);
//   if (count != 0) {
//     b = prompt("попробуйте ещё(");
//     b = Number(b);
//   } else {
//     alert("ты выбыл");
//     break;
//   }
//   count--;
//   console.log("осталось попыток", count);
// }

let bobr = document.querySelector(".logo-text");
console.log(bobr);

let btn = document.querySelector(".btn");
console.log(btn);

btn.onclick = function click() {
  btn.innerHTML = "соединение...";
  btn.style.color = "white";
  console.log("достижение: вы нажали кнопку");
  setTimeout(() => {
    btn.innerHTML = "bobr";
  }, 1000);
};

let mas = ["arbuz", "birka", "siniCa"];
// mas.pop();
mas.push("VoroBuy");
mas.push("s0loWay");
console.log(mas[5]);
// console.log(mas[mas.length - 1]);
console.log(mas);
// console.log(mas.indexOf("arbuz"));
console.log(mas[4]);
console.log(mas[3]);
console.log(mas[2]);
console.log(mas[1]);
console.log(mas[0]);

for (let i = 0; i < mas.length; i++) {
  console.log(mas[i]);
  console.log(i);
}
*/
let cord = {
  image: "./изображения/конь в пальто.jpg",
  title: "конь в польтовом пальто",
  text: "eto russkiy text",
  linc: "https://www.youtube.com/watch?v=BL8ZKeGCaIg",
};
let listNEglist = document.querySelector(".проекты-карточки");
listNEglist.insertAdjacentHTML(
  "afterbegin",
  `<article class="отдельная-карточка"><img src="./изображения/конь в пальто.jpg" alt="конь в пальто" /><h3>${cord.title}</h3><hr /><p>  ${cord.text}.</p><button><a href="${cord.linc}">Projects </a></button></article>`
);
