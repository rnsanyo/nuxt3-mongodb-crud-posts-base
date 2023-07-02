import { defineStore } from 'pinia'

interface Post {
  _id: number
  title: string
  body: string
  createdAt: Date
  updatedAt: Date
}

interface PostsState {
  posts: Record<number, Post>
}

interface PostBody {
  title: string
  body: string
}

export const usePostsStore = defineStore('posts', {
  state: (): PostsState => ({
    posts: {},
  }),

  actions: {
    // Get all posts.
    async getAllPosts() {
      if (Object.keys(this.posts).length === 0) {
        const { data } = await useFetch<Post[]>('/api/posts')
        if (data.value) {
          const posts = toRaw(data.value) //toRaw() converts the proxy object to a raw data object.
          this.posts = posts.reduce((acc, post) => ({ ...acc, [post._id]: post }), {})
        }
      }
    },

    // Create a new post.
    async createPost(bodyData: PostBody) {
      const { data } = await useFetch("/api/posts/create", { method: "POST", body: bodyData })
      const newPost = toRaw(data.value) as Post
      if (newPost) {
        this.posts = { ...this.posts, [newPost._id]: newPost }
      }
    },

    // Update a post.
    async updatePost(id: number, bodyData: PostBody) {
      const { data } = await useFetch<Post>(`/api/posts/${id}`, { method: "PUT", body: bodyData })
      const newPost = toRaw(data.value)
      if (newPost) {
        this.posts = { ...this.posts, [newPost._id]: newPost }
      }
    },

    // Delete a post.
    async deletePost(id: number) {
      const { data } = await useFetch(`/api/posts/${id}`, { method: "DELETE" })
      if (data) {
        const { [id]: _, ...remainingPosts } = this.posts
        this.posts = remainingPosts
      }
    }
  }
})
