import { ref } from "vue";
import { defineStore } from "pinia";

export const useSubjectStore = defineStore("storeState", {
  state: () => {
    return {
      subjectState: ref([
        {
          id: 1,
          subject: "สถาปัตยกรรมคอมพิวเตอร์",
          subject_id: "คพ232",
          subject_h_describe: "บรรยาย 2 ชม.",
          subject_h_practice: "ปฏิบัติ 3 ชม.",
          instructor: "ผู้ช่วยศาสตราจารย์ภานุวัฒน์ เมฆะ",
          description:
            "แนะนำสถาปัตยกรรมคอมพิวเตอร์ โครงสร้างและการทำงานของระบบคอมพิวเตอร์ หน่วยประมวลผลกลาง หน่วยความจำ ระบบของการนําเข้าและการแสดงผล ระบบตัวเลขฐาน การออกแบบหน่วยตรรกะและหน่วยควบคุม หลักการทำงานและออกแบบด้านวงจรดิจิตอลแลวงจรอิเล็กทรอนิกส์ การทำงานไมโครโพรเซสเซอร์เบื้องต้น สำหรับไอโอที วงจรรวม ชุดของคำสั่งเครื่องการวัดสมรรถนะของคอมพิวเตอร์",
        },
        {
          id: 2,
          subject: "การพัฒนาโปรแกรมประยุกต์บนเว็บ",
          subject_id: "คพ313",
          subject_h_describe: "บรรยาย 2 ชม.",
          subject_h_practice: "ปฏิบัติ 3 ชม.",
          instructor: "อาจารย์อรรถวิท ชังคมานนท์",
          description:
            "ความรู้เบื้องต้นทางเทคโนโลยี เทคนิคการพัฒนาเว็บไซต์แบบไดนามิก การออกแบบเว็บเพจที่ตอบสนองการแสดงผลให้เหมาะสมทั้งเบราว์เซอร์บนเว็บและอุปกรณ์เคลื่อนที่ การเขียนโปรแกรมบนฝั่งลูกข่ายและฝั่งแม่ข่ายเพื่อปฏิสัมพันธ์กับระบบฐานข้อมูลการประยุกต์ใช้งานแอปพลิเคชันโปรแกรมมิ่งอินเตอร์เฟซ (เอพีไอ)",
        },
        {
          id: 3,
          subject: "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์",
          subject_id: "คพ343",
          subject_h_describe: "บรรยาย 3 ชม.",
          subject_h_practice: "ปฏิบัติ 0 ชม.",
          instructor: "อาจารย์ ดร.พยุงศักดิ์ เกษมสำราญ",
          description:
            "ความรู้เบื้องต้นเกี่ยวกับเมตริกซ์ การดำเนินการของเมตริกซ์ การดำเนินการตามแถวและหลัก รูปแบบแอชชิลอนของเมตริกซ์ ระบบสมาการเชิงเส้น ดีเทอร์มิแนนท์ ปริภูมิเวกเตอร์ การโปรแกรมเชิงเส้น",
        },
        {
          id: 4,
          subject: "การวิเคราะห์และออกแบบเชิงวัตถุ",
          subject_id: "คพ252",
          subject_h_describe: "บรรยาย 2 ชม.",
          subject_h_practice: "ปฏิบัติ 3 ชม.",
          instructor: "ผู้ช่วยศาสตราจารย์ก่องกาญจน์ ดุลยไชย",
          description:
            "วัฏจักรการพัฒนาระบบ บทบาทและคุณสมบัติของนักวิเคราะห์ระบบ ความต้องการของระบบ คุณสมบัติของระบบ พื้นฐานการวิเคราะห์และออกแบบระบบเชิงโครงสร้าง หลักการพื้นฐานเชิงวัตถุ การวิเคราะห์เชิงวัตถุ แบบจำลองวัตถุ การออกแบบเชิงวัตถุการเชื่อมความสัมพันธ์ของวัตถุ การออกแบบส่วนติดต่อผู้ใช้",
        },
        {
          id: 5,
          subject: "ตรรกศาสตร์เชิงดิจิทัลและอุปกรณ์อัจฉริยะ",
          subject_id: "คพ121",
          subject_h_describe: "บรรยาย 2 ชม.",
          subject_h_practice: "ปฏิบัติ 3 ชม.",
          instructor: "ผู้ช่วยศาสตราจารย์ ดร. ปวีณเขื่อนแก้ว",
          description:
            "ทฤษฎีเบื้องต้นของวงจรสวิตชิ่ง คณิตศาสตร์แบบบูล ตารางความจริง การลดรูปสมการบูลลีนโดยใช้แผนที่แบบคาร์นอ วงจรเกท วงจรฟลิปฟลอป วงจรนับ วงจรเลื่อนรีจิสเตอร์การออกแบบวงจรคอมไบเนชัน วงจรซีเควนเชียล เครื่องสถานะจำกัด",
        },
      ]),
    };
  },
  getters: {
    getSubjectStates: (state) => state.subjectState,
  },
  actions: {
    pushSubject(subject) {
      this.$state.subjectState.push(subject);
    },
  },
});