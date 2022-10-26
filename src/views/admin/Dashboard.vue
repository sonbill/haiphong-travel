<template>
  <div>DASHBOARD PAGE</div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";
export default {
  name: "dashboard",
  setup() {
    const store = useStore();
    // onMounted(store.dispatch["getUser"]);
  },
};
</script>

