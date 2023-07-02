<script setup>
import { usePostsStore } from '~~/stores/postsStore'

await usePostsStore().getAllPosts()
const posts = usePostsStore().posts

</script>

<template>
  <div class="header">
    <h1>Posts</h1>
    <button>
      <NuxtLink to="/createPost"> Create Post </NuxtLink>
    </button>
  </div>
  <div v-for="post in posts" :key=post._id>
    <h2>{{ post.title  }}</h2>
    <p>{{ post.body }}</p>
    <button>
      <NuxtLink :to="'/update/'+ post._id"> Update Post </NuxtLink>
    </button>
  </div>
</template>