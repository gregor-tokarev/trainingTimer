<template>
  <v-list-item color="error" three-line two-line>
    <v-list-item-title class="title">{{training.name}} </v-list-item-title>
    <span class="mr-6 time">Totoal time: {{ totalTime }}c</span>
    <v-btn @click="edit" color="success" class="mr-3"><v-icon>mdi-pencil</v-icon></v-btn>
    <v-btn @click="go" color="primary"> <v-icon>mdi-play</v-icon></v-btn>
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
    computed: {
      totalTime() {
        return  this.training.exercises.reduce((acc, item) => {
          acc += item.duration + item.offset;
          return acc;
        }, 0)
      }
    },
    methods: {
      go() {
        this.$router.push({name: 'training', params: { id: this.training.id }})
      },
      edit() {
        this.$router.push({name: 'edit', params: { id: this.training.id }})
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
