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
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --var-cor-principal-body: #070D17;
  --var-cor-navbar: #09101D;
  --var-font-league-spartan: 'League Spartan';
  --var-font-roboto: 'Roboto';
}
</style>