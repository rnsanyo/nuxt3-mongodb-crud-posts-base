import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {

  state: () => ({
    posts: {}
  }),

  actions: {
    // Get all posts.
    async getAll() {
      const { data: posts } = await useFetch(
        '/api/posts', 
        {
        transform: (_posts) => _posts.posts,
        }
      )
      return posts
    },

    // Create a new post.
    async create(data) {
      await $fetch( "/api/guides/create", { method: "POST", body: data } )
      .catch((e) => { alert(e.data.message) })
      .then(async () => {
        await this.getAllPosts(); 
        alert("Post Created")
      })
    },

    // Update a post.
    async update(id, data) {
      await $fetch(`/api/guides/${id}`, { method: "PUT", body: data })
      .catch((e) => { alert(e.data.message) })
      .then(async () => {
        await this.getAllPosts();
        alert("Post Updated")
      })
    },

    // Delete a post.
    async delete(id) {
      await $fetch(`api/guides/${id}`, { method: "DELETE" })
      .catch((e) => { alert(e.data.message) })
      .then(async () => {
        await this.getAllPosts();
        alert("Post Removed")})
    }
  }
  
})