<template>
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body" v-show="!isEditing">
            <h5 class="card-title">{{ todo.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ todo.project }}</h6>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <button v-on:click="showForm">edit</button>
            <!-- <span class="badge badge-success" v-show="todo.done">Completed</span> -->
            <!-- <button class="card-link" v-show="!todo.done">Complete</button> -->
            <button class="card-link" v-on:click="deleteTodo(todo)">delete</button>
          </div>
          <div class="card-body" v-show="isEditing">
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title" v-model="todo.title" placeholder="Enter title">
              <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
            </div>
            <div class="form-group">
              <label for="title">Project Name</label>
              <input type="text" class="form-control" id="title" v-model="todo.project" placeholder="Enter title">
              <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
            </div>
            <button v-on:click="hideForm">close</button>
          </div>
            <button class="badge badge-success" v-show="!isEditing && todo.done" disabled>Completed</button>
            <button class="badge badge-danger" v-show="!isEditing && !todo.done">Pending</button>
        </div>
      </div>
</template>

<script>
export default {
  props: ['todo'],
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo);
    },
    completeTodo(todo) {
      this.$emit('complete-todo', todo);
      
    }
  }
}
</script>

<style>

</style>
