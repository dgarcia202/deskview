<template>
  <v-container>  
    <v-layout>
        <v-flex xs12 mt-5>
            <v-progress-circular size="80" width="9" indeterminate color="primary"></v-progress-circular>
        </v-flex>
    </v-layout>
    <v-layout>
        <v-flex xs12>
            <h2 color="primary">Creating secure link with Modal Flat Protect</h2>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'loader',
  data () {
    return {
       text: ''
    }
  }
}
</script>