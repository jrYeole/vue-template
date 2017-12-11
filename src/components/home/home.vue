<template>
  <div class="hello">
    <h1>hello world</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div v-for="data in myJson" v-bind:key="data">
      <h3>{{ data.name }}</h3>
      <span v-for="tag in data.tags" v-bind:key="tag">{{ tag }}</span>
      <!-- age>>>>>>>>{{ data.age }} <br> <br> -->
      <!-- <h3 ></h3> -->
      </div>
  </div>
</template>

<script>
import json from '../../assets/json/object.json'
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      myJson: json
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
h1, h2 {
  font-weight: normal;
  // color: darken( #fff, 0.1);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
