<template>
  <div id="page-lists">
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex lg2></v-flex>
        <v-flex lg8 sm12 xs12>
        <contact-list-table></contact-list-table>
        </v-flex>
        <v-flex lg2></v-flex>
        <v-fab-transition>
        <v-btn class="fab-icon"
              absolute
              dark
              fab
              bottom
              right
              fixed
              color="pink"
              to="/dashboard/new-contact-list"
            >
              <v-icon>add</v-icon>
            </v-btn>
        </v-fab-transition>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ContactListTable from '@/components/widgets/list/ContactListTable';

/* eslint-disable */
export default {
  components: {
    'contact-list-table': ContactListTable,
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


<style lang="css" scoped>
.fab-icon {
  margin-bottom: 70px;
}
</style>
