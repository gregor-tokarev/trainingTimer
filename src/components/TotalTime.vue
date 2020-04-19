<template>
  <div class="">
    Total Time: {{totalTime}}
  </div>
</template>

<script>
  export default {
    name: "TotalTime",
    computed: {
      totalTime() {
        return Object.values(this.$store.getters['trainings/trainingById'](this.$route.params.id).exercises).reduce((acc, item) => {
          acc += (Number(item.duration) || 0) +  (Number(item.offset) || 0);
          return acc;
        }, 0)
      }
    }
  }
</script>

<style scoped>

</style>
