<template>
  <div id="app">
    <AuthForm/>
  </div>
</template>

<script>
import AuthForm from './components/AuthForm'

export default {
  name: 'App',
  components: {
    AuthForm
  }
}
</script>

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
