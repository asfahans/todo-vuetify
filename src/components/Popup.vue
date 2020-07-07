<template>
  <v-dialog max-width="600" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="success" text small v-bind="attrs" v-on="on">ADD NEW PROJECT</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
            <v-menu>
                <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="due" label="Due date" v-bind="attrs" v-on="on" prepend-icon="date_range" :rules="inputRules"></v-text-field>
                </template>
                <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">ADD PROJECT</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>


<script>
import db from '@/fb'
import moment from 'moment';

export default {
  data() {
    return {
        title: '',
        content: '',
        due: null,
        inputRules: [
          v => (v && v.length >= 1) || 'This field cannot be left blank'
        ],
        loading: false,
        dialog: false,
    }
  },
  methods: {
      submit(){
        if(this.$refs.form.validate()){
          this.loading = true
          const project = {
            title: this.title,
            content: this.content,
            due: moment(String(this.due)).format('Do MMM YYYY'),
            person: 'The Keymaker',
            status: 'ongoing'
          }
          db.collection('projects').add(project).then(() => {
            this.loading = false
            this.dialog = false
            this.$emit('projectAdded')
          })
        }
      }
  },
  computed: {
      formattedDate() {
          return this.due ? moment(String(this.due)).format('Do MMM YYYY') : ''
      }
  }
};
</script>

<style>
</style>