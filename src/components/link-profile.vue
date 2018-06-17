<template>
  <v-container>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>

                <v-toolbar color="primary" dark>
                    <v-toolbar-title color="white">Link DeskView to Total Cloud Reset</v-toolbar-title>
                </v-toolbar>

                <v-container>
                <v-form>
                    <v-text-field prepend-icon="person" label="Username" :value="username" required></v-text-field>
                    <v-text-field prepend-icon="lock" label="Password" type="password" :value="password" required></v-text-field>
                </v-form>
                </v-container>

                <v-card-actions>
                    <v-btn flat color="blue" @click.native="connect">Connect</v-btn>
                </v-card-actions>              
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const crypto = require('../services/crypto');

export default {
  name: 'link-profile',
  data () {
    return {
       username: '',
       password: ''
    }
  },
  methods: {
    connect: function () {
        this.$emit('start-connect');
        crypto.generateLocalKeyPair();
    }
  }
}
</script>