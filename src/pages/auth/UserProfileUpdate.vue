<template>
  <div>
    <v-container grid-list-xl fluid>
      <v-layout row wrap>

        <v-flex lg2></v-flex>
        <!-- social/weather card start -->
        <v-flex lg8 sm12 xs12>
          <v-tabs color="primary" dark slider-color="yellow" fixed-tabs>
            <v-tab>
                <h5 class="flex my-4 white--text">Account Update</h5>
            </v-tab>

            <v-tab>
                <h5 class="flex my-4 white--text">Password Change</h5>
            </v-tab>

            <v-tab-item>
              <v-card class="elevation-1 pa-3">
                <v-card-text>

                  <v-form>
                    <v-text-field append-icon="phone" name="phone" label="Phone Number" type="tel"
                    v-model="model.phone"
                    v-validate="'required'"
                    :error-messages="errors.collect('phone')"
                    data-vv-name="phone"
                    required>
                  </v-text-field>
                  </v-form>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn block color="primary" @click="updateAccount" :loading="loading" :disabled="disabledPhone">Submit</v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card class="elevation-1 pa-3">
                <v-card-text>

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
                  <v-btn block color="primary" @click="changePassword" :loading="loading" :disabled="disabledPassword">Change</v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>



        </v-tabs>
        </v-flex>
        <v-flex lg2></v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
import { customUsersUrl, passwordChangeUrl, getHeaders } from '@/config';
import axios from 'axios';

export default {
  components: {

  },
  data: () => ({
    loading: false,
    passwordMismatch: false,
    model: {
      phone: null,
      new_password1: null,
      new_password2: null,
    }
  }),

  computed: {
    disabledPhone () {
      if (this.model.phone === null) {
        return true;
      }
      else {
        return false;
      }
    },

    disabledPassword () {
      if (this.model.new_password1 === null || this.model.new_password2 === null) {
        return true;
      }
      else {
        return false;
      }
    }
  },

  created () {
    let authUser = JSON.parse(localStorage.getItem('authUser'));

    axios.get(customUsersUrl + authUser.id + '/', { headers: getHeaders() })
    .then(res => {
      this.model.phone = res.data.phone;
    })
    .catch(err => {
      console.log(err.data);
    });
    // end server request
  },

  methods: {
    updateAccount () {
      this.loading = true;
      const accountPayload = {
        phone: this.model.phone,
      };

      let authUser = JSON.parse(localStorage.getItem('authUser'));
      let userId = authUser.id;

      axios.put(customUsersUrl + userId + '/', accountPayload, { headers: getHeaders() })
      .then(res => {
        this.$toasted.success('Account Updated Successfully', {
          duration: 2000,
          position: 'top-right',
          icon: 'check'
        });
        this.$router.replace('/user/profile');
      })
      .catch(err => {
        this.loading = false;
        console.log(err.data);
        this.$toasted.error('Something Went Wrong, Try Again', {
          duration: 2000,
          icon: 'block',
          position: 'top-right'
        });
      });
      // end server request
    },

    changePassword () {
      // check for password Mismatch
      if (this.model.new_password1 === this.model.new_password2) {

        // start request setup
        this.loading = true;
        const accountPayload = {
          new_password1: this.model.new_password1,
          new_password2: this.model.new_password2
        };

        let authUser = JSON.parse(localStorage.getItem('authUser'));
        let userId = authUser.id;

        axios.put(customUsersUrl + userId + '/', accountPayload, { headers: getHeaders() })
        .then(res => {
          this.$toasted.success('Password Updated Successfully', {
            duration: 2000,
            position: 'top-right',
            icon: 'check'
          });
          this.$router.replace('/user/profile');
        })
        .catch(err => {
          this.loading = false;
          console.log(err.data);
          this.$toasted.error('Something Went Wrong, Try Again', {
            duration: 2000,
            icon: 'block',
            position: 'top-right'
          });
        });
        // end request
      } else {
        this.$toasted.error('Passwords Don\'t Match', {
          duration: 4000,
          icon: 'block',
          position: 'top-right'
        });
      }

    }
  },

};
</script>
