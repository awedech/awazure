<template>
  <v-app>
    <v-main>
      <FrontPage/>
    </v-main>
  </v-app>
</template>

<script>
import FrontPage from './components/FrontPage';

export default {
  name: 'App',

  components: {
    FrontPage,
  },

  data: () => ({
    //
  }),
};
</script>
