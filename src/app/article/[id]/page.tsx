"use client";

import { Input } from "@/components/ui/input";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Bookmark,
  BookmarkCheck,
  Share2,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

// Dynamically import components that use browser APIs with no SSR
const DynamicParticleBackground = dynamic(
  () =>
    import("@/components/ui/particle-background").then(
      (mod) => mod.ParticleBackground
    ),
  { ssr: false }
);

// Sample blog post data
const blogPosts = [
  {
    id: "1",
    title: "Building Responsive Web Applications with Next.js and Tailwind",
    excerpt:
      "Learn how to create beautiful, responsive web applications using Next.js and Tailwind CSS with best practices for performance and accessibility.",
    content: `
      <p>In the ever-evolving landscape of web development, creating responsive applications that work seamlessly across devices is no longer optional—it's essential. Next.js and Tailwind CSS have emerged as powerful tools in a developer's arsenal to achieve this goal efficiently.</p>
      
      <h2>Why Next.js?</h2>
      
      <p>Next.js, built on top of React, provides a robust framework for creating modern web applications. Its key features include:</p>
      
      <ul>
        <li>Server-side rendering and static site generation for improved performance and SEO</li>
        <li>Automatic code splitting for faster page loads</li>
        <li>Built-in routing system that simplifies navigation</li>
        <li>API routes for building backend functionality within the same project</li>
      </ul>
      
      <p>These features make Next.js an excellent choice for building responsive applications that need to perform well across all devices.</p>
      
      <h2>The Power of Tailwind CSS</h2>
      
      <p>Tailwind CSS takes a utility-first approach to styling, providing low-level utility classes that let you build completely custom designs without leaving your HTML. This approach offers several advantages:</p>
      
      <ul>
        <li>Rapid development with predefined utility classes</li>
        <li>Consistent design system with customizable themes</li>
        <li>Smaller CSS bundle sizes in production with PurgeCSS</li>
        <li>Responsive design utilities built-in</li>
      </ul>
      
      <h2>Building Responsive Layouts</h2>
      
      <p>One of Tailwind's strengths is its intuitive approach to responsive design. Instead of creating separate stylesheets or complex media queries, you can use responsive prefixes directly in your HTML:</p>
      
      <pre><code>
      &lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;
        Responsive content that adapts to different screen sizes
      &lt;/div&gt;
      </code></pre>
      
      <p>This code creates an element that takes full width on mobile devices, half width on medium screens, and one-third width on large screens.</p>
      
      <h2>Performance Optimization</h2>
      
      <p>When building responsive applications, performance is crucial, especially on mobile devices with limited resources. Next.js and Tailwind CSS both offer features to optimize performance:</p>
      
      <h3>Next.js Performance Features:</h3>
      
      <ul>
        <li>Image Optimization with next/image</li>
        <li>Automatic code splitting</li>
        <li>Server-side rendering for faster initial load</li>
      </ul>
      
      <h3>Tailwind Optimization:</h3>
      
      <ul>
        <li>PurgeCSS integration to remove unused styles</li>
        <li>JIT mode for faster development and smaller CSS files</li>
      </ul>
      
      <h2>Accessibility Considerations</h2>
      
      <p>A truly responsive application must also be accessible to all users. Here are some best practices to ensure your Next.js and Tailwind applications are accessible:</p>
      
      <ul>
        <li>Use semantic HTML elements</li>
        <li>Ensure sufficient color contrast (Tailwind provides accessible color palettes)</li>
        <li>Add appropriate ARIA attributes when necessary</li>
        <li>Test with screen readers and keyboard navigation</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Next.js and Tailwind CSS form a powerful combination for building responsive web applications. Next.js provides the performance and structural benefits, while Tailwind offers the flexibility and efficiency needed for responsive styling. By leveraging these tools together, developers can create fast, beautiful, and accessible web experiences that work well on any device.</p>
    `,
    date: "April 10, 2025",
    readTime: "8 min read",
    category: "Development",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "Web Development",
      "Frontend",
    ],
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
    views: 1240,
    bookmarked: true,
    author: {
      name: "Zyron Ho",
      role: "Full-Stack Developer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    relatedPosts: ["2", "3", "5"],
  },
  {
    id: "2",
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how artificial intelligence is transforming the landscape of web development, from code generation to user experience optimization.",
    content: `
      <p>Artificial Intelligence is rapidly transforming the field of web development, introducing new capabilities and efficiencies that were once thought impossible. From automated code generation to personalized user experiences, AI is reshaping how we build and interact with web applications.</p>
      
      <h2>AI-Powered Code Generation</h2>
      
      <p>One of the most significant impacts of AI on web development is in code generation. Tools like GitHub Copilot and similar AI assistants can now:</p>
      
      <ul>
        <li>Generate code snippets based on natural language descriptions</li>
        <li>Complete code patterns based on context</li>
        <li>Suggest optimizations and identify potential bugs</li>
        <li>Translate between programming languages</li>
      </ul>
      
      <p>These capabilities are dramatically increasing developer productivity and lowering the barrier to entry for new developers.</p>
      
      <h2>Personalized User Experiences</h2>
      
      <p>AI is enabling a new level of personalization in web applications:</p>
      
      <ul>
        <li>Content recommendation systems that learn user preferences</li>
        <li>Dynamic UI adjustments based on user behavior</li>
        <li>Predictive features that anticipate user needs</li>
        <li>Chatbots and virtual assistants that provide contextual help</li>
      </ul>
      
      <p>These personalized experiences lead to higher engagement, conversion rates, and user satisfaction.</p>
      
      <h2>Automated Testing and Quality Assurance</h2>
      
      <p>AI is revolutionizing how we test and ensure the quality of web applications:</p>
      
      <ul>
        <li>Automated visual regression testing</li>
        <li>Intelligent test generation based on application behavior</li>
        <li>Anomaly detection in application performance</li>
        <li>Accessibility compliance checking</li>
      </ul>
      
      <p>These AI-powered testing approaches can identify issues that might be missed by traditional testing methods and significantly reduce the time required for quality assurance.</p>
      
      <h2>Design Automation</h2>
      
      <p>AI is also making inroads into the design aspect of web development:</p>
      
      <ul>
        <li>Generating design variations based on brand guidelines</li>
        <li>Creating responsive layouts automatically</li>
        <li>Optimizing designs for conversion and engagement</li>
        <li>Generating images and graphics based on descriptions</li>
      </ul>
      
      <p>These capabilities are streamlining the design process and enabling more rapid iteration.</p>
      
      <h2>Challenges and Ethical Considerations</h2>
      
      <p>Despite its benefits, the integration of AI into web development raises important challenges:</p>
      
      <ul>
        <li>Ensuring AI-generated code is secure and efficient</li>
        <li>Addressing bias in AI algorithms</li>
        <li>Maintaining privacy in personalized experiences</li>
        <li>Balancing automation with human creativity and oversight</li>
      </ul>
      
      <p>Responsible implementation of AI in web development requires careful consideration of these issues.</p>
      
      <h2>The Future Landscape</h2>
      
      <p>Looking ahead, we can expect AI to become even more deeply integrated into the web development process:</p>
      
      <ul>
        <li>Full-stack AI assistants that can build entire applications from specifications</li>
        <li>Real-time optimization of web applications based on user behavior</li>
        <li>Advanced natural language interfaces for interacting with web services</li>
        <li>Autonomous maintenance and updating of web applications</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>AI is not replacing web developers but rather augmenting their capabilities and changing the nature of their work. The most successful developers will be those who learn to effectively collaborate with AI tools, focusing their human creativity and problem-solving skills on higher-level challenges while leveraging AI for routine tasks and optimization. The future of web development is a partnership between human ingenuity and artificial intelligence.</p>
    `,
    date: "March 28, 2025",
    readTime: "12 min read",
    category: "AI",
    tags: [
      "Artificial Intelligence",
      "Web Development",
      "Future Tech",
      "Machine Learning",
      "Automation",
    ],
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
    views: 2180,
    bookmarked: false,
    author: {
      name: "Zyron Ho",
      role: "Full-Stack Developer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    relatedPosts: ["1", "4", "5"],
  },
  {
    id: "3",
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt:
      "Dive deep into advanced React optimization techniques that can significantly improve your application's performance and user experience.",
    content: `
      <p>React has become the library of choice for building modern user interfaces, but with great power comes great responsibility. As applications grow in complexity, performance optimization becomes increasingly important. This article explores advanced techniques to ensure your React applications remain fast and responsive.</p>
      
      <h2>Understanding React's Rendering Process</h2>
      
      <p>Before diving into optimization techniques, it's crucial to understand how React renders components:</p>
      
      <ol>
        <li>State or props change, triggering a render</li>
        <li>React creates a virtual DOM representation</li>
        <li>React compares the new virtual DOM with the previous one (diffing)</li>
        <li>Only the necessary changes are applied to the actual DOM</li>
      </ol>
      
      <p>Many performance issues stem from unnecessary renders or inefficient diffing operations.</p>
      
      <h2>Memoization Techniques</h2>
      
      <h3>React.memo for Component Memoization</h3>
      
      <p>React.memo is a higher-order component that memoizes your component, preventing re-renders if props haven't changed:</p>
      
      <pre><code>
      const MyComponent = React.memo(function MyComponent(props) {
        // Your component logic
      });
      </code></pre>
      
      <p>For more complex prop comparisons, you can provide a custom comparison function:</p>
      
      <pre><code>
      const MyComponent = React.memo(
        function MyComponent(props) {
          // Your component logic
        },
        (prevProps, nextProps) => {
          // Return true if passing nextProps to render would return
          // the same result as passing prevProps to render,
          // otherwise return false
        }
      );
      </code></pre>
      
      <h3>useMemo for Value Memoization</h3>
      
      <p>The useMemo hook memoizes computed values, recalculating them only when dependencies change:</p>
      
      <pre><code>
      const memoizedValue = useMemo(() => {
        return computeExpensiveValue(a, b);
      }, [a, b]);
      </code></pre>
      
      <h3>useCallback for Function Memoization</h3>
      
      <p>The useCallback hook returns a memoized version of a callback function that only changes if one of the dependencies has changed:</p>
      
      <pre><code>
      const memoizedCallback = useCallback(() => {
        doSomething(a, b);
      }, [a, b]);
      </code></pre>
      
      <h2>Virtualization for Long Lists</h2>
      
      <p>When rendering long lists, virtualization can dramatically improve performance by only rendering items currently visible in the viewport:</p>
      
      <pre><code>
      import { FixedSizeList } from 'react-window';
      
      const Row = ({ index, style }) => (
        &lt;div style={style}&gt;Item {index}&lt;/div&gt;
      );
      
      const Example = () => (
        &lt;FixedSizeList
          height={500}
          width={500}
          itemSize={35}
          itemCount={10000}
          &gt;
          {Row}
        &lt;/FixedSizeList&gt;
      );
      </code></pre>
      
      <h2>Code Splitting and Lazy Loading</h2>
      
      <p>React.lazy and Suspense allow you to split your code into smaller chunks and load components only when needed:</p>
      
      <pre><code>
      const OtherComponent = React.lazy(() => import('./OtherComponent'));
      
      function MyComponent() {
        return (
          &lt;React.Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
            &lt;OtherComponent /&gt;
          &lt;/React.Suspense&gt;
        );
      }
      </code></pre>
      
      <h2>State Management Optimization</h2>
      
      <h3>Using Reducers for Complex State</h3>
      
      <p>For complex state logic, useReducer can be more efficient than multiple useState calls:</p>
      
      <pre><code>
      const [state, dispatch] = useReducer(reducer, initialState);
      </code></pre>
      
      <h3>Context Optimization</h3>
      
      <p>When using Context, split your contexts by purpose and frequency of updates to prevent unnecessary re-renders:</p>
      
      <pre><code>
      // Frequently changing values
      const ThemeContext = React.createContext();
      
      // Rarely changing values
      const UserContext = React.createContext();
      </code></pre>
      
      <h2>Web Worker Offloading</h2>
      
      <p>For CPU-intensive operations, consider offloading work to Web Workers to keep the main thread responsive:</p>
      
      <pre><code>
      // In your component
      const [result, setResult] = useState(null);
      
      useEffect(() => {
        const worker = new Worker('./worker.js');
        worker.postMessage({ data: complexData });
        worker.onmessage = (e) => {
          setResult(e.data);
          worker.terminate();
        };
      }, [complexData]);
      </code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Optimizing React performance is a continuous process that requires understanding both React's internals and your application's specific needs. By applying these advanced techniques judiciously, you can ensure your React applications remain fast and responsive even as they grow in complexity. Remember that premature optimization can lead to more complex, harder-to-maintain code, so always measure performance before and after optimization to ensure your changes are having the desired effect.</p>
    `,
    date: "March 15, 2025",
    readTime: "10 min read",
    category: "Development",
    tags: ["React", "Performance", "Optimization", "JavaScript", "Frontend"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    views: 980,
    bookmarked: true,
    author: {
      name: "Zyron Ho",
      role: "Full-Stack Developer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    relatedPosts: ["1", "5", "6"],
  },
];

// Get post by ID
const getPostById = (id: string) => {
  return blogPosts.find((post) => post.id === id) || null;
};

// Get related posts
const getRelatedPosts = (postIds: string[]) => {
  return blogPosts.filter((post) => postIds.includes(post.id));
};

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post, setPost] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const postId = Array.isArray(params.id) ? params.id[0] : params.id;
      const currentPost = getPostById(postId);

      if (currentPost) {
        setPost(currentPost);
        setIsBookmarked(currentPost.bookmarked);

        if (currentPost.relatedPosts) {
          setRelatedPosts(getRelatedPosts(currentPost.relatedPosts));
        }
      }
    }

    setIsLoading(false);
  }, [params.id]);

  // Toggle bookmark
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  // If post not found
  if (!isLoading && !post) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The article you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Button asChild>
          <Link href="/article">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
          </Link>
        </Button>
      </div>
    );
  }

  if (isLoading || !post) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-pulse space-y-8 w-full max-w-3xl">
          <div className="h-8 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/4"></div>
          <div className="h-64 bg-muted rounded"></div>
          <div className="space-y-4">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Particle Background */}
      <DynamicParticleBackground />

      {/* Back Button */}
      <div className="pt-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto">
        <header className="space-y-4 md:space-y-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs md:text-sm mb-4">
              {post.category}
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {post.author.name}
                </p>
                <p className="text-xs">{post.author.role}</p>
              </div>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {post.date}
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center">
              <Eye className="mr-1 h-4 w-4" />
              {post.views} views
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 pt-2"
          >
            {post.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4"
          >
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/40">
              <div className="h-full w-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-muted-foreground">
                Featured Image
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-between items-center pt-4"
          >
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-primary/20 bg-primary/5 hover:bg-primary/10"
                onClick={toggleBookmark}
              >
                {isBookmarked ? (
                  <>
                    <BookmarkCheck className="mr-1.5 h-3 w-3 md:h-4 md:w-4" />{" "}
                    Bookmarked
                  </>
                ) : (
                  <>
                    <Bookmark className="mr-1.5 h-3 w-3 md:h-4 md:w-4" />{" "}
                    Bookmark
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-primary/20 bg-primary/5 hover:bg-primary/10"
              >
                <Share2 className="mr-1.5 h-3 w-3 md:h-4 md:w-4" /> Share
              </Button>
            </div>
          </motion.div>
        </header>

        {/* Article Content */}
        {/* <ScrollReveal width="100%">
          <TracingBeam>
            <div className="prose prose-invert prose-blue max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </TracingBeam>
        </ScrollReveal> */}

        {/* Author Bio */}
        <ScrollReveal width="100%">
          <div className="mt-12 p-6 bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl">
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <Avatar className="h-16 w-16">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {post.author.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  A passionate developer with expertise in building modern
                  applications across various platforms and technologies.
                </p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="text-xs">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <ScrollReveal width="100%">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Related Posts
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <ScrollReveal
                key={relatedPost.id}
                width="100%"
                delay={index * 0.1}
              >
                <Link
                  href={`/article/${relatedPost.id}`}
                  className="block h-full"
                >
                  <div className="group h-full overflow-hidden rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                    <div className="p-4">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20 text-xs mb-2"
                      >
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-base font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {relatedPost.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="max-w-4xl mx-auto">
        <ScrollReveal width="100%">
          <div className="flex justify-between">
            <Button variant="outline" size="sm" className="text-xs" asChild>
              <Link href="/article">
                <ChevronLeft className="mr-1.5 h-3 w-3 md:h-4 md:w-4" /> All
                Posts
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="text-xs" asChild>
              <Link href={`/article/${Number(post.id) + 1}`}>
                Next Post{" "}
                <ChevronRight className="ml-1.5 h-3 w-3 md:h-4 md:w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-bold mb-2">
                Enjoyed this article?
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-4">
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
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
