<template>
  <div id="page-lists">
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex lg3></v-flex>
        <v-flex lg6>
          <contact-list-form></contact-list-form>
        </v-flex>
        <v-flex lg3></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ContactListForm from '@/components/widgets/form/ContactListForm';
import { newContactListUrl, getHeaders } from '@/config';
export default {
  components: {
    'contact-list-form': ContactListForm,
  },
  data: () => ({
    model: {

    }
  }),
  computed: {
  },
  methods: {
  }
};
</script>
