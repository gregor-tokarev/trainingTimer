<template>
  <v-form>
    <FormItem v-for="(exercise, index) in training.exercises" :key="index" :exercise="exercise"/>
  </v-form>
</template>

<script>
  import FormItem from "@/components/FormItem";

  export default {
    name: "Form",
    components: {
      FormItem
    },
    props: {
      training: {
        type: Object,
      }
    }
  }
</script>

<style scoped>

</style>
