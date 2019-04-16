<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>

        <!-- mini statistic start -->
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-facebook"
            title="100+"
            sub-title="Likes"
            color="indigo"
          >
          </mini-statistic>
        </v-flex>

        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-google"
            title="150+"
            sub-title="Connections"
            color="red"
          >
          </mini-statistic>
        </v-flex>

        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-twitter"
            title="200+"
            sub-title="Followers"
            color="light-blue"
          >
          </mini-statistic>
        </v-flex>

        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-instagram"
            title="50+"
            sub-title="Shots"
            color="purple"
          >
          </mini-statistic>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MiniStatistic from '@/components/widgets/statistic/MiniStatistic';

export default {
  components: {
    MiniStatistic,
  },
  data: () => ({
  }),

  computed: {
  
  },

};
</script>
