
class BlogPost {
  public title: string;
  public content: string;
  
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
  
  createPost(): void { }
  
  updatePost(): void { }
  
  deletePost(): void { }
  
  // Violates the Single Responsibility Principle
  // displayHTML(): string {
    //   return `<h1>${this.title}</h1><p>${this.content}</p>`
    // }
  }
class BlogPostHTML {
    constructor(public blogpost: BlogPost) {}
  
    displayHTML(): string {
      return `<h1>${this.blogpost.title}</h1><p>${this.blogpost.content}</p>`
    }
  }
  
class BlogPostJson {
    constructor(public blogpost: BlogPost) {}
  
    returnJson(): object {
      return {
        title: this.blogpost.title,
        content: this.blogpost.content
      }
  }
}


const myBlogPost = new BlogPost("My Blog Post", "This is the content of my blog post.");
const myBlogPostDisplay = new BlogPostHTML(myBlogPost);
const myBlogPostJson = new BlogPostJson(myBlogPost);

console.log(myBlogPostDisplay.displayHTML());
console.log(myBlogPostJson.returnJson());