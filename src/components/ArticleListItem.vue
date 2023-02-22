<template>
  <q-card flat bordered class="cursor-pointer article-card" @click="goto">
    <q-img :src="imageUrl || 'sdf'" :ratio="1">
      <template v-slot:error>
        <div class="absolute-full flex flex-center">
          Intet billede
        </div>
      </template>
    </q-img>
    <q-card-section>
      <div class="text-h6">{{ headline }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ summary }}
    </q-card-section>
  </q-card>
</template>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
  @media only screen and (max-width: 599.99px) {
    .article-card {
      width: calc(100% - 16px);
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 1439.99px) {
    .article-card {
      width: calc((100% / 2) - 16px);
    }
  }
  @media only screen and (min-width: 1440px) {
    .article-card {
      width: calc((100% / 3) - 16px);
    }
  }
</style>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'ArticleListItem',
    props: {
      id: {
        type: String,
        required: true
      },
      headline: {
        type: String,
        required: true
      },
      summary: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      media: {
        type: Object
      }
    },
    computed: {
      imageUrl () {
        let imgData = this.media.find(e => e.type === 'Image') || null;
        if (imgData) {
          imgData = imgData?.content?.image?.download_url || null;
        } else {
          imgData = this.media.find(e => e.type === 'Video') || null;
          imgData = imgData?.content?.video?.thumbnail?.download_url || null;
        }
        imgData = imgData ? `${imgData}/s/512/jpg` : null;
        return imgData;
      }
    },
    methods: {
      goto () {
        document.location = this.link;
      }
    }
  });

</script>