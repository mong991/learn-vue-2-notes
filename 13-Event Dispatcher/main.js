
// =================================== version 1 =======================================
window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    //fire parent event
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}



Vue.component('coupon', {

  template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,

    methods: {
      onCouponApplied() {
        Event.fire('applied');
      }
    }
});

new Vue({
  el: '#root',

  data: {
    couponApplied: false
  },

  methods: {
    onCouponApplied() {
       this.couponApplied = true;
    }
  },

  created() {
    Event.listen('applied', () => alert('Handling it!'));
  },

});

// =================================== version 2 =======================================

/*
window.Event = new Vue();

Vue.component('coupon', {

  template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,

    methods: {
      onCouponApplied() {
        //Event.$emit('applied');
        //this.$emit('applied')
        console.log('234567');
      }
    }
});

new Vue({
  el: '#root',

  data: {
    couponApplied: false
  },

  methods: {
    onCouponApplied() {
       this.couponApplied = true;
      }
  },

  created() {
    Event.$on('applied', () => alert('Handling it!'));
  },

});
*/