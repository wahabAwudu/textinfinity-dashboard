<template>
  <div id="page-lists">
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex lg3></v-flex>
        <v-flex lg6>
          <bulk-sms-form></bulk-sms-form>
        </v-flex>
        <v-flex lg3></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BulkSMSForm from '@/components/widgets/form/BulkSMSForm';

export default {
  components: {
    'bulk-sms-form': BulkSMSForm,
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
