<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"
          ><img src="../components/pic/MJU_LOGO.svg.png" alt="..."
        /></v-avatar>
        <v-btn><RouterLink to="/">เมนู</RouterLink></v-btn>
        <v-btn><RouterLink to="/news">ข่าว</RouterLink></v-btn>
        <v-btn><RouterLink to="/plans">แผนการเรียน</RouterLink></v-btn>
        <v-btn><RouterLink to="/adddrop">เพิ่ม-ถอนรายวิชา</RouterLink></v-btn>
      </v-container>
    </v-app-bar>
  </v-app>
</template>
