class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  createPost(): void { }

  updatePost(): void { }

  deletePost(): void { }

  // Violates the Single Responsibility Principle
  displayHTML(): string {
    return `<h1>${this.title}</h1><p>${this.content}</p>`
  }
}

class BlogPostDisplay {
  constructor(public blogpost: BlogPost) {}

  display(): string {
    return `<h1>${this.blogpost.title}</h1><p>${this.blogpost.content}</p>`
  }
}

const myBlogPost = new BlogPost("My Blog Post", "This is the content of my blog post.");
myBlogPost.displayHTML();