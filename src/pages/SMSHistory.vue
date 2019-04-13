<template>
  <div id="page-lists">
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex lg2></v-flex>
        <v-flex lg8 sm12 xs12>
        <sms-history-table></sms-history-table>
        </v-flex>
        <v-flex lg2></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SMSHistoryTable from '@/components/widgets/list/SMSHistoryTable';

export default {
  components: {
    'sms-history-table': SMSHistoryTable,
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
