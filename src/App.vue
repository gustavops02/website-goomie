<template>
  <MainPage />
</template>

<script>

import MainPage from './components/pages/MainPage.vue';

export default {
  name: 'App',

  components: {
    MainPage,
  }

}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: rgb(9,16,29);
}


</style>