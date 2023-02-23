<template>
  <q-page class="flex column flex-center">
    <div class="text-h4 q-pa-lg">Artikelsøgning</div>
    <div class="flex row hundred justify-center">
      <SearchField v-model="searchQuery" label="Søg efter artikler" class="search q-mx-xs q-mb-xs"/>
      <LocationSelect v-model="location" class="q-mx-xs"/>
    </div>
    <ArticleList :url="searchUrl" />
  </q-page>
</template>

<style>
  .hundred {
    width: 100%;
  }
  .search {
    width: calc(100% - 210px);
    max-width: 400px;
    min-width: 200px;
  }
</style>

<script>
  import { defineComponent } from 'vue';
  import SearchField from 'components/SearchField.vue';
  import LocationSelect from 'components/LocationSelect.vue';
  import ArticleList from 'components/ArticleList.vue';

  const apiBaseUrl = 'https://public.lorry.bazo.dk/v1/articles';

  export default defineComponent({
    name: 'ArticleSearchPage',
    components: {
      SearchField,
      LocationSelect,
      ArticleList
    },
    data() {
      return {
        searchQuery: '',
        location: {}
      }
    },
    computed: {
      locationUUID () {
        return (this.location?.value || '');
      },
      searchUrl () {
        if (this.searchQuery.length === 0) {
          return '';
        } else {
          const articlesUrl = new URL(apiBaseUrl);
          if (this.searchQuery.length > 0) articlesUrl.searchParams.append("filter[title]", this.searchQuery);
          if (this.locationUUID.length > 0) articlesUrl.searchParams.append("filter[location_uuid]", this.locationUUID);
          return articlesUrl.href;
        }
      }
    }
  });
</script>
