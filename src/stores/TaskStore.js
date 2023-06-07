import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false
  }),
  getters: {
    favs() {
      return this.tasks.filter(t => t.isFav)
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },
    totalCount: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    async getTasks() {
      this.loading = true;
      const response = await fetch('http://localhost:8000/tasks')
      const data = await response.json()
      this.tasks = data
      this.loading = false

    },

    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== id
      })
    },
    toggleFav(id) {
      const task = this.tasks.find(task => task.id === id)
      task.isFav = !task.isFav
    }
  }
})