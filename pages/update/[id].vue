<template>
  <div>
    <button>
      <NuxtLink to="/"> Home </NuxtLink>
    </button>
    <h1>Update the Blog Post: {{ postsStore.posts[id].title }} </h1>
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

const id = useRoute().params.id

const postsStore = usePostsStore();

const submitForm = async (event) => {
  event.preventDefault();
  await postsStore.updatePost(id, post.value);
  post.value = { title: '', body: '' };
  return navigateTo('/')
};

</script>
