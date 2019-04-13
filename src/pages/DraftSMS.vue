<template>
  <div id="page-lists">
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex lg2></v-flex>
        <v-flex lg8>
        <draft-list-table></draft-list-table>
        </v-flex>
        <v-flex lg2></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DraftListTable from '@/components/widgets/list/DraftListTable';

export default {
  components: {
    'draft-list-table': DraftListTable,
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
