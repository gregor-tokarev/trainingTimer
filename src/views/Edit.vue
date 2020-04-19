<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-icon>mdi-pencil-outline</v-icon>
        <input :value="trainingName" @keyup="changeTrainingName($event)" class="value-input" type="text">
      </v-card-title>
      <v-card-text>
        <Form :training="training"/>
      </v-card-text>
      <TotalTime/>
      <v-card-actions>
        <v-btn @click="addNewExercise"
               color="primary"
               dark
               absolute
               bottom
               fab
               right>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Form from "@/components/Form";
  import TotalTime from "@/components/TotalTime";

  export default {
    name: "Edit",
    components: {
      Form,
      TotalTime
    },
    props: {
      id: {
        type: [Number, String],
        required: true
      }
    },
    computed: {
      ...mapGetters('trainings', ['trainingById']),
      training() {
        return this.trainingById(this.id)
      },
      trainingName: {
        set(value) {
          this.$store.dispatch('trainings/updateName', {
            id: this.training.id,
            newName: value
          })
        },
        get() {
          return this.training.name;
        }
      },
    },
    methods: {
      addNewExercise() {
        this.$store.dispatch('trainings/addNewExercise', this.id)
      },
      changeTrainingName(event) {
        this.$store.dispatch('trainings/updateName', {
          id: this.id,
          newName: event.target.value
        })
      }
    }
  }
</script>

<style scoped>
</style>
