import { Button } from "@/components/ui/button"
import { getFeaturedPost, getRegularPosts } from "@/lib/mdx-utils"
import BlogSearch from "@/components/blog-search"

export default async function BlogPage() {
  const featuredPost = getFeaturedPost()
  const regularPosts = getRegularPosts()

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Inspiration & Insights</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover tips, trends, and tales from the world of interior architecture. Our journal of design wisdom,
            sustainable living, and creative inspiration.
          </p>
        </div>
      </section>

      <BlogSearch posts={regularPosts} />

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Stay Inspired</h2>
          <p className="text-xl mb-8 opacity-90">
            Get our latest design insights, tips, and project updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:ring-2 focus:ring-white/20"
            />
            <Button size="lg" variant="secondary" className="px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
