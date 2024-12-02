import { z, defineCollection } from 'astro:content'
import { notionLoader } from 'notion-astro-loader'
import {
  notionPageSchema,
  propertySchema,
  transformedPropertySchema
} from 'notion-astro-loader/schemas'

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
      Name: propertySchema.title.transform((prop) => prop.title[0].text.content),
      // Converts to a Notion API created_time object
      Date: propertySchema.date
    })
  })
})

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
  blog: blogCollection,
  notion
}
