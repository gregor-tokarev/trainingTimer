<template>
  <div class="text-center">
    <h1 class="display-3">{{training.name}}</h1>
    <Timer :exercises="exercises"/>
  </div>
</template>

<script>
  import Timer from "@/components/Timer";

  export default {
    name: "Go",
    components: {
      Timer
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    computed: {
      training() {
        return this.$store.getters['trainings/trainingById'](this.id)
      },
      exercises() {
        return this.training.exercises;
      }
    }
  }
</script>

<style scoped>

</style>
