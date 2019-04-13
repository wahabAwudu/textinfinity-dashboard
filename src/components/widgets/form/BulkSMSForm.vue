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
            <v-text-field textarea name="message_body" label="Message Body"
            v-model="model.message_body"
            v-validate="'required'"
            :error-messages="errors.collect('message_body')"
            :counter="153"
            data-vv-name="message_body"
            required>
            </v-text-field>
          </v-flex>

          <v-flex lg12 xs12 sm12 d-flex>
          <v-select
          v-model="model.list"
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
export default {
  data: () => ({
    loading: false,
    model: {
      sender_id: null,
      message_body: null,
      list: null,
    },
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
      this.loading = true;
    },

    saveToDraft () {
      this.loading = true;
    }
  }
};
</script>
