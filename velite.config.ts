import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const projects = defineCollection({
    name: "Project",
    pattern: "projects/**/*.mdx",
    schema: s
        .object({
            slug: s.path(),
            title: s.string().max(99),
            description: s.string().max(999).optional(),
            date: s.isodate(),
            published: s.boolean().default(true),
            cover: s.image().optional(),
            video: s.string().optional(),
            tags: s.array(s.string()).default([]),
            repository: s.string().url().optional(),
            demo: s.string().url().optional(),

            // Technical Case Study specific fields
            context: s.string().optional(),
            stack: s.array(s.string()).default([]),
            role: s.string().optional(), // e.g. "Full Stack Developer"

            // Metadata for quick look
            featured: s.boolean().default(false),

            body: s.mdx(),
        })
        .transform(computedFields),
});

export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true,
    },
    collections: { projects },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    },
});
