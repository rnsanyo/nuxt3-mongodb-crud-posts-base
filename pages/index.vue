<script setup>
import { usePostsStore } from '~~/stores/postsStore'

const posts = await usePostsStore().getAll()
</script>

<template>
  <div v-for="post in posts" :key=post.id>
    <h2>{{ post.title  }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>