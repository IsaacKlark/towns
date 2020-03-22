<template>
  <section class="bar">
    <form class="top-form">
      <label for="round-trip" class="top-form__label">
        <input
          type="radio"
          name="way"
          id="round-trip"
          class="top-form__input"
          v-on:change="roundTrip"
          checked
        />
        Round Trip
      </label>
      <label for="one-way" class="top-form__label">
        <input
          type="radio"
          name="way"
          id="one-way"
          class="top-form__input"
          v-on:change="selectOneWay"
        />
        One way
      </label>
      <label for="flights-only" class="top-form__label">
        <input type="checkbox" name="flights-only" class="top-form__input" id="flights-only" />
        Direct flights only
      </label>
    </form>
    <BarBottom v-bind:oneWay="oneWay" />
  </section>
</template>

<script>
import lastPanelDisplay from '../lastPanelDisplay';
import BarBottom from './BarBottom';

export default {
  name: "Bar",
  components: {
    BarBottom
  },
  data: function() {
    return {
      oneWay: false
    };
  },
  methods: {
    selectOneWay: function() {
      this.oneWay = true;
    },

    roundTrip: function() {
      this.oneWay = false;
    }
  }
};

lastPanelDisplay();
</script>

<style scoped>
.bar {
  background-color: #14450c;
  margin: 70px 50px;
  border-radius: 5px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.3);
  position: relative;
}

.top-form {
  display: flex;
  align-items: center;
  width: 100%;
}

.top-form__label {
  margin: 15px 0 15px 0;
  color: white;
  display: flex;
  align-items: center;
  line-height: 100%;
  margin-right: 10px;
}

.top-form__label:hover {
  cursor: pointer;
}

.top-form__input {
  margin-right: 8px;
  width: 25px;
  height: 25px;
  margin-top: 0;
  margin-left: 0;
}

@media(max-width: 900px) {
  .top-form {
    justify-content: space-around;
  }

  .bar {
    margin: 0;
  }
}
</style>