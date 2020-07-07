<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added the new project.</span>
        <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>


    <v-app-bar flat app class="grey lighten-4">
      <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar flat class="text-uppercase grey--text grey lighten-4">
        <span class="font-weight-light">TODO</span>
        <span>Ninja</span>
      </v-toolbar>
      <v-spacer></v-spacer>

      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on" class="grey--text">
        <v-icon>expand_more</v-icon>
        <span>Menu</span> 
       </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn text color="grey">
        <span>Signout</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer absolute temporary v-model="drawer" class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-8">
          <v-avatar size="80" class="grey lighten-2">
            <img src="/avatar-1.png" alt="">
          </v-avatar>
        </v-flex>
        <p class="white--text subheading mt-3">Asfahan Shaikh</p>
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(link, i) in links" :key="i" router :to="link.route">
            <v-list-item-icon>
              <v-icon class="white--text">{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from '@/components/Popup'
export default {
  components: {
    Popup
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ],
      snackbar: false
    };
  }
};
</script>

<style>
</style>