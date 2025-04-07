"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  Tag,
  Filter,
  Bookmark,
  BookmarkCheck,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealCard } from "@/components/ui/reveal-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import components that use browser APIs with no SSR
const DynamicParticleBackground = dynamic(
  () =>
    import("@/components/ui/particle-background").then(
      (mod) => mod.ParticleBackground
    ),
  { ssr: false }
);

// Sample blog post data
const articlesPosts = [
  {
    id: "1",
    title: "Building Responsive Web Applications with Next.js and Tailwind",
    excerpt:
      "Learn how to create beautiful, responsive web applications using Next.js and Tailwind CSS with best practices for performance and accessibility.",
    date: "April 10, 2025",
    readTime: "8 min read",
    category: "Development",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
    views: 1240,
    bookmarked: true,
  },
  {
    id: "2",
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how artificial intelligence is transforming the landscape of web development, from code generation to user experience optimization.",
    date: "March 28, 2025",
    readTime: "12 min read",
    category: "AI",
    tags: ["Artificial Intelligence", "Web Development", "Future Tech"],
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
    views: 2180,
    bookmarked: false,
  },
  {
    id: "3",
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt:
      "Dive deep into advanced React optimization techniques that can significantly improve your application's performance and user experience.",
    date: "March 15, 2025",
    readTime: "10 min read",
    category: "Development",
    tags: ["React", "Performance", "Optimization"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    views: 980,
    bookmarked: true,
  },
  {
    id: "4",
    title: "Building a Blockchain Application from Scratch",
    excerpt:
      "A comprehensive guide to building your first blockchain application, covering everything from basic concepts to implementation details.",
    date: "February 22, 2025",
    readTime: "15 min read",
    category: "Blockchain",
    tags: ["Blockchain", "Ethereum", "Web3"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    views: 1560,
    bookmarked: false,
  },
  {
    id: "5",
    title: "Mastering TypeScript: Tips and Tricks",
    excerpt:
      "Discover advanced TypeScript features and patterns that will help you write more maintainable and type-safe code in your projects.",
    date: "February 10, 2025",
    readTime: "9 min read",
    category: "Development",
    tags: ["TypeScript", "JavaScript", "Type Safety"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    views: 1120,
    bookmarked: false,
  },
  {
    id: "6",
    title: "The Complete Guide to Modern CSS Techniques",
    excerpt:
      "Explore the latest CSS features and techniques that are transforming how we style web applications in 2025.",
    date: "January 28, 2025",
    readTime: "11 min read",
    category: "Design",
    tags: ["CSS", "Web Design", "Frontend"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    views: 890,
    bookmarked: true,
  },
];

// Get all unique categories
const allCategories = [
  "All",
  ...new Set(articlesPosts.map((post) => post.category)),
];

export default function ArticlePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [bookmarkedPosts, setBookmarkedPosts] = useState<string[]>(
    articlesPosts.filter((post) => post.bookmarked).map((post) => post.id)
  );

  // Filter posts based on search query and active category
  const filteredPosts = articlesPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Featured posts
  const featuredPosts = articlesPosts.filter((post) => post.featured);

  // Toggle bookmark status
  const toggleBookmark = (postId: string) => {
    setBookmarkedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-12 md:space-y-16 pb-12">
      {/* Particle Background */}
      <DynamicParticleBackground />

      {/* Hero Section */}
      <section className="relative z-10 py-6">
        {/* Background grid pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Glowing orb effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl opacity-20"></div>

        <div className="relative space-y-4 md:space-y-6 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs md:text-sm">
              Articles
            </Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Insights &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Thoughts
              </span>
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-muted-foreground max-w-2xl">
              Exploring the latest in technology, development, and design
              through in-depth articles and tutorials.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-background/50 border-border/40"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="text-xs md:text-sm border-primary/20 bg-primary/5 hover:bg-primary/10"
              >
                <Filter className="mr-2 h-3 w-3 md:h-4 md:w-4" /> Filter
              </Button>
              <Button
                size="sm"
                className="text-xs md:text-sm bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Latest Posts{" "}
                <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Featured Posts
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post, index) => (
            <ScrollReveal key={post.id} width="100%" delay={index * 0.1}>
              <Link href={`/article/${post.id}`} className="block h-full">
                <div className="group relative h-full overflow-hidden rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-primary/10 to-secondary/10 object-cover transition-transform duration-500 group-hover:scale-105">
                      <div className="flex h-full items-center justify-center text-muted-foreground">
                        Featured Image
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {post.category}
                      </Badge>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs bg-secondary/10 text-secondary border-secondary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Eye className="mr-1 h-3 w-3" />
                          {post.views}
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleBookmark(post.id);
                          }}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {bookmarkedPosts.includes(post.id) ? (
                            <BookmarkCheck className="h-4 w-4 text-primary" />
                          ) : (
                            <Bookmark className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* All Posts Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              All Posts
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {filteredPosts.length} posts
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal width="100%">
          <Tabs
            defaultValue="All"
            className="w-full"
            onValueChange={setActiveCategory}
          >
            <TabsList className="bg-background/50 border border-border/40 p-1 overflow-x-auto flex w-full justify-start max-w-full">
              {allCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs md:text-sm data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </ScrollReveal>

        {/* Article Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {filteredPosts.map((post, index) => (
            <ScrollReveal key={post.id} width="100%" delay={index * 0.05}>
              <RevealCard color="#0f1729" radius={400} className="h-full">
                <div className="relative flex flex-1 flex-col justify-between gap-3 h-full">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="space-y-2 flex-grow">
                    <Link href={`/article/${post.id}`} className="block group">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs bg-secondary/10 text-secondary border-secondary/20"
                        >
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 mt-auto">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views}
                      </div>
                      <button
                        onClick={() => toggleBookmark(post.id)}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {bookmarkedPosts.includes(post.id) ? (
                          <BookmarkCheck className="h-4 w-4 text-primary" />
                        ) : (
                          <Bookmark className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </RevealCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">No posts found</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              We couldn&apos;t find any posts matching your search criteria. Try
              adjusting your filters or search query.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="flex justify-center pt-4">
            <Button
              variant="outline"
              className="border-primary/20 bg-primary/5 hover:bg-primary/10"
            >
              Load More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-8 md:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Subscribe to my newsletter to receive the latest articles,
                tutorials, and insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-background/50 border-border/40"
                />
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                I respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
