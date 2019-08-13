Vue.component('latest-blog-posts', {
  props: {
    count: [String, Number]
  },
  data: function() {
    return {
      posts: [],
      error: false
    }
  },
  computed: {
    numPosts: function() {
      if (typeof this.count !== Number) {
        return parseInt(this.count, 10);
      }
      return this.count;
    }
  },
  template: '' + 
    '<div class="blog-posts">' +
    '  <div class="post-content" v-for="post in posts">' +
    '    <span class="post-date">{{ post.date }}</span>: ' +
    '    <a :href="post.href">{{ post.title }}</a>' + 
    '  </div>' +
    '  <div class="error-loading" v-if="error">' + 
    '    <a href="https://convergencelabs.com/blog">The Convergence Labs Blog</a>' + 
    '  </div>' +
    '</div>',
  mounted: function() {
    var feedUrl = 'https://convergencelabs.com/feed.xml';
    // var feedUrl = 'http://localhost:8001/feed.xml';
    var _thisComponent = this;
    fetch(feedUrl)
      .then(function(response) {
        return response.text();
      })
      .then(function(xmlString) {
        return $.parseXML(xmlString);
      })
      .then(function(data) {
        $(data).find("entry").slice(0, _thisComponent.numPosts).each(function () { 
          var el = $(this);

          var post = {
            title: el.find('title').text(),
            href: el.find('id').text(),
            date: _thisComponent.formatDate(new Date(el.find('published').text()))
          };

          _thisComponent.posts.push(post);
        });
      })
      .catch(function() {
        _thisComponent.error = true;
      });
  },
  methods: {
    formatDate(date) {
      return date.toLocaleDateString();
    }
  }
});