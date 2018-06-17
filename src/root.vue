<template>
  <v-app>
    <v-content>
        <p>{{ message }}</p>
        <link-profile @start-connect="message = 'hola'" v-if="!loading"></link-profile>
        <loader v-if="loading"></loader>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'root',
  data () {
    return {
      loading: false,
      message: ''
    }
  },
  methods: {
    
  }
}
</script>
