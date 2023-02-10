<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title
      >{{ subject_ID || "not found" }} {{ subject_Name || "not found" }} <br />
      ผู้สอน : {{ subject_Instructor || "not found" }}
    </v-card-title>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn @click="show = !show">ดูข้อมูลเพิ่มเติม</v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          คำอธิบายรายวิชา : {{ subject_Desciption }} <br /><br />
          ชั่วโมงบรรยาย : {{ subject_Describe }}| ชั่วโมงปฏิบัติ :
          {{ subject_Practice }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    subject_Name: String,
    subject_ID: String,
    subject_Instructor: String,
    subject_Desciption: String,
    subject_Describe: String,
    subject_Practice: String,
  },
  data: () => ({
    show: false,
  }),
};
</script>
