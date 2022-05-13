import { Todo } from "./todo.class";



export class TodoList {

    constructor (){
        // this.todos = [];
        this.cargarlocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    };

    eliminarTodo(id){
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    };

    marcarCompletado(id){

        for (const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                break; 
            }
        }

    };

    eliminarCompletados(id){

        this.todos = this.todos.filter( todo => !todo.completado);


    };

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos));
    };

    cargarlocalStorage(){

        // if(localStorage.getItem('todo')){

        //     this.todos = JSON.parse(localStorage.getItem('todo'));

        //     console.log('cargar local', this.todos)

        // }else{
        //     this.todos=[];
        // };
        this.todos = (localStorage.getItem('todo'))
                        ? JSON.parse(localStorage.getItem('todo'))
                        : [];

        this.todos = this.todos.map( obj => Todo.fromJson(obj) );
    };

}