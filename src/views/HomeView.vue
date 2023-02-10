<template>
  <v-carousel hide-delimiters style="border-radius: 15px 15px 0px 0px">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
  <div class="news-bt">
    <RouterLink to="/news"><v-btn>ดูข่าวเพิ่มเติม</v-btn></RouterLink>
  </div>
  <v-divider></v-divider>
  <div>
    <v-container class="bt-to-eachlink" style="text-align: center">
      <v-row no-gutters style="height: 150px">
        <v-col cols="12" sm="6">
          <RouterLink to="/plans"
            ><v-hover v-slot="{ isHovering, props }" open-delay="200">
              <v-card
                :elevation="isHovering ? 16 : 2"
                :class="{ 'on-hover': isHovering }"
                class="mx-auto"
                max-width="350"
                v-bind="props"
              >
                <v-card-text
                  class="font-weight-medium mt-6 text-center text-subtitle-1"
                >
                  <h2>แผนการเรียน</h2>
                </v-card-text>
              </v-card>
            </v-hover></RouterLink
          >
        </v-col>
        <v-col cols="12" sm="6">
          <RouterLink to="/adddrop"
            ><v-hover v-slot="{ isHovering, props }" open-delay="200">
              <v-card
                :elevation="isHovering ? 16 : 2"
                :class="{ 'on-hover': isHovering }"
                class="mx-auto"
                max-width="350"
                v-bind="props"
              >
                <v-card-text
                  class="font-weight-medium mt-6 text-center text-subtitle-1"
                >
                  <h2>เพิ่ม-ถอน</h2>
                </v-card-text>
              </v-card>
            </v-hover></RouterLink
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      items: [
        {
          src: "https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/300786920_433662692115427_2259817996382273285_n.jpg?stp=dst-jpg_p600x600&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEN5ruEGs-qJgnWGaXOTN8BHJ6z3jjH_8QcnrPeOMf_xCPoRYyEi5ETTPnvDmRtl_PGzgfxSTQoEO2bVo_gzjb7&_nc_ohc=R1BgYJnSgZgAX-K773E&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfAdyltvJhE3xlXa927ACda5JALs24kdQKPx0qE_1ZyILA&oe=63E4BDD0",
        },
        {
          src: "https://www.cyberpunk.net/build/images/edgerunners/phase2/cover-desktop@1x-e6d6aaa1.jpg",
        },
        {
          src: "https://cdn.wccftech.com/wp-content/uploads/2020/09/hades_artHD.jpg",
        },
        {
          src: "https://www.videogameschronicle.com/files/2022/02/sds5.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.news-bt {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.bt-to-eachlink {
  margin-top: 2rem;
}
</style>
