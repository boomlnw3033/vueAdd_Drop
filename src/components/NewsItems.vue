<template>
  <v-card class="mx-auto" max-width="500">
    <v-img :src="pic" height="200px" cover></v-img>

    <v-card-title>{{ title || "not found" }} </v-card-title>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn @click="show = !show">ดูเนื้อหา</v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ subtitle }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    pic: String,
  },
  data: () => ({
    show: false,
  }),
};
</script>
