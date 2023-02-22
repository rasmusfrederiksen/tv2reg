<template>
  <q-page class="flex column flex-center">
    <div class="text-h3 q-pa-lg">Artikelsøgning</div>
    <SearchField v-model="searchQuery" label="Søg efter artikler" class="search"/>
    <ArticleList :url="searchUrl" />
  </q-page>
</template>

<style>
  .search {
    width: 80%;
  }
</style>

<script>
  import { defineComponent } from 'vue';
  import SearchField from 'components/SearchField.vue';
  import ArticleList from 'components/ArticleList.vue';

  export default defineComponent({
    name: 'ArticleSearchPage',
    components: {
      SearchField,
      ArticleList
    },
    data() {
      return {
        searchQuery: ''
      }
    },
    computed: {
      searchUrl () {
        if (this.searchQuery.length === 0) {
          return '';
        } else {
          return `https://public.lorry.bazo.dk/v1/articles?filter[title]=${this.searchQuery}`;
        }
      }
    }
  });
</script>
