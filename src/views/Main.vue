<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="display-3">Trainings:</v-card-title>
      <v-card-text>
        <transition-group tag="div">
          <TrainingListItem v-for="(training, index) in $store.getters['trainings/trainings']" :key="index"
                            :training="training"></TrainingListItem>
        </transition-group>
      </v-card-text>
      <v-card-actions>
        <v-btn  @click="addTraining"
                color="primary"
                dark
                absolute
                bottom
                right
                fab>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import TrainingListItem from "@/components/TrainingListItem";
  import Form from "@/components/Form";

  export default {
    name: "main",
    components: {
      TrainingListItem,
      Form
    },
    methods: {
      addTraining() {
        const id = this.$store.state.trainings.trainings.length + 1;
        this.$router.push({name: 'edit', params: {id}});
      }
    }
  }
</script>

<style scoped>
  .mx-auto {
    margin: 0 auto;
  }
</style>
