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
  background: linear-gradient(0deg, rgba(9,16,29,1) 3%, rgba(7,13,23,1) 31%, rgba(7,13,23,1) 50%, rgba(7,13,23,1) 71%, rgba(9,16,29,1) 97%); 
}


</style>