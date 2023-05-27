<template>
  <main>
    <!--Heading-->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Task</h1>
    </header>
    <!--Task List-->
    <div class="task-list">
      <div v-for="task in TaskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";

export default {
  components: { TaskDetails },

  setup() {
    const TaskStore = useTaskStore();
    return { TaskStore };
  },
};
</script>