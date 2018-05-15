<!--App.vue是项目入口文件。-->
<template>
    <div id="app">
      {{msg}}
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
