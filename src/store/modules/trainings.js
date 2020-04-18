import Vue from "vue";

export default {
  namespaced: true,
  state: {
    trainings: [
      {
        name: 'Lets play',
        id: 1,
        exercises: [
          {
            id: 1,
            name: 'dsfakj1',
            duration: 30,
            offset: 15
          },
          {
            id: 2,
            name: 'dsfakj1',
            duration: 30,
            offset: 15
          }
        ]
      }
    ]
  },
  mutations: {
    UPDATE_NAME(state, value) {
      Vue.set(state.trainings[value.id - 1], 'name', value.newName)
    },
    UPDATE_EXERCISE_NAME(state, value) {
      Vue.set(state.trainings[value.id - 1].exercises[value.exerciseId - 1], 'name', value.newValue)
    },
    UPDATE_EXERCISE_DURATION(state, value) {
      Vue.set(state.trainings[value.id - 1].exercises[value.exerciseId - 1], 'duration', value.newValue)
    },
    UPDATE_EXERCISE_OFFSET(state, value) {
      Vue.set(state.trainings[value.id - 1].exercises[value.exerciseId - 1], 'offset', value.newValue)
    },
  },
  actions: {
    updateName({commit}, value) {
      commit('UPDATE_NAME', value)
    },
    updateExerciseName({commit}, value) {
      commit('UPDATE_EXERCISE_NAME', value)
    },
    updateExerciseDuration({commit}, value) {
      commit('UPDATE_EXERCISE_DURATION', value)
    },
    updateExerciseOffset({commit}, value) {
      commit('UPDATE_EXERCISE_OFFSET', value)
    },
  },
  getters: {
    trainings(state) {
      return state.trainings;
    },
    trainingById: state => id => state.trainings.find(element => element.id === id),
    exerciseName: (state, getters) => (id, exerciseId) => {
      console.log(getters['trainingById'](id).exercises[exerciseId].name);
      return getters['trainingById'](id).exercises[exerciseId].name
    }
  }
}
