<template>
  <div class="form-item">
    Name: <input type="text" class="value-input" @keyup="updateExerciseName($event)" :value="exercise.name">
    Duration: <v-text-field @change="updateExerciseDuration($event)" :value="exercise.duration" type="number"/>
    Offset: <input @change="updateExerciseOffset($event)" :value="exercise.offset" type="number">
  </div>
</template>

<script>
  export default {
    name: "FormItem",
    props: {
      exercise: {
        type: Object,
        required: true
      }
    },
    computed: {
      id() {
        return this.$route.params.id;
      }
    },
    methods: {
      updateExerciseName(event) {
        this.$store.dispatch('trainings/updateExerciseName', {
          id: this.id,
          exerciseId: this.exercise.id,
          newValue: event.target.value
        })
      },
      updateExerciseDuration(event) {
        this.$store.dispatch('trainings/updateExerciseDuration', {
          id: this.id,
          exerciseId: this.exercise.id,
          newValue: event.target.value
        })
      },
      updateExerciseOffset(event) {
        this.$store.dispatch('trainings/updateExerciseOffset', {
          id: this.id,
          exerciseId: this.exercise.id,
          newValue: event.target.value
        })
      }
    }
  }
</script>

<style scoped>

</style>
