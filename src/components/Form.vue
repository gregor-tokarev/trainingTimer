<template>
  <transition-group tag="div" name="listdf">
    <ExerciseItemEdit v-for="(exercise, index) in training.exercises" :key="index" :exercise="exercise"/>
  </transition-group>
</template>

<script>
  import ExerciseItemEdit from "@/components/ExerciseItemEdit";

  export default {
    name: "Form",
    components: {
      ExerciseItemEdit
    },
    props: {
      training: {
        type: Object,
      }
    }
  }
</script>

<style scoped lang="scss">
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
