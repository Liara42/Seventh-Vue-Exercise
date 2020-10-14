Vue.createApp({
  data() {
    return {
      enteredClass: '',
      display: true,
      inputColor: '',
    };
  },
  computed: {
    displayClass() {
      if (this.display) {
        return 'visible';
      }
      return 'hidden';
    },
  },
  methods: {
    setClass(event) {
      this.enteredClass = event.target.value;
    },
    displayEl() {
      this.display = !this.display;
    },
    setColor(event) {
      this.inputColor = event.target.value;
    },
  },
}).mount('#assignment');
