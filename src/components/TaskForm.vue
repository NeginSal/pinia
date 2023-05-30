<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="add a task ..." v-model="newTask" />
    <button>add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

export default {
  setup() {
    const TaskStore = useTaskStore();
    const newTask = ref("");

    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        TaskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 10000),
        });
        newTask.value = ""; 
      }
    };
    return { newTask, handleSubmit };
  },
};
</script>b