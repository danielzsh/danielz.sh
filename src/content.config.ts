import { z, defineCollection } from 'astro:content'
import { notionLoader } from 'notion-astro-loader'
import { notionPageSchema } from 'notion-astro-loader'
import * as propertySchema from 'notion-astro-loader/schemas/raw-properties'
import * as transformedPropertySchema from 'notion-astro-loader/schemas/transformed-properties'
import { glob } from 'astro/loaders'

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    date: z.date(),
    title: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string()
  })
})

const notion = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    database_id: import.meta.env.NOTION_DATABASE_ID
    // Use Notion sorting and filtering
    // filter: {
    //   property: 'Hidden',
    //   checkbox: { equals: false }
    // }
  }),
  schema: notionPageSchema({
    properties: z.object({
      // Converts to a primitive string
      Name: transformedPropertySchema.title,
      // Converts to a Notion API created_time object
      Created: propertySchema.created_time.optional()
    })
  })
})

export const collections = {
  blog: blogCollection,
  notion
}
