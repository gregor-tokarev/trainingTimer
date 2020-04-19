import Vue from "vue";


const trainings = {
  namespaced: true,
  state: {
    trainings: {
      /*1: {
        name: 'Fat Lose',
        id: 1,
        exercises: {
          1: {
            id: 1,
            name: 'Jampen Jack',
            duration: 30,
            offset: 15
          },
          2: {
            id: 2,
            name: 'Push Up',
            duration: 30,
            offset: 0
          }
        }
      }*/
    }
  },
  mutations: {
    UPDATE_NAME(state, value) {
      Vue.set(state.trainings[value.id], 'name', value.newName)
    },
    UPDATE_EXERCISE_NAME(state, value) {
      Vue.set(state.trainings[value.id].exercises[value.exerciseId], 'name', value.newValue)
    },
    UPDATE_EXERCISE_DURATION(state, value) {
      Vue.set(state.trainings[value.id].exercises[value.exerciseId], 'duration', value.newValue)
    },
    UPDATE_EXERCISE_OFFSET(state, value) {
      Vue.set(state.trainings[value.id].exercises[value.exerciseId], 'offset', value.newValue)
    },
    CREATE_NEW_EXERCISE(state, value) {
      Vue.set(state.trainings[value.id].exercises, value.newId, {id: value.newId})
    },
    DELETE_EXERCISE(state, {id, exerciseId}) {
      console.log(id, exerciseId)
      Vue.delete(state.trainings[id].exercises, exerciseId)
    },
    ADD_TRAINING(state, id) {
      Vue.set(state.trainings, id, {id, name: 'default', exercises: {}})
    },
    DELETE_TRAINING(state, id) {
      Vue.delete(state.trainings, id);
    }
  },
  actions: {
    addNewExercise({commit, getters}, id) {
      console.log(getters.trainingExercisesLengthById(id));
      const newId = getters.trainingExercisesLengthById(id);
      commit('CREATE_NEW_EXERCISE', {
        id,
        newId
      })
    },
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
    deleteExercise({commit}, value) {
      commit('DELETE_EXERCISE', value)
    },
    addTraining({commit}, id) {
      commit('ADD_TRAINING', id)
    },
    deleteTraining({commit}, id) {
      commit('DELETE_TRAINING', id)
    }
  },
  getters: {
    trainings(state) {
      return state.trainings;
    },
    trainingExercisesLengthById: (state, getters) => id => Object.keys(getters.trainingById(id).exercises).length,
    trainingById: state => id => state.trainings[id],
  }
};

export default trainings;
