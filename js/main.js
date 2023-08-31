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
    };
  },

  methods: {
    strikethroughText() {
      this.done == true;
      if (this.done == true) {
        this.todoList[thingToDo].text.classList.add("strikethrough-text");
      }
    },
  },
}).mount("#app");
