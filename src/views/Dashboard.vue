<template>
  <div class="dashboard">
    <!-- <h1>Homepage</h1>
    <p class="red white--text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eligendi necessitatibus sed possimus porro, natus, repellendus, eveniet eos ad omnis ipsum atque molestias facilis? Quidem provident repellat fugit error officia.</p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius ipsa dolorem temporibus nesciunt doloribus officia doloremque recusandae porro, dolorum repudiandae, provident minima. Nulla numquam amet incidunt rerum quo error.</p>
    <h1 class="display-4">Massive Display</h1>
    <h1 class="display-1">Smaller Display</h1>
    <p class="headline text-uppercase">This is a headline</p>
    <p class="subheading font-weight-bold">This is a Sub heading</p>
    <p class="caption">This is a Caption</p>-->

    <!-- <v-btn class="pink white--text">Click Me</v-btn><br><br>
    <v-btn depressed dark color="pink">Depressed</v-btn><br><br>
    <v-btn flat color="pink">Flat is not working</v-btn><br><br>

    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>email</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>Email me</span>
      <v-icon right large>email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>-->
    <v-subheader class="grey--text">Dashboard</v-subheader>

    <v-container class="my-5">
      <v-layout row class="mb-6 ml-2">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon small left>folder</v-icon>
              <span class="caption text-lowercase">By project title</span>
            </v-btn>
          </template>
          <span small>Sort project by project title</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon small left>person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort project by person</span>
        </v-tooltip>

        <!-- <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click="sortBy('due')" v-bind="attrs" v-on="on">
              <v-icon small left>date_range</v-icon>
              <span class="caption text-lowercase">By due date</span>
            </v-btn>
          </template>
          <span>Sort project by due date</span>
        </v-tooltip> -->

      </v-layout>

      <v-card flat v-for="(project, index) in projects" :key="index">
        <v-layout row wrap class="ml-0" :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div class="grey--text text--darken-2">{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs6 md2>
            <div class="text-right">
              <v-chip
                small
                :class="`${ project.status } white--text caption my-2 mr-4`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb'

export default {
  data() {
    return {
      projects: []
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  created(){
    db.collection('projects').onSnapshot((snapshot) => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    this.projects.push({
                      ...change.doc.data(),
                        id: change.doc.id,
                    })
                }
            })
        })
  }
};
</script>

<style>
.project.completed {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.completed {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>