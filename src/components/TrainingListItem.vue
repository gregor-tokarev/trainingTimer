<template>
  <v-list-item color="error" three-line two-line>
    <v-list-item-title class="title">{{training.name}} </v-list-item-title>
    <v-btn @click="edit" color="success"><v-icon>mdi-pencil</v-icon></v-btn>
    <v-btn @click="go" color="primary" class="mx-3"> <v-icon>mdi-play</v-icon></v-btn>
    <v-btn
          color="error"
          @click="deleteTraining"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
  export default {
    name: "TrainingListItem",
    props: {
      training: {
        type: Object,
        required: true
      }
    },
    methods: {
      go() {
        this.$router.push({name: 'training', params: { id: this.training.id }});
      },
      edit() {
        this.$router.push({name: 'edit', params: { id: this.training.id }})
      },
      deleteTraining() {
        console.log(this.training.id)
        this.$store.dispatch('trainings/deleteTraining', this.training.id)
      }
    }
  }
</script>

<style scoped lang="sass">
br
  display: block
.time
  white-space: nowrap
</style>
