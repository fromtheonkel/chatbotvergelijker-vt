import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, ArrowLeft, User, Share2 } from "lucide-react"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 2)

  // Convert markdown-style content to HTML-ish JSX
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold text-gray-900 mt-12 mb-6">{line.slice(2)}</h1>
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-bold text-gray-900 mt-10 mb-4">{line.slice(3)}</h2>
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-semibold text-gray-900 mt-8 mb-3">{line.slice(4)}</h3>
      }
      
      // Bold text
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-bold text-lg text-gray-900 mt-6 mb-3">{line.slice(2, -2)}</p>
      }
      
      // Lists
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.*?)\*\*:? ?(.*)/);
        if (match) {
          return (
            <li key={index} className="ml-4 mb-2">
              <strong className="text-[#2ECC71]">{match[1]}:</strong> {match[2]}
            </li>
          )
        }
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 mb-1 text-gray-700">{line.slice(2)}</li>
      }
      
      // Quotes or special formatting
      if (line.startsWith('> ')) {
        return <blockquote key={index} className="border-l-4 border-[#2ECC71] pl-4 my-4 text-gray-600 italic">{line.slice(2)}</blockquote>
      }
      
      // Regular paragraphs
      if (line.trim() && !line.startsWith('#') && !line.startsWith('-') && !line.startsWith('**')) {
        return <p key={index} className="text-gray-700 leading-relaxed mb-4">{line}</p>
      }
      
      // Empty line for spacing
      if (!line.trim()) {
        return <div key={index} className="h-4"></div>
      }
      
      return null
    }).filter(Boolean)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="/mijnchatbot_logo.svg" 
                alt="MijnChatbot.nl Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <div className="text-gray-400">›</div>
            <Link href="/blog" className="text-[#2ECC71] hover:text-[#27AE60] font-medium">
              Blog
            </Link>
            <div className="text-gray-400">›</div>
            <span className="text-gray-600 text-sm">{post.title.slice(0, 50)}...</span>
          </div>
          
          <Button variant="ghost" asChild className="text-[#4A90E2] hover:text-[#2ECC71] mb-4">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar Blog
            </Link>
          </Button>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-6 bg-[#2ECC71] text-white text-sm px-3 py-1">
            {post.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishDate).toLocaleDateString('nl-NL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} leestijd
            </div>
            <Button variant="ghost" size="sm" className="text-[#4A90E2] hover:text-[#2ECC71]">
              <Share2 className="w-4 h-4 mr-2" />
              Delen
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-lg leading-relaxed space-y-6">
            {renderContent(post.content)}
          </div>
        </div>

        {/* CTA Section in Article */}
        <div className="my-16 p-8 bg-gradient-to-r from-[#EBF4FF] to-[#D5EDDB] rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Compare Chatbot Providers?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Gebruik onze interactieve vergelijking om de perfecte chatbot provider voor jouw Nederlandse bedrijf te vinden.
          </p>
          <Button size="lg" asChild className="bg-[#2ECC71] hover:bg-[#27AE60] text-white">
            <Link href="/vergelijking">
              Start Vergelijking <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Gerelateerde Artikelen
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <Badge className="mb-2 bg-[#EBF4FF] text-[#4A90E2] w-fit">
                      {relatedPost.category}
                    </Badge>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#2ECC71] transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(relatedPost.publishDate).toLocaleDateString('nl-NL')}
                      </div>
                      <Button variant="ghost" size="sm" asChild className="text-[#2ECC71] hover:text-[#27AE60]">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Lees meer <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const { blogPosts } = await import('@/lib/blog-data')
  
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}