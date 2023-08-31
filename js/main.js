const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Vue TodoList",
      todoList: [
        {
          text: "Capire qualcosa di vue",
          done: false,
        },
        {
          text: "Non fare l'una di notte",
          done: false,
        },
        {
          text: "Andare in palestra",
          done: false,
        },
      ],
      newThingToDo: "",
    };
  },

  methods: {
    done(index) {
      this.todoList[index].done = true;
    },

    deleteTask(index) {
      this.todoList.splice(index, 1);
    },

    addNewThingToDo() {
      this.todoList.unshift(this.newThingToDo);

      this.newThingToDo = "";
    },
  },
}).mount("#app");
