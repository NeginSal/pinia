<template>
  <main>
    <!--Heading-->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Task</h1>
    </header>
    <!--Task List-->
    <div>
      <div v-for="task in TaskStore.tasks" :key="task.id">
        <p>{{ task.title }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";

export default {
  setup() {
    const TaskStore = useTaskStore();
    return { TaskStore };
  },
};
</script>