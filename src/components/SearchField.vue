<template>
  <div>
    <q-input
      ref="qinput"
      standout="bg-blue-grey-6 text-white"
      v-model="searchQuery"
      :label="label" 
      @update:model-value="value => $emit('update:modelValue', value)"
      dense="dense">
      <template v-slot:append>
        <q-icon
          v-if="searchQuery !== ''"
          name="cancel"
          @click="clear"
          class="cursor-pointer" />
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'SearchField',
    data () {
      return {
        searchQuery: ''
      }
    },
    methods: {
      clear () {
        console.log('clear');
        this.searchQuery = '';
        this.$emit('update:modelValue', this.searchQuery);
        this.$refs.qinput.focus();
      }
    },
    props: {
      label: {
        type: String,
        default: 'Søgeord'
      },
    },
    emits: ['update:modelValue']
  });
</script>
