<template>
  <div class="team">
      <v-subheader class="grey--text">Team</v-subheader>

      <v-container class="my-5">

        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="(person, index) in team" :key="index">
            <v-card text class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-2">
                  <img :src="person.avatar" alt=""> 
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading grey--text text--darken-4">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="grey">
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      
      </v-container>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {name: 'Asfahan Shaikh', role: 'The Developer', avatar: './avatar-1.png'},
        {name: 'Ryu', role: 'Graphic Designer', avatar: './avatar-2.png'},
        {name: 'Chun Li', role: 'Web Developer', avatar: './avatar-3.png'},
        {name: 'Gouken', role: 'Social Media Maverick', avatar: './avatar-4.png'},
        {name: 'Yoshi', role: 'Sales guru', avatar: './avatar-5.png'},
      ]
    }
  }
}
</script>

<style>

</style>