import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const contentDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  featured: boolean
  excerpt: string
  content: string
  htmlContent: string
}

async function processMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).process(content)
  return result.toString()
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        htmlContent: "", // Will be processed when needed
        ...data,
      } as BlogPost
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const htmlContent = await processMarkdown(content)

    return {
      slug,
      content,
      htmlContent,
      ...data,
    } as BlogPost
  } catch (error) {
    return null
  }
}

export function getFeaturedPost(): BlogPost | null {
  const posts = getAllBlogPosts()
  return posts.find((post) => post.featured) || null
}

export function getRegularPosts(): BlogPost[] {
  const posts = getAllBlogPosts()
  return posts.filter((post) => !post.featured)
}
