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