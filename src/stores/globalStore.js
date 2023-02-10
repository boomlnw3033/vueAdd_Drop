import { ref } from "vue";
import { defineStore } from "pinia";
export const useGlobalState = defineStore("globalStore", {
  state: () => {
    return {
      globalStates: ref([]),
    };
  },
  getters: {},
  actions: {
    pushState(state) {
      this.$state.globalStates.push(state);
    },
    deleteState(index) {
      this.$state.globalStates.splice(index, 1);
    },
  },
});
