import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    date: z.date(),
    title: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string()
  })
})

export const collections = {
  blog: blogCollection
}
