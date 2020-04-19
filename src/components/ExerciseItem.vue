<template>
  <v-list-item class="">
    <v-list-item-title class="display-1">{{exercise.name}}</v-list-item-title>
    <v-spacer></v-spacer>
    <p class="v-list-item-content"> Duration: {{exercise.duration || 0}}
      <span class="v-list-item__offset">Offset: {{exercise.offset || 0}}</span></p>
  </v-list-item>
</template>

<script>
  export default {
    name: "ExerciseItem",
    props: {
      exercise: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="sass">
.v-list-item-content
  white-space: nowrap
  font-size: 1.5rem
  font-family: Roboto, sans-serif

.v-list-item__offset
  margin-left: 30px
</style>
