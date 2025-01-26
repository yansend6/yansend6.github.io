var posts=["2025/01/26/这是一篇新的博文/","2025/01/26/新文章/","2025/01/26/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };