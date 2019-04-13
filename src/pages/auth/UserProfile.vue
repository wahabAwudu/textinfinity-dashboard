<template>
  <div>
    <v-container grid-list-xl fluid>
      <v-layout row wrap>

        <v-flex lg2></v-flex>
        <!-- social/weather card start -->
        <v-flex lg8 sm12 xs12>
          <profile-card></profile-card>
        </v-flex>
        <v-flex lg2></v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ProfileCard from '@/components/widgets/card/ProfileCard';
import { customUsersUrl, getHeaders } from '@/config';
export default {
  components: {
    ProfileCard,
  },
  data: () => ({

  }),

};
</script>
