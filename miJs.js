const app = new Vue({
    el: '#app',
    data: {
        drawer: false,
        tareas: [{nombre: 'Pasear al perro', estado:false}],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea: function (){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea='';
            localStorage.setItem('tareas',JSON.stringify(this.tareas));
        },
        tareaRealizada: function(index){
            this.tareas[index].estado=true;
            localStorage.setItem('tareas',JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
            this.tareas.splice(index,1);
            localStorage.setItem('tareas',JSON.stringify(this.tareas));
        },
    },
    created: function(){
        let myLocalStorageDB = JSON.parse(localStorage.getItem('tareas'));        
        if( myLocalStorageDB === null ){
            this.tareas=[];
        }else{
            this.tareas = myLocalStorageDB;
        }
        console.log(myLocalStorageDB);
    }
});