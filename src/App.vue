<template>
  <main>
    <!--Heading-->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Task</h1>
    </header>

    <!--filter-->
    <nav class="filter">
      <button @click="filter = 'all'">all</button>
      <button @click="filter = 'favs'">favs</button>
    </nav>

    <!--Task List-->
    <div class="task-list" v-if="filter === 'all'">
      <p>all tasks</p>
      <div v-for="task in TaskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>fav tasks</p>
      <div v-for="task in TaskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import { ref } from "vue";

export default {
  components: { TaskDetails },

  setup() {
    const TaskStore = useTaskStore();
    const filter = ref("all");

    return { TaskStore, filter };
  },
};
</script>