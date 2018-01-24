<template>
  <div class="hello container">
    <h1>hello world</h1>

    <h3>completed tasks: {{todos.filter(todo => {return todo.done === true}).length}}</h3>
    <h3>pending tasks: {{todos.filter(todo => {return todo.done === false}).length}}</h3>
    <div class="row">
      <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" :todo.sync="todo" v-for="(todo, index) in todos" v-bind:index="index" v-bind:key="todo"></todo> 
    </div>

    <!-- <div v-for="data in myJson" v-bind:key="data">
      <h3>{{ data.name }}</h3>
      <span v-for="tag in data.tags" v-bind:key="tag">{{ tag }}</span>
      </div> -->
  </div>
</template>

<script>
import json from '../../assets/json/object.json'
import Todo from '../todo/todo'
export default {
  name: 'Home',
  components: { Todo },
  // props: [ 'todos'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      myJson: json,
      isEditing: false,
      todos: [{
        title: 'todo A',
        project: 'Project A',
        done: false
      },
      {
        title: 'todo B',
        project: 'Project B',
        done: false
      },
      {
        title: 'todo C',
        project: 'Project C',
        done: true
      },
      {
        title: 'todo D',
        project: 'Project D',
        done: true
      },
      {
        title: 'todo E',
        project: 'Project E',
        done: false
      },
      {
        title: 'todo F',
        project: 'Project F',
        done: false
      }]
    }
  },
  methods: {
   deleteTodo(todo) {
     const todoIndex = this.todos.indexOf(todo);
     this.todos.splice(todoIndex, 1);
   },
   completeTodo(todo) {
    const todoIndex = this.todos.indexOf(todo);
    this.todos[todoIndex].done = true;
   }
  }
}
// getQuestion(function (result) {
//     console.log('result >>> ' + JSON.stringify(result))
// })
// function getQuestion(callback) {
//     $.getJSON("../../assets/json/object.json", function (jsonObj) {
//         result = jsonObj
//         callback(result)
//     })
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
