<template>
  <h1 style="text-align: center">รายชื่อวิชา</h1>
  <v-divider style="margin-bottom: 2rem"></v-divider>
  <div class="subJ" v-for="n in subjectList" :key="n">
    <SubjectItem
      :subject_Name="n.subject"
      :subject_ID="n.subject_id"
      :subject_Instructor="n.instructor"
      :subject_Desciption="n.description"
      :subject_Describe="n.subject_h_describe"
      :subject_Practice="n.subject_h_practice"
    ></SubjectItem>
  </div>
  <v-divider></v-divider>
</template>

<script setup>
import SubjectItem from "../components/SubjectItem.vue";
import { useSubjectStore } from "../stores/adddrop";
const subjectList = useSubjectStore().$state.subjectState;
</script>

<style scoped>
.subJ {
  margin-bottom: 1rem;
}
</style>
