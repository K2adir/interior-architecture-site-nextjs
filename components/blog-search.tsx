"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User, Search } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"

interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  featured: boolean
  excerpt: string
}

interface BlogSearchProps {
  posts: BlogPost[]
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [posts, searchQuery])

  return (
    <section className="py-16 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-muted-foreground">
                Stay updated with our latest insights on interior design, sustainability, and creative living.
              </p>
            </div>

            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/blog-modern-boho-trends.png"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/blog-modern-boho-trends.png"
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white/90 text-accent text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{post.author}</span>
                    </div>

                    <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary/80 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found matching "{searchQuery}"</p>
            <Button variant="outline" onClick={() => setSearchQuery("")} className="mt-4">
              Clear Search
            </Button>
          </div>
        )}

        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
