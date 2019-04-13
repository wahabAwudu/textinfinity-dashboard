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
                  <h2 class="flex my-4 primary--text">Reset Password</h2>
                </div>
                <v-form>
                  <v-text-field append-icon="lock" name="new_password1" label="New Password" type="password"
                  v-model="model.new_password1"
                  v-validate="'required'"
                  :error-messages="errors.collect('password1')"
                  data-vv-name="password1"
                  required>
                </v-text-field>
                  <v-text-field append-icon="lock" name="new_password2" label="Confirm Password" type="password"
                  v-model="model.new_password2"
                  v-validate="'required'"
                  :error-messages="errors.collect('password2')"
                  data-vv-name="password2"
                  required>
                </v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="resetPassword" :loading="loading" :disabled="disabled">Reset Password</v-btn>
              </v-card-actions>

              <!-- <v-card-actions>
                <router-link to="/access/login"></router-link>
              </v-card-actions> -->
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
    // uid: this.params.id,
    // token: this.params.token,
    model: {
      new_password1: null,
      new_password2: null
    },
  }),

  computed: {
    disabled () {
      if (this.model.new_password1 === null || this.model.new_password2 === null) {
        return true;
      }
      else {
        return false;
      }
    }
  },

  methods: {
    resetPassword () {
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
