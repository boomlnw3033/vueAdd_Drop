<script setup>
import { RouterLink, RouterView } from "vue-router";
//import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="back">
    <div>
      <v-container class="d-flex align-center head">
        <img
          src="./components/pic/MJU_LOGO.svg.png"
          alt="..."
          height="60"
          style="margin-right: 3rem"
        />
        <ul>
          <RouterLink to="/"
            ><v-btn class="menu"><h3>เมนู</h3></v-btn></RouterLink
          >
          <RouterLink to="/news"
            ><v-btn class="menu"><h3>ข่าว</h3></v-btn></RouterLink
          >
          <RouterLink to="/plans"
            ><v-btn class="menu"><h3>แผนการเรียน</h3></v-btn></RouterLink
          >
          <RouterLink to="/adddrop"
            ><v-btn class="menu"><h3>เพิ่ม-ถอนรายวิชา</h3></v-btn></RouterLink
          >
        </ul>
      </v-container>
    </div>

    <div class="head-title">
      <h1>
        Welcome to
        <h1
          style="text-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); color: lightgreen"
        >
          Maejo University
        </h1>
      </h1>
    </div>

    <v-container class="align-center body-1">
      <div><RouterView /></div>
    </v-container>
  </div>
</template>

<style scoped>
.menu {
  margin-right: 1rem;
}
.back {
  background-color: darkgreen;
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.head {
  border-radius: 0px 0px 15px 15px;
  background-color: rgb(177, 255, 177);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.head-title {
  border-radius: 15px 15px 15px 15px;
  margin-top: 3rem;
  text-align: center;
}
.body-1 {
  border-radius: 15px 15px 0px 0px;
  background-color: rgb(220, 255, 220);
  margin-top: 3rem;
  padding-bottom: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
