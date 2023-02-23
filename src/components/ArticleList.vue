<template>
  <div class="q-pa-md row items-start content-start q-gutter-md">
    <ArticleListItem
      v-for="article in articles"
      :id="article.uuid"
      :headline="article.title"
      :summary="article.summary"
      :link="article.canonical"
      :media="article.media"
      :key="article.uuid"
    />
    <div class="row justify-center wide" v-if="loading">
      <q-spinner
        class="q-ma-xl center"
        color="primary"
        size="4em"
        :thickness="2"
      />
    </div>
    <div class="row justify-center wide q-py-xl" v-if="hasMore && !loading">
      <q-btn
        color="primary"
        size="lg"
        icon="refresh"
        label="Hent flere"
        @click="getMoreArticles"
      />
    </div>
  </div>
</template>

<style>
  .wide {
    width: 100%;
  }
</style>

<script>
  import { defineComponent } from 'vue';
  import { debounce } from '../utils/utils';
  import ArticleListItem from 'components/ArticleListItem.vue';

  export default defineComponent({
    name: 'ArticleList',
    components: {
      ArticleListItem
    },
    props: {
      url: {
        type: String,
        default: ''
      }
    },
    watch: {
      url (newUrl, oldUrl) {
        if (newUrl !== oldUrl) {
          this.articles = [];
          this.nextPageUrl = '';
          this.loading = newUrl !== '';
          this.debouncedGetArticles(newUrl);
        }
      }
    },
    computed: {
      hasMore () {
        return this.nextPageUrl !== '';
      }
    },
    created () {
      this.getArticles = (url) => {
        if (url === '') {
          this.articles = [];
          this.nextPageUrl = '';
          this.loading = false;
          return;
        }
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.nextPageUrl = data.links.next || '';
          this.articles = this.articles.concat(data.data);
          this.loading = false;
        });
      };
      this.debouncedGetArticles = debounce(this.getArticles, 1000);
    },
    methods: {
      getMoreArticles () {
        this.loading = true;
        this.getArticles(this.nextPageUrl);
      }
    },
    data() {
      return {
        articles: [],
        nextPageUrl: '',
        loading: false
      }
    }
  });

</script>
