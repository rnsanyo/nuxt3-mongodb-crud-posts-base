<template>
  <div>
    <button>
      <NuxtLink to="/"> Home </NuxtLink>
    </button>
    <h1>Create a New Blog Post</h1>
    <form @submit="submitForm">
      <div>
        <label for="title">Title:</label>
        <input id="title" v-model="post.title" required />
      </div>
      <div>
        <label for="body">Body:</label>
        <textarea id="body" v-model="post.body" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePostsStore } from '~~/stores/postsStore'

const post = ref({
  title: '',
  body: '',
});

const postsStore = usePostsStore();

const submitForm = async (event) => {
  event.preventDefault();
  await postsStore.createPost(post.value);
  post.value = { title: '', body: '' };
  return navigateTo('/')
};

</script>
