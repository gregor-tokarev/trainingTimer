<template>
  <div class="">

    <v-card>
      <v-list>
        <ExerciseItem v-for="(exercise, index) in training.exercises" :key="index" :exercise="exercise"/>
      </v-list>
      <v-btn  @click="$router.push({name: 'go', params: {id}})"
              color="primary"
              dark
              absolute
              bottom
              right
              fab>
        <v-icon>mdi-play</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
  import ExerciseItem from "@/components/ExerciseItem";

  export default {
    name: "Training",
    components: {
      ExerciseItem
    },
    props: {
      id: {
        type: [Number, String],
        required: true
      }
    },
    computed: {
      training() {
        console.log(this.$store.getters['trainings/trainingById'](this.id))
        return this.$store.getters['trainings/trainingById'](this.id);
      }
    }
  }
</script>

<style scoped>

</style>
