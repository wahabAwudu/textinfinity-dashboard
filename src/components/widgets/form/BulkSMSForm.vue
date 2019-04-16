<template>
  <v-card>
    <v-toolbar card prominent extended color="primary" dark="">
      <v-toolbar-title class="body-2"><h3>Send Bulk SMS</h3></v-toolbar-title>
    </v-toolbar>
    <v-card-text>

      <v-form ref="form" lazy-validation>
        <v-layout row wrap>
          <v-flex lg12 sm12>
            <v-text-field label="Sender ID (Message Header)" name="sender_id" type="text"
            v-model="model.sender_id"
            v-validate="'required'"
            :error-messages="errors.collect('sender_id')"
            :counter="11"
            data-vv-name="sender_id"
            required>
            </v-text-field>
          </v-flex>

          <v-flex lg12 sm12>
            <v-textarea name="message_body" label="Message Body"
            v-model="model.message_body"
            v-validate="'required'"
            :error-messages="errors.collect('message_body')"
            :counter="153"
            data-vv-name="message_body"
            required>
            </v-textarea>
          </v-flex>

          <v-flex lg12 xs12 sm12 d-flex>
          <v-select
          v-model="text_mode"
          :items="text_modes"
          label="Select Text Mode"
          outline
           ></v-select>
          </v-flex>

          <v-flex lg12 sm12 v-if="text_mode === text_modes[0]">
            <v-textarea name="phone_numbers" label="Paste Numbers (Each Separated by comma ,)"
            v-model="model.phone_numbers"
            v-validate="'required'"
            :error-messages="errors.collect('phone_numbers')"
            :counter="153"
            data-vv-name="phone_numbers"
            required>
            </v-textarea>
          </v-flex>

          <v-flex lg12 xs12 sm12 v-if="text_mode === text_modes[1]">
            Choose Text File<input type="file" @change="setTextFile">
          </v-flex>

          <v-flex lg12 xs12 sm12 d-flex v-if="text_mode === text_modes[2]">
          <v-select
          v-model="model.contact_list"
          :items="lists"
          label="Select Contact List"
          outline
           ></v-select>
          </v-flex>
          <v-spacer></v-spacer>
        </v-layout>
      </v-form>

    </v-card-text>
    <v-card-actions class="pb-3">
      <v-btn color="primary" @click="saveToDraft" :loading="loading" :disabled="disabled">Save as Draft</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="sendBulkSMS" :loading="loading" :disabled="disabled">Send Bulk SMS</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import { getHeaders } from '@/config';

export default {
  data: () => ({
    loading: false,
    model: {
      sender_id: null,
      message_body: null,
      contact_list: null,
      phone_numbers: null,
    },
    text_mode: null,
    text_modes: ['Paste Phone Numbers Here', 'Upload Text File', 'Select From Contact Lists'],
    text_file: null,

    lists: ['List1', 'List2'],
  }),

  computed: {
    disabled () {
      if (this.model.sender_id === null || this.model.message_body === null || this.model.list === null) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    sendBulkSMS () {
      this.sendFormText();
    },

    sendTextFile () {
      const form_data = new FormData();
      form_data.append('text_file', this.text_file, this.text_file.name);
      let url = 'https://github.com';

      axios.post(url, form_data, { headers: getHeaders() })
        .then(res => {
        //
        })
        .catch(err => {
          this.$toasted.error('Error Occurred saving file', {
            icon: 'block',
            position: 'top-right',
            duration: 3000,
          });
        });
    },

    sendFormText() {
      let separated_phone_numbers = this.model.phone_numbers.split(",");
      const contactPayload = {
        phone_numbers: separated_phone_numbers,
      };

      // axios.post('https://github.com', contactPayload, { headers: getHeaders() })
      //   .then(res => {
      //   //
      //   })
      //   .catch(err => {
      //     this.$toasted.error('Error Occurred saving file', {
      //       icon: 'block',
      //       position: 'top-right',
      //       duration: 3000,
      //     });
      //   });
    },

    saveToDraft () {
      //this.loading = true;
    },

    setTextFile (e) {
      this.text_file = e.target.files[0];
    },
  }
};
</script>
