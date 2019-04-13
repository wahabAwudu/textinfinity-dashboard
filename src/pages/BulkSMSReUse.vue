<template>
  <div id="page-lists">
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex lg3></v-flex>
        <v-flex lg6>
          <bulk-sms-re-use></bulk-sms-re-use>
        </v-flex>
        <v-flex lg3></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BulkSMSEditForm from '@/components/widgets/form/BulkSMSEditForm';

export default {
  components: {
    'bulk-sms-re-use': BulkSMSEditForm,
  },
  data () {
    return {
    };
  },
  computed: {
  },
  methods: {
  }
};
</script>
