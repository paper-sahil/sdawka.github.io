const bookList = {
  1: {
    name: 'GEB',
    description: 'Someting about why I like this book'
  }
};

Vue.component('book-list', {
  data: function () {
    return {
      currentBook: {},
    }
  },
  methods: {
    showBook(index) {
      this.currentBook = bookList[index];
    }
  },
  mounted: function() {
    this.showBook(1);
  },
  template: `
  <div class='columns'>
    <div class='column'>{{currentBook.name}}</div>
    <div class='column is-two-thirds'> {{currentBook.description}}</div>
  </div>
  `
})


var app = new Vue({
  el: '#app',
  data: {
    pageTitle: 'Welcome to my website',
    tabs: ['Main', 'Books', 'Random Interesting', 'About'],
    currentTab: 'Main'
  },
  methods: {
    changeTab(tab) {

    },
  },

})