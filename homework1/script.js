const student = "Воронов Роман Олегович"; 

document.getElementById("student").innerHTML = student;


 let RealScore = {
a: 1,
b: 2,
c: 1,
d: 2,
 }
let a = prompt ('Введите счёт первой команды');
alert(1)
let b = prompt ('Введите счёт второй команды');
alert(2)
let c = prompt ('Ваш вариант счёта первой команды');
alert(1)
let d = prompt ('Ваш вариант счёта второй команды');
alert(2)


let h;

if  ( a == c && b == d)  {

  alert ('Счёт угадали верно'); 

 }
else if (a > b && c > d || a < b && c < d || a === b && c === d) {
  alert('Счёт не угадали, но исход угадали верно');
 }
 else {
 alert('Ни счёт, ни исход не угадали');
}

    document.getElementById("results").innerHTML = h;
    
    console.log(h);












