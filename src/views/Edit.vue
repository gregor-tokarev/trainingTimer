<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-icon>mdi-pencil-outline</v-icon> <input v-model="trainingName" class="value-input" type="text">
      </v-card-title>
      <v-card-text>
        <Form :training="training"/>
      </v-card-text>
      <v-card-subtitle>Total Time: {{totalTime}}</v-card-subtitle>
      <v-card-actions>
        <v-btn
                color="primary"
                dark
                absolute
                bottom
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

  export default {
    name: "Edit",
    components: {
      Form
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
      totalTime() {
        return this.training.exercises.reduce((acc, item) => {
          acc += parseInt(item.duration) + parseInt(item.offset);
          return acc;
        }, 0)
      }
    }
  }
</script>

<style scoped>
</style>
