<template>
  <q-page class="flex column flex-center">
    <div class="text-h3 q-pa-lg">Artikelsøgning</div>
    <div class="flex row hundred justify-center">
      <SearchField v-model="searchQuery" label="Søg efter artikler" class="search q-pr-sm"/>
      <LocationSelect v-model="location"/>
    </div>
    <ArticleList :url="searchUrl" />
  </q-page>
</template>

<style>
  .hundred {
    width: 100%;
  }
  .search {
    width: calc(100% - 120px);
    max-width: 400px;
  }
</style>

<script>
  import { defineComponent } from 'vue';
  import SearchField from 'components/SearchField.vue';
  import LocationSelect from 'components/LocationSelect.vue';
  import ArticleList from 'components/ArticleList.vue';

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
      locationFilterString () {
        let uuid = (this.location?.value || '');
        return `${uuid.length > 0 ? 'filter[location_uuid]=' : ''}${uuid}`;
      },
      searchFilterString () {
        return `${this.searchQuery.length > 0 ? 'filter[title]=' : ''}${this.searchQuery}`;
      },
      filters () {
        return `?${this.locationFilterString}&${this.searchFilterString}`
      },
      searchUrl () {
        if (this.searchQuery.length === 0) {
          return '';
        } else {
          return `https://public.lorry.bazo.dk/v1/articles${this.filters}`;
        }
      }
    }
  });
</script>
