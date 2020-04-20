<template>
  <div>
    <h2 class="my-4 d-block">{{exerciseName | toUpperCase}}</h2>
    <v-progress-circular
            :rotate="360"
            :size="300"
            :width="30"
            :value="absoluteValue || 100"
            color="purple"
    >
      <p class="d-block">{{ value || startValue}}</p>
    </v-progress-circular>
    <v-btn
            class="d-block mx-auto mt-4"
            @click="setInter"
            color="success"
            active-class=""
    >
      <v-icon>mdi-{{this.mode}}</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: "Timer",
    data: () => ({
      interval: undefined,
      startValue: 0,
      value: undefined,
      exerciseCount: 0,
      mode: 'play',
      offset: false
    }),
    props: {
      exercises: {
        type: Object,
        required: true
      }
    },
    beforeDestroy() {
      clearInterval(this.interval)
    },
    mounted() {
      this.startValue = this.exercise.duration;
    },
    methods: {
      setInter() {
        this.mode = this.mode === 'play' ? 'pause' : 'play';
        const audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
        if (this.interval !== undefined) {
          clearInterval(this.interval);
          this.interval = undefined;
          return
        }
        this.value = this.startValue;
        audio.pause();
        this.interval = setInterval(() => {
          if (this.value === 0) {
            if (this.startValue === this.exercise.duration) {
              this.startValue = this.exercise.offset;
              this.offset = true
            } else {
              this.exerciseCount++;
              this.offset = false;
              this.startValue = this.exercise.duration;
              if (Object.keys(this.exercises).length + 1 === this.exerciseCount) clearInterval(this.interval)
            }
            this.value = this.startValue
          }
          this.value--;
          if (this.value === 5) audio.play();
        }, 1000);
      }
    },
    computed: {
      absoluteValue() {
        return (this.value / this.startValue) * 100
      },
      exercise() {
        return this.exercises[this.exerciseCount]
      },
      exerciseName() {
        return this.offset ? 'Offset' : this.exercise.name
      }
    },
    filters: {
      toUpperCase(value) {
        return value.toUpperCase()
      }
    }
  }
</script>

<style scoped>

</style>
