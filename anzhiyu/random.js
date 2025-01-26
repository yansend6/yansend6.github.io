var posts=["2025/01/26/hello-world/","2025/01/26/新文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };