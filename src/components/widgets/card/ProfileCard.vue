<template>
  <v-card>
    <!-- <v-card-media src="/static/people/man/m1.jpg" height="390">
      <v-layout column class="media ma-0">
        <v-card-title>
          <v-btn dark icon>
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn dark icon class="mr-3">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn dark icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-title class="white--text pl-5 pt-5">
          <div class="display-1 pl-5 pt-5">Ali Conners</div>
        </v-card-title>
      </v-layout>
    </v-card-media> -->

    <v-list two-line class="pa-0">
      <v-subheader class="text-md-center" href="#">
        <h3>Account Information</h3>
    </v-subheader>

    <v-list-tile href="#">
      <v-list-tile-action>
        <v-icon color="indigo">person</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title>{{userModel.username}}</v-list-tile-title>
        <v-list-tile-sub-title>account</v-list-tile-sub-title>
      </v-list-tile-content>

    </v-list-tile>

      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon color="indigo">phone</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{userModel.phone}}</v-list-tile-title>
          <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider inset></v-divider>

      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon color="indigo">mail</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{userModel.email}}</v-list-tile-title>
          <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
        </v-list-tile-content>

      </v-list-tile>

      <!-- <v-divider inset></v-divider>
      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon color="indigo">location_on</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>1400 Main Street</v-list-tile-title>
          <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile> -->

    </v-list>
    <div>
      <v-btn class="text-lg-right" color="info" to="/user/profile/update">Account Update</v-btn>
    </div>
  </v-card>
</template>

<script>
import { customUsersUrl, getHeaders } from '@/config';
import axios from 'axios';
export default {

  data: () => ({
    userModel: {
      username: null,
      email: null,
      phone: null,
    },

  }),

  created () {
    axios.get(customUsersUrl, { headers: getHeaders() })
      .then(res => {
        this.userModel.username = res.data[0].username;
        this.userModel.email = res.data[0].email;
        this.userModel.phone = res.data[0].phone;
      })
      .catch(err => {
        console.log(err.data);
        this.$toasted.console.error('Something Went Wrong, Reload Page.', {
          position: 'top-right',
          duration: 2000,
          icon: 'block',
        });
      });
  }

};
</script>
