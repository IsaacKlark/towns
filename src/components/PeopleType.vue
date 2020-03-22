<template>
  <div>
    <div class="last-panel">
      <div class="last-panel__row">
        <div class="person-type">Adults</div>
        <div class="last-panel__button-zone">
          <button
            type="button"
            v-bind:class="{greenButton: adults > 1, grayButton: adults <= 1}"
            v-on:click="minusAdults"
            class="roundButton"
          >-</button>
          <div class="person-type">{{adults}}</div>
          <button type="button" class="greenButton roundButton" v-on:click="plusAdults">+</button>
        </div>
      </div>
      <div class="last-panel__row">
        <div class="person-type">
          <div class="person-type">Children</div>
          <p class="last-panel__p">(2-12)</p>
        </div>
        <div class="last-panel__button-zone">
          <button
            type="button"
            v-bind:class="{greenButton: children > 0, grayButton: children <= 0}"
            v-on:click="minusChildren"
            class="roundButton"
          >-</button>
          <div class="person-type">{{children}}</div>
          <button type="button" class="greenButton roundButton" v-on:click="plusChildren">+</button>
        </div>
      </div>

      <div class="last-panel__row">
        <div class="person-type">
          <div class="person-type">Infants</div>
          <p class="last-panel__p">(0-2)</p>
        </div>
        <div class="last-panel__button-zone">
          <button
            type="button"
            v-bind:class="{greenButton: infants > 0, grayButton: infants <= 0}"
            v-on:click="minusInfants"
            class="roundButton"
          >-</button>
          <div class="person-type">{{infants}}</div>
          <button type="button" class="greenButton roundButton" v-on:click="plusInfants">+</button>
        </div>
      </div>

      <select
        name="type-of-tickets"
        class="type-of-tickets"
        v-on:change="e => changeTicketsType(e)"
      >
        <option value="Economy">Economy</option>
        <option value="Premium economy" selected>Premium economy</option>
        <option value="Buisness">Buisness</option>
        <option value="First">First</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PeopleType",
    props: ["minusAmountPeople", "plusAmountPeople", "changeTicketsType"],
    data: function() {
      return {
        adults: 1,
        children: 0,
        infants: 0
      };
    },
    methods: {
      minusAdults: function() {
        if (this.adults > 0) {
          this.adults--;
          this.minusAmountPeople();
        }
      },

      plusAdults: function() {
        this.adults++;
        this.plusAmountPeople();
      },

      minusChildren: function() {
        if (this.children > 0) {
          this.children--;
          this.minusAmountPeople();
        }
      },

      plusChildren: function() {
        this.children++;
        this.plusAmountPeople();
      },

      minusInfants: function() {
        if (this.infants > 0) {
          this.infants--;
          this.minusAmountPeople();
        }
      },

      plusInfants: function() {
        this.infants++;
        this.plusAmountPeople();
      }
    }
  };
</script>

<style scoped>
  .last-panel {
    position: absolute;
    bottom: -174px;
    right: 11.5vw;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 200px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .last-panel__row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .last-panel__button-zone {
    display: flex;
    align-items: center;
  }

  .roundButton {
    border-radius: 50%;
    border: 0;
    outline: 0;
    color: white;
    padding: 0;
    width: 20px;
    height: 20px;
    margin: 10px;
  }

  .roundButton:hover {
    cursor: pointer;
  }

  .greenButton {
    background-color: #14450c;
  }

  .grayButton {
    background-color: #bababa;
  }

  .last-panel__row div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .last-panel__row div p {
    color: #bababa;
    margin-left: 5px;
  }

  .type-of-tickets {
    padding: 5px 10px;
    border-radius: 5px;
    outline: 0;
  }

  .type-of-tickets:focus {
    border: 1px solid rgb(77, 77, 238);
  }

  @media (max-width: 900px) {
    .last-panel {
      bottom: -110px;
      left: 50%;
      margin-left: -110px;
    }
  }
</style>