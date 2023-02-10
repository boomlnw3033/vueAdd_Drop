<template>
  <form @submit.prevent="submitfrom">
    <div class="form-control">
      <label for="stu-name">คำนำหน้า</label>
      <div>
        <input type="radio" v-model="global.prename" value="นาย" />
        <label for="Mr.">นาย</label
        ><input type="radio" v-model="global.prename" value="นาง" />
        <label for="Mrs.">นาง</label
        ><input type="radio" v-model="global.prename" value="นางสาว" />
        <label for="Miss.">นางสาว</label>
      </div>
    </div>
    <div class="form-control">
      <label for="stu-name">ชื่อ-นามสกุล</label>
      <input type="text" v-model.trim="global.name" maxlength="100" required />
    </div>
    <div class="form-control">
      <label for="stu-ID">รหัสนักศึกษา</label>
      <input type="text" v-model.trim="global.stuID" maxlength="10" required />
    </div>
    <div class="form-control">
      <label for="subjectName">รายวิชาที่เลือก</label>
      <select v-model="global.subjectSelected" required>
        <option disabled value="">Please select one</option>
        <option :value="s" v-for="s in subjectList" :key="s" required>
          {{ s.subject_id }},{{ s.subject }},ผู้สอน {{ s.instructor }}
        </option>
      </select>
    </div>
    <div>
      <button>ยืนยัน</button>
    </div>
  </form>
  <div class="add-drop" v-for="(g, index) in globalState" :key="g">
    <p>ชื่อ : {{ g.prename }} {{ g.name }} รหัสนักศึกษา : {{ g.stuID }}</p>
    <p>
      ลงเรียนวิชา : {{ g.subjectSelected.subject_id }}
      {{ g.subjectSelected.subject }}
    </p>
    <p>ผู้สอน :{{ g.subjectSelected.instructor }}</p>
    <button @click="removeGlobalState(index)">ถอนรายวิชา</button>
  </div>
</template>

<script>
import { useSubjectStore } from "../stores/adddrop";
import { useGlobalState } from "../stores/globalStore";
import Swal from "sweetalert2";
export default {
  name: "FormComponent",
  data() {
    return {
      globalState: useGlobalState().$state.globalStates,
      subjectList: useSubjectStore().$state.subjectState,
      global: {
        prename: "",
        subjectSelected: {},
        name: "",
        stuID: "",
        subj: "",
        subj_id: "",
      },
    };
  },
  mounted() {
    console.log(this.global);
  },
  methods: {
    submitfrom() {
      console.log("Save");
      console.log(this.global);

      // push state to pinia
      useGlobalState().pushState(this.global);
      this.globalState = useGlobalState().$state.globalStates; // log ข้อมูล subject state ใน console.log
    },

    removeGlobalState(index) {
      Swal.fire({
        title: "คุณแน่ใจนะ?",
        text: "คุณจะไม่สามารถแก้ไขได้อีกหากทำการถอนรายวิชาไปแล้ว",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          useGlobalState().deleteState(index);
          Swal.fire(
            "ทำการถอนรายวิชา!",
            "รายวิชาของคุณถูกถอนเป็นที่เรียบร้อยแล้ว",
            "สำเร็จ"
          );
        }
      });
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  background: #fff;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
}
input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.25rem;
}
button {
  font: inherit;
  background: rgb(215, 56, 56);
  color: rgb(255, 255, 255);
  padding: 0.25rem 1rem;
  border-radius: 5px;
}
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}
input[type="radio"] + label {
  font-weight: normal;
}
.add-drop {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  background: #fff;
  text-align: center;
}
</style>
