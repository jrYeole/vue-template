<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <!-- {{ $t('heading') }} -->
   this is default heading
   <router-link to="home">Home</router-link>
    <router-view/>
  </div>
</template>

// <script>
// import HelloWorld from './components/home/home'

// export default {
//   name: 'app',
//   components: {
//     HelloWorld
//   }
// }
// </script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
