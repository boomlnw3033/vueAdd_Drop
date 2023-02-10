import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const newStore = defineStore("news", () => {
  const count = ref(0);

  const newsList = ref([
    {
      id: 1,
      head_title: "รับนักศึกษาใหม่",
      title: "ยินดีตอนรับนักศึกษาใหม่ทุกท่าน",
      pic: "https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/300786920_433662692115427_2259817996382273285_n.jpg?stp=dst-jpg_p600x600&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEN5ruEGs-qJgnWGaXOTN8BHJ6z3jjH_8QcnrPeOMf_xCPoRYyEi5ETTPnvDmRtl_PGzgfxSTQoEO2bVo_gzjb7&_nc_ohc=R1BgYJnSgZgAX-K773E&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfAdyltvJhE3xlXa927ACda5JALs24kdQKPx0qE_1ZyILA&oe=63E4BDD0",
    },
    {
      id: 2,
      head_title: "Game of the year 2022!!",
      title: "เกม Elden ring ได้รางวัล Game of the year 2022 ไปครอง",
      pic: "https://www.videogameschronicle.com/files/2022/02/sds5.jpg",
    },
    {
      id: 3,
      head_title: "สุดยอด Anime",
      title: "Cyberpunk|Edgerunner เป็นหนึ่งในสุดยอด Anime ตลอดกาล",
      pic: "https://www.cyberpunk.net/build/images/edgerunners/phase2/cover-desktop@1x-e6d6aaa1.jpg",
    },
    {
      id: 3,
      head_title: "เกมที่คุณต้องลอง",
      title: "Hades เป็นเกมแนว rogue like ที่คุณไม่ควรพลาด",
      pic: "https://cdn.wccftech.com/wp-content/uploads/2020/09/hades_artHD.jpg",
    },
  ]);

  const doubleCount = computed(() => count.value * 2);
  const showData = newsList.value;

  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment, newsList, showData };
});
