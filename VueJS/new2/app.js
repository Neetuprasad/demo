// data object is for variables only and for functions we need to  add one called "method"
//if we want to update something that is redering to DOM, for that we se filters in main instace
//another way to update what we see on the DOM are computed methods.

const newLocal = new Vue({
  el: "#vue-app",
  data: {
    somethings: ["first", "second", "third", "forth"],
    someObjects: [{ first: "1" }, { first: "2" }, { first: "3" }],
    newValue: "",
  },
  methods: {
    addValue: function () {
      this.someObjects.push({first:this.newValue});
      this.newValue = '';
    },
  },
  filters:{
    capitalize: function(value){
      return value.toUpperCase()
    }
  },
  computed:{
    
  }
});
