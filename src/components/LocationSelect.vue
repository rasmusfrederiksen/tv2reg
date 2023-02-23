<template>
  <div>
    <q-select
      class="selectwide"
      standout="bg-blue-grey-6 text-white"
      v-model="location"
      :options="locations"
      label="Område"
      dense="dense"
      @update:model-value="value => $emit('update:modelValue', value)"
    />
  </div>
</template>

<style>
  .selectwide {
    min-width: 100px;
  }
</style>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'LocationSelect',
    data () {
      return {
        locations: [
          {
            label: 'Alle',
            value: ''
          }
        ],
        location: {
          label: 'Alle',
          value: ''
        }
      }
    },
    created () {
      fetch('https://public.lorry.bazo.dk/v1/taxonomies/locations')
      .then((response) => response.json())
      .then((data) => {
        let p = data.data.map(e => ({ label: e.name, value: e.uuid }));
        this.locations = this.locations.concat(p);
      });
    },
    emits: ['update:modelValue']
  });
</script>
