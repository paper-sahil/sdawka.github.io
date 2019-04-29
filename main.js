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

// make the component
Vue.component('app-nav', {
  data: function() {
    return {
      sections: ['Main', 'Rabbit Holes', 'Books'],
    }
  },

  template: `
  <div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
  `
})

// make
Vue.component('showing-off', {
  data: function() {
    return {}
  },
  template: `
  <aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">
    Transactions
  </p>
  <ul class="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul>
</aside>
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