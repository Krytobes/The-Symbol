//Zadacha 1
let obj1 = {
	a: 'Привет',
	b: 'Пока',
	c: 'КАВО?',
};

let sym1 = Symbol();
obj1[sym1] = 'Символ';

for (let i1 in obj1){
	console.log('obj1.' + i1 + ' = ' + obj1[i1]);
}
//Zadacha 2
let obj2 = {
	a: '1',
	b: '2',
	c: '3',
}

let sym2 = Symbol();
obj2[sym2] = function() {
	alert('!');
}

//Zadacha 3
let obj3 = {
	'Один': 1,
	'Два': 2,
	'Три': 3,
}

let sym3 = Symbol();
obj3[sym3] = function(){
	let sum = 0;
	for (let i3 in obj3)
		sum += obj3[i3];
	alert(sum);
}
obj3[sym3]();

//Zadacha 4
let arr4 = [1, 2, 3];

let sym4 = Symbol();
arr4[sym4] = function(){
	let sum = 0;
	for (let i4 = 0; i4 < arr4.length; i4++)
		sum += arr4[i4];
	console.log(sum);
}
arr4[sym4]();

//Zadacha 5
let arr5 = [2, 3, 4];

let sym5 = Symbol.for('mas');
arr5[sym5] = function(){
	let sum = 0;
	for (let i5 = 0; i5 < arr5.length; i5++)
		sum += arr5[i5];
	console.log(sum);
}
arr5[sym5]();

//Zadacha 6
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mas() {
	let sym6 = Symbol.for('sum');
	let arr = [];
	let i = 0;
	let k = 5;
	while (arr.length < k){
		arr[i] = random(1,10);
		i++;
	}
	console.log('Массив = ' + arr);
	arr[sym6] = sum(arr);
	return arr;
}
let lolmas1 = mas();
let lolmas2 = mas();

function prover(startmas, lastmas){
	let sym6 = Symbol.for('sum');
	let set1 = new Set(startmas);
	let set2 = new Set(lastmas);
	let arr = [];
	let el = 0;
	for (let i of set1){
		el = i;
		for (let j of set2){
			if (el == j){
				arr.push(el);
				break;
			}
		}
	}
	if (arr != 0)
		console.log("Одинаковые элементы: " + arr);
	else
		console.log("Одинаковых элементов нет!")
	arr[sym6] = sum(arr);
}

prover(lolmas1, lolmas2);

function sum(arr){
	let sum = 0;
	for (let i of arr){
		sum += i;
	}
	console.log('Сумма эл-тов = ' + sum);
}