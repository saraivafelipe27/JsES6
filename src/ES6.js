// class List {
//     constructor(){
//         this.data = []        
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }


// class TodoList extends List{
//     constructor() {
//         super();

//         this.usuario =  'Felipe';
//     }

//     mostraUsuario() {
//         console.log(this.usuario);  
//     }
// }

// const MinhaList = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaList.add('Novo Todo');
// }

// MinhaList.mostraUsuario();



// class TodoList {
//     constructor() {
//         this.todos = [];
//     }

//     addTodo() {
//         this.todos.push('Novo Todo');
//         console.log(this.todos);
//     }
// }


// const MinhaLista = new TodoList();



// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.addTodo();
// }




// class TodoList {
//     constructor() {
//         this.todos = [];
//     }

//     addTodo() {
//         this.todos.push('Novo Todo');
//         console.log(this.todos);
//     }
// }


// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.addTodo();
// }





// class List {
//     constructor(){
//         this.todos = [];
//     }

//     addTodo(){
//         this.todos.push('Novo Todo');
//         console.log(this.todos);
//     }
// }




// class TodoList extends List {
//     constructor(){
//         super()

//         this.usuario = 'Felipe';
//     }

//     mostrarUser(){
//         console.log(this.usuario);
//     }


// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.addTodo();
// }

// MinhaLista.mostrarUser();




// class List {
//     constructor(){
//         this.todos = [];
//     }

//     addTodo(){
//         this.todos.push('Novo Todo');
//         console.log(this.todos);
//     }
// }




// class TodoList extends List{
//     constructor(){
//         super()

//         this.user = 'Felipe';
//     }

//     MostraUser(){
//         console.log(this.user);
//     }

// }


// const MinhaList = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaList.addTodo();
// }

// MinhaList.MostraUser();



// class List {    
//     constructor() {
//         this.todos = [];
//     }


//     addTodo(){
//         this.todos.push('Novo Todo');
//         console.log(this.todos);
//     }
// }





// class TodoList extends List {
//     constructor() {
//         super();

//         this.user = 'Felipe';
//     }

//     mostraUser() {
//         console.log(this.user);
//     }
    
// }


// const MinhaLista = new TodoList();


// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.addTodo();
// }

// MinhaLista.mostraUser();



// // class static 

// class Matematica {
//     static soma(a, b){
//         return a + b;
//     }
// }

// document.getElementById('novotodo').onclick = function(){
//     console.log(Matematica.soma(20, 10)); 
// }


// class List {
//     constructor() {
//         this.todos = [];
//     }

//     addTodo() {
//         this.todos.push('Novo Todo');

//         console.log(this.todos);
//     }

// }





// class TodoList extends List{
//     constructor() {
//         super();

//         this.user = 'Felipe';
//     }

//     mostraUser(){
//         console.log(this.user);
//     }

// }


// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.addTodo();
// }

// MinhaLista.mostraUser();



// // operações com Arrays (Map, Reduce, filter)


// // MAP

// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map(function(item) {
//     return item * 3;
// })

// console.log(newArr);




// const arr = [10, 20, 30, 40];


// const newArr = arr.map(function(item) {
//     return item * 10;
// })

// console.log(newArr);


// const arr = [12, 21, 42, 39];

// const newArr = arr.map(function(item, ) {
//     return item * 7;
// });

// console.log(newArr);




// const arr = [10, 20, 30, 40, 50, 70];

// const newArr = arr.map(function(item, index){
//     return item + index;
// });

// console.log(newArr);


// // REDUCE

// const arr = [10, 11, 13, 15, 17, 20, 30, 40, 50, 70];
 
// const som = arr.reduce(function(total, next){
//     return total + next;
// })


// console.log(som);


// const filter = arr.filter(function(item){
//     return item % 2 !== 0;
// })

// console.log(filter);


// const find = arr.find(function(item){
//     return item === 10;
// })

// console.log(find);


// // Arrow functions


// const arr = [10, 11, 13, 15, 17, 20, 30];

// const newArr = arr.map((item, index) => item * 2 + index);

// console.log(newArr);




// const teste = () => ({ nome: 'Felipe' });

// console.log(teste);


// const teste2 = () => ({ nome: 'Teste' });

// console.log(teste2);





// destructuring of the object;


// const user = {
//     nome: 'Felipe',
//     idade: 26,
//     endereco: {
//         cidade: 'Brasília',
//         estado: 'DF',
//     }
// }

// const { nome, endereco: { estado } } = user;

// console.log(nome);
// console.log(estado);



// const escola = {
//     nome: 'uniplan',
//     professor: 'Fabiano',
//     turmas: {
//         ads1: '20 alunos',
//         ads2: '30 alunos',
//         ads3: '25 alunos',
//     }
// }


// // console.log(escola.nome);
// // console.log(escola.turmas.ads2);

// const { nome, turmas: { ads1, ads3 }} = escola;

// console.log(escola);



// // REST & SPREAD

// const escola = {
//     nome: 'uniplan',
//     professor: 'Fabiano',
//     turmas: {
//         ads1: '20 alunos',
//         ads2: '30 alunos',
//         ads3: '25 alunos',
//     }
// }


// const { nome, ...resto } = escola;


// console.log(nome);
// console.log(resto);


// const arr = [1, 2, 3, 4, 5];

// const [ a, b, ...c] = arr;


// console.log(a);
// console.log(b);
// console.log(c);


// function soma(a, b, ...params){
//     return params;
// }

// console.log(soma(1, 4, 5, 7, 7, 10));



// // Spread 

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [ ...arr1, ...arr2 ];

// console.log(arr3);


// const user = {
//     nome: 'Felipe',
//     idade: 26,
//     cidade: 'brasília'
// }

// const user2 = { ...user, nome: 'Felp2', idade: 25 };


// console.log(user);
// console.log(user2);


// // Template literals ${}

// const name = 'Felipe';
// const age = 26;

// console.log(`My name is ${name} and i have ${age} years`)


// // Object Short Syntax 

// const name = 'Felipe';
// const age = 26;

// const user = {
//     name,
//     age, 
//     student: 'yes'
// }

// console.log(user);







// // requisitions AJAX 




// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/saraivafelipe27');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//    if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.responseText));
//    }
// }



// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/saraivafelipe27');
// xhr.send(null);


// xhr.onreadystatechange = function() {
//    if(xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.responseText));
//    }
// }




// // PROMISES 




// const myPromise = () => new Promise((resolve, reject) => {
//    setTimeout(() => { resolve('T E S T E >>>') }, 3000);
// })


// myPromise().then(response => {
//    console.log(response);
// })






// var minhaPromise = function() {
//    return new Promise(function(resolve, reject) {
//       var xhr = new XMLHttpRequest();
//       xhr.open('GET', 'https://api.github.com/users/saraivafelipe27');
//       xhr.send(null);

//       xhr.onreadystatechange = function() {
//          if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                resolve(JSON.parse(xhr.responseText));
//             } else {
//                reject('Erro na requisição');
//             }
//          }
//       }
//    })
// }


// minhaPromise()
//    .then(function(response){
//       console.log(response);
//    })
//    .catch(function(error){
//       console.warn(error);
//    });


// // Utilizando AXIOS

// axios.get('https://api.github.com/users/saraivafelipe')
//    .then(function(response){
//       console.log(response);
//    })
//    .catch(function(error){
//       console.warn(error);
//    });



// // ASYNC AWAIT


// const myPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('Teste...') }, 3000);
// })


// async function executaPromise() {
//     const response = await myPromise();

//     console.log(response);
// }   

// executaPromise();



// const myPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 3000);
// })

// // async function execPromise() {
// //     console.log(await myPromise());    
// //     console.log(await myPromise());    
// //     console.log(await myPromise());    

// // }

// // // Async wait com arrow function 

// const execPromise = async () => {
//     console.log(await myPromise());    
//     console.log(await myPromise());    
//     console.log(await myPromise());   
// }


// execPromise();



// //  Axios com async await (yarn add axios)

// import axios from 'axios';


// class Api {
//     static async getUserApi(username){
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`);

//             console.log(response);
//         } catch (err) {
//             console.log('User not found');
//         }
//     }
// }

// Api.getUserApi('saraivafelipe27');