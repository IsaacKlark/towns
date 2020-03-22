<template>
  <div>
    <div class="bar-bottom">
      <form class="bar-bottom__form">
        <label class="fild label">
          <img src="../images/location.svg" alt="location" class="ico" />
          
          <ejs-autocomplete 
            class="bar-bottom__input" 
            placeholder="From" 
            aria-haspopup="false"
            :dataSource="cities"
            :fields="dataFields"
          >
          </ejs-autocomplete>
          <img src="../images/arrows.svg" alt="location" class="ico arrows" />
        </label>
        <label class="fild label">
          <img src="../images/location.svg" alt="location" class="ico" />
          <ejs-autocomplete 
            class="bar-bottom__input" 
            placeholder="To" 
            aria-haspopup="false"
            :dataSource="cities"
            :fields="dataFields"
          >
          </ejs-autocomplete>
        </label>
        <label for="from" class="fild label">
          <img src="../images/calendar.svg" alt="location" class="ico" />
          <input type="date" class="bar-bottom__input" v-bind:value="date" id="from" />
        </label>
        <label for="to" class="fild label">
          <img v-if="!oneWay" src="../images/calendar.svg" alt="location" class="ico" />
          <img v-if="oneWay" src="../images/calendar-inactive.svg" alt="location" class="ico" />
          <input
            v-bind:type="type"
            class="bar-bottom__input"
            v-bind:class="{inactiveDate: oneWay}"
            id="to"
            v-on:focus="changeType"
            v-on:mouseleave="e => changeTypeBack(e)"
            placeholder="Return"
            v-bind:readonly="oneWay"
          />
        </label>
        <label class="fild">
          <img src="../images/person.svg" alt="person" class="ico" />
          <div class="panel-wrapper">
            <input
              type="text"
              class="bar-bottom__input peson-select"
              v-bind:value="amountPeople + ', ' + tickets"
              v-on:click="showLastPanel"
              readonly
            />
          </div>
          <img src="../images/arrow_down.svg" class="arrow-down" alt="arrow down" />
        </label>
      </form>
      <button type="button" class="bar-bottom__button">Search</button>
    </div>
    <PeopleType
      v-bind:minusAmountPeople="minusAmountPeople"
      v-bind:plusAmountPeople="plusAmountPeople"
      v-bind:changeTicketsType="changeTicketsType"
    />
    
  </div>
</template>

<script>
import PeopleType from "./PeopleType";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
import Vue from 'vue';
import cities from '../data/cities.json';

console.log(cities);

Vue.use(AutoCompletePlugin);

const date = new Date();

export default {
  name: "BarBottom",
  props: ["oneWay"],
  components: {
    PeopleType
  },
  data: function() {
    return {
      date: `${date.getFullYear()}-${
        date.getMonth().toString().length < 2
          ? "0" + date.getMonth()
          : date.getMonth()
      }-${
        date.getDate().toString().length < 2
          ? "0" + date.getDate()
          : date.getDate()
      }`,
      type: "text",
      amountPeople: 1,
      tickets: "premiumeconomy",
      cities: cities,
      dataFields: {
        value: 'name'
      }
    };
  },
  methods: {
    changeType: function() {
      if (!this.oneWay) {
        this.type = "date";
      }
    },

    changeTypeBack: function(e) {
      if (e.target.value.length === 0) {
        this.type = "text";
      }
    },

    showLastPanel: function() {
      document.querySelector(".last-panel").style.display = "block";
    },

    minusAmountPeople: function() {
      this.amountPeople--;
    },

    plusAmountPeople: function() {
      this.amountPeople++;
    },

    changeTicketsType: function(e) {
      this.tickets = e.target.value
        .split("")
        .join("")
        .toLowerCase();
    }
  }
};
</script>

<style scoped>
  @import url(https://cdn.syncfusion.com/ej2/material.css);

  e-input-focus::after, e-input-focus::before {
    display: none;
  }

  .bar-bottom__button {
    background-color: #de3f1f;
    color: white;
    text-transform: uppercase;
    border-radius: 5px;
    padding: 18px 25px;
    border: 0;
    outline: 0;
  }

  .bar-bottom__button:hover {
    cursor: pointer;
  }

  .bar-bottom__form {
    border-radius: 5px;
    width: 90%;
    display: flex;
    overflow: hidden;
    padding-right: 0;
  }

  .bar-bottom {
    display: flex;
  }

  .ico {
    width: 25px;
    height: 25px;
    margin-left: 2px;
  }

  .fild {
    background-color: white;
    margin-right: 2px;
    display: flex;
    align-items: center;
    padding-right: 5px;
    width: 19.2%;
    margin-right: 0;
  }

  .bar-bottom__input {
    width: 100%;
    border: 0;
    outline: 0;
    background-color: white;
  }

  .bar-bottom__form {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    margin-right: 2px;
  }

  .label:hover {
    cursor: pointer;
  }

  .option {
    display: flex;
  }

  .arrow-down {
    width: 10px;
    height: 10px;
  }

  .panel-wrapper {
    position: relative;
  }

  .inactiveDate {
    color: #bababa;
  }

  @media(max-width: 900px) {
    .bar-bottom {
      flex-direction: column;
      align-items: center;
    }

    .bar-bottom__form {
      flex-direction: column;
      align-items: center;
    }

    .fild {
      width: 100%;
      padding: 18px 25px;
      margin-bottom: 2px;
    }

    .bar-bottom__button {
      width: 50%;
      margin-top: 10px;
    }

    .arrows {
      margin-right: 10px;
    }
  }
</style>