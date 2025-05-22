// src/content/config.ts
import { file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

// Isolated Heading Schema – allows a string, an object, or an array of these.
export const headingSchema = z.union([
  z.string(),
  z.object({
    text: z.string(),
    class: z.string().optional(),
    tagName: z.string().optional(),
  }),
  z.array(
    z.union([
      z.string(),
      z.object({
        text: z.string(),
        class: z.string().optional(),
        tagName: z.string().optional(),
      }),
    ])
  ),
]);

// Isolated Description Schema – allows either a string or an object (no arrays)
export const descriptionSchema = z.union([
  z.string(),
  z.object({
    text: z.string(),
    class: z.string().optional(),
  }),
]);

const buttonSchema = z.object({
  text: z.string().optional(),
  class: z.string().optional(),
  link: z.string().optional(),
  variant: z.enum(["primary", "secondary", "underline"]).optional(),
});

const sectionSchema = z.object({
  collection: z.string().optional(),
  query: z.string().optional(),
  variant: z.string().optional(),
  component: z.union([z.function(), z.string()]).optional(),
  heading: headingSchema.optional(),
  description: descriptionSchema.optional(),
  descriptionClass: z.string().optional(),
  buttons: z.array(buttonSchema).optional(),
  buttonsSectionClass: z.string().optional(),
  sectionClass: z.string().optional(),
  itemsClass: z.string().optional(),
  itemClass: z.string().optional(),
  contentClass: z.string().optional(),
  headingAreaClass: z.string().optional(),
  topContentClass: z.string().optional(),
  itemPlacement: z.union([z.string(), z.array(z.string())]).optional(),
  childPlacement: z.union([z.string(), z.array(z.string())]).optional(),
  buttonsPlacement: z.union([z.string(), z.array(z.string())]).optional(),
  childSlotClass: z.string().optional(),
  client: z.enum(["load", "idle", "visible"]).optional(),
});

export const QueryItemSchema = z.object({
  id: z.string(),
  label: z.string().optional(),
  slug: z.string().optional(),
  position: z.enum(["prepend", "append"]).optional(),
  parent: z.string().nullable().optional(),
  weight: z.number().optional(),
  respectHierarchy: z.boolean().default(false),
});

export const metaSchema = z.object({
  heading: headingSchema.optional(),
  description: descriptionSchema.optional(),
  layout: z.string().optional(),
  itemsLayout: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  robots: z.string().optional(),
  ogType: z.string().optional(),
  hasPage: z.boolean().default(true),
  itemsHasPage: z.boolean().default(true),
  defaultSection: sectionSchema.optional(),
  sections: z.array(sectionSchema).optional(),
  itemsSections: z.array(sectionSchema).optional(),
  addToQuery: z.array(QueryItemSchema).optional(),
  addItemsToQuery: z.array(QueryItemSchema).optional(),
});

const baseSchema = ({ image }: { image: Function }) =>
  z.object({
    title: z.string(),
    featuredImage: image().optional(),
    heading: headingSchema.optional(),
    description: descriptionSchema.optional(),
    layout: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    robots: z.string().optional(),
    ogType: z.string().optional(),
    hasPage: z.boolean().optional(),
    sections: z.array(sectionSchema).optional(),
    addToQuery: z.array(QueryItemSchema).optional(),
    tags: z.array(z.string()).optional(),
    icon: image().optional(),
    heroMedia: z
      .object({
        image: image().optional(),
        video: z.string().optional(),
      })
      .optional(),
  });

export const collections = {
  services: defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        form: z.string().optional(),
        parent: z
          .union([reference("services"), z.array(reference("services"))])
          .optional(),
      }),
  }),
  projects: defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        beforeImage: image().optional(),
        afterImage: image().optional(),
        services: z
          .union([reference("services"), z.array(reference("services"))])
          .optional(),
        testimonials: z
          .union([
            reference("testimonials"),
            z.array(reference("testimonials")),
          ])
          .optional(),
      }),
  }),
   gallery: defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        beforeImage: image().optional(),
        afterImage: image().optional(),
        services: z
          .union([reference("services"), z.array(reference("services"))])
          .optional(),
      }),
  }),
  testimonials: defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        video: z.string().optional(),
        services: z
          .union([reference("services"), z.array(reference("services"))])
          .optional(),
      }),
  }),
  faq: defineCollection({
    loader: file("src/content/faq/faqs.json"), // file-loaded collection
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        services: z
          .union([reference("services"), z.array(reference("services"))])
          .optional(),
      }),
  }),
  benefits: defineCollection({
    loader: file("src/content/benefits/benefits.json"), // file-loaded collection
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        services: z
          .union([reference("services"), z.array(reference("services"))])
          .optional(),
      }),
  }),
  team: defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        role: z.string().optional(),
      }),
  }),
  values: defineCollection({
    loader: file("src/content/values/values.json"), // file-loaded collection
    schema: ({ image }) => baseSchema({ image }),
  }),
  types: defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        services: z
          .union([reference("services"), z.array(reference("services"))])
          .optional(),
      }),
  }),
  serviceAreas: defineCollection({
    loader: file("src/content/serviceAreas/serviceAreas.json"), // file-loaded collection
    schema: ({ image }) => baseSchema({ image }),
  }),
};
