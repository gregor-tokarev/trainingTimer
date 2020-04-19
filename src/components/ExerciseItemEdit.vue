<template>
  <div class="form-item">
    <v-text-field label="Name" type="text" @change="updateExerciseName($event)" :value="exercise.name"/>
    <v-text-field label="Duration" @change="updateExerciseDuration($event)" :value="exercise.duration" type="number"/>
    <v-text-field label="Offset" @change="updateExerciseOffset($event)" :value="exercise.offset" type="number"/>
    <v-btn
            color="error"
            @click="deleteExercise"
    ><v-icon>mdi-delete</v-icon></v-btn>
  </div>
</template>

<script>
  export default {
    name: "ExerciseItemEdit",
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
          newValue: event
        })
      },
      updateExerciseDuration(event) {
        this.$store.dispatch('trainings/updateExerciseDuration', {
          id: this.id,
          exerciseId: this.exercise.id,
          newValue: event
        })
      },
      updateExerciseOffset(event) {
        this.$store.dispatch('trainings/updateExerciseOffset', {
          id: this.id,
          exerciseId: this.exercise.id,
          newValue: event
        })
      },
      deleteExercise() {
        this.$store.dispatch('trainings/deleteExercise', {
          id: this.id,
          exerciseId: this.exercise.id
        })
      }
    }
  }
</script>

<style scoped lang="sass">
.form-item
  padding: 1rem
  border-radius: 10px
  border: 1px solid rgba(0, 0, 0, 0.14)

  &:not(:last-child)
    margin-bottom: 2rem

</style>
