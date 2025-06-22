import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { getAllPosts, getAllCategories } from "@/lib/blog-data"

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const featuredPost = posts[0] // Nieuwste post als featured
  const otherPosts = posts.slice(1)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img 
                  src="/mijnchatbot_logo.svg" 
                  alt="MijnChatbot.nl Logo" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              MijnChatbot Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De laatste inzichten, trends en best practices voor chatbots en AI in Nederland. 
              Praktische tips voor Nederlandse ondernemers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorieën</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="px-4 py-2 text-[#2ECC71] border-[#2ECC71]">
              Alle Artikelen ({posts.length})
            </Badge>
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="px-4 py-2 hover:bg-[#EBF4FF] transition-colors">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Nieuwste Artikel</h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gradient-to-br from-[#2ECC71] to-[#27AE60] flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <h3 className="text-2xl font-bold mb-4">Featured</h3>
                    <p className="text-lg opacity-90">Nieuwste Inzichten</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishDate).toLocaleDateString('nl-NL', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                  </div>
                  <Badge className="mb-4 bg-[#2ECC71] text-white">{featuredPost.category}</Badge>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {featuredPost.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="bg-[#2ECC71] hover:bg-[#27AE60] text-white">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Lees Verder <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Articles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Meer Artikelen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Card key={post.id} className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-[#EBF4FF] text-[#4A90E2]">{post.category}</Badge>
                    <div className="text-sm text-gray-500">{post.readTime}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#2ECC71] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-gray-600 mb-4 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString('nl-NL')}
                      </div>
                      <Button variant="ghost" size="sm" asChild className="text-[#2ECC71] hover:text-[#27AE60] hover:bg-[#EBF4FF]">
                        <Link href={`/blog/${post.slug}`}>
                          Lees meer <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Klaar om je Eigen Chatbot te Starten?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Na het lezen van deze inzichten ben je klaar om de perfecte chatbot provider voor jouw bedrijf te vinden.
          </p>
          <Button size="lg" asChild className="bg-[#2ECC71] hover:bg-[#27AE60] text-white text-lg px-8 py-4">
            <Link href="/vergelijking">
              Vergelijk Alle Providers <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}