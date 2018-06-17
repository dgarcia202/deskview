<template>
  <v-app>
    <v-content>
        <link-profile @start-connect="showLoader" v-if="view == 'link-profile'"></link-profile>
        <loader v-if="view == 'loader'"></loader>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'root',
  data () {
    return {
      view: 'link-profile'
    }
  },
  methods: {
    showLoader: function() {
      this.view = 'loader';
    }
  }
}
</script>
