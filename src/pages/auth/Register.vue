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
                  <h2 class="flex my-4 primary--text">Sign Up</h2>
                </div>
                <v-form>
                  <v-text-field append-icon="person" name="username" label="Username" type="text"
                  v-model="model.username"
                  v-validate="'required'"
                  :error-messages="errors.collect('name')"
                  data-vv-name="name"
                  required>
                </v-text-field>

                  <v-text-field append-icon="email" name="email" label="Email" type="text"
                  v-model="model.email"
                  v-validate="'required|email'"
                  :error-messages="errors.collect('email')"
                  data-vv-name="email"
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
                <v-btn block color="primary" @click="register" :loading="loading" :disabled="disabled">Join Us</v-btn>
              </v-card-actions>

              <v-card-actions>
                <router-link to="/access/login"> Already Have an Account? Login</router-link>

                <!-- <v-btn icon>
                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fa fa-instagram fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                </v-btn>
                <v-spacer></v-spacer> -->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
      username: null,
      email: null,
      password: null
    },
    errormessages: [],
  }),

  computed: {
    disabled () {
      if (this.model.username === null || this.model.password === null || this.model.email === null) {
        return true;
      }
      else {
        return false;
      }
    }
  },

  methods: {
    register () {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/access/login');
      }, 1000);
    }
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
