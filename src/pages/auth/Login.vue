<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="/static/m.png" alt="Text Infinity" width="120" height="120">
                  <h2 class="flex my-4 primary--text">Login</h2>
                </div>
                <v-form keyup.enter="login">
                  <v-text-field append-icon="person" name="username" label="Username" type="text"
                  v-model="model.username"
                  v-validate="'required'"
                  :error-messages="errors.collect('name')"
                  data-vv-name="name"
                  required>
                </v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password"
                  v-model="model.password"
                  v-validate="'required'"
                  :error-messages="errors.collect('password')"
                  data-vv-name="password"
                  required>
                </v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click.prevent="login" :loading="loading" :disabled="disabled">Login</v-btn>
              </v-card-actions>

              <v-card-actions>
                <router-link to="/access/register">Don't Have an Account? Sign Up</router-link>
                <v-spacer></v-spacer>
                <router-link to="/access/password-recovery">Forgotten Password?</router-link>
                <!-- <v-btn icon>
                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fa fa-instagram fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { loginUrl } from '@/config';
import axios from 'axios';
export default {
  data: () => ({
    loading: false,
    alert: false,
    model: {
      username: null,
      password: null
    }
  }),

  computed: {
    disabled () {
      if (this.model.username === null || this.model.password === null) {
        return true;
      }
      else {
        return false;
      }
    }
  },

  methods: {
    login () {
      const loginPayload = {
        username: this.model.username,
        password: this.model.password
      };

      let authUser = {};

      this.loading = true;
      axios.post(loginUrl, loginPayload)
        .then(res => {
          authUser.token = res.data.token;
          authUser.id = res.data.user.pk;
          // store user token locally
          localStorage.setItem('authUser', JSON.stringify(authUser));

          // set user into state
          this.$store.dispatch('setAuthUser', authUser);

          // show success message on dashboar home
          this.$toasted.success('Login Successfully', {
            position: 'top-right',
            duration: 2000,
            icon: 'check'
          });
          this.$router.replace('/dashboard');
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
          this.$toasted.error('Something Went wrong. Try Again', {
            position: 'top-right',
            icon: 'block',
            duration: 2500,
          });

        });

    }
    // end login request
  },


};
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
