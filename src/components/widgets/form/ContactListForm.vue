<template>
  <v-card>
    <v-toolbar card prominent extended color="primary" dark="">
      <v-toolbar-title class="body-2"><h3>Add Contact List</h3></v-toolbar-title>
    </v-toolbar>
    <v-card-text>

      <v-form ref="form" lazy-validation>
        <v-layout row wrap>
          <v-flex lg12 sm12>
            <v-text-field label="List Name" name="list_name" type="text"
            v-model="model.list_name"
            v-validate="'required'"
            :error-messages="errors.collect('list_name')"
            data-vv-name="list_name"
            required>
            </v-text-field>
          </v-flex>

          <v-flex lg12 sm12>
            <v-text-field label="Phone Number 1" name="phone_number1" type="text"
            v-model="model.phone1"
            v-validate="'required'"
            :error-messages="errors.collect('phone_number1')"
            :counter="15"
            data-vv-name="phone_number1"
            required>
            </v-text-field>
          </v-flex>

          <v-flex lg12 sm12>
            <v-text-field label="Phone Number 2" name="phone_number2" type="text"
            v-model="model.phone2"
            v-validate="'required'"
            :error-messages="errors.collect('phone_number2')"
            :counter="15"
            data-vv-name="phone_number2"
            required>
            </v-text-field>
          </v-flex>

          <v-spacer></v-spacer>
        </v-layout>
      </v-form>

    </v-card-text>
    <v-card-actions class="pb-3">
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="saveContactList" :loading="loading" :disabled="disabled">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable */
import { newContactListUrl, getHeaders } from '@/config';
import axios from 'axios';
export default {
  data: () => ({
    loading: false,
    model: {
      list_name: null,
      phone1: null,
      phone2: null,
    },
  }),

  computed: {
    disabled () {
      if (this.model.list_name === null || this.model.phone_number1 === null || this.model.phone_number2 === null) {
        return true;
      } else {
        return false;
      }
    },

  },
  methods: {
    saveContactList () {
      const conatactPayload = {
        list_name: this.model.list_name,
        numbers: ["Nubmer One", "Number Two"]
      };
      // this.loading = true;

      axios.post(newContactListUrl, conatactPayload, { headers:getHeaders() })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.data);
      });
    },

  }
};
</script>
