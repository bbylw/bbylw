export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebNav Hub</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <style>
    :root {
      --primary-color: #ff9000;
      --bg-color: #0d0d0d;
      --card-bg-color: #1a1a1a;
      --text-color: #fff;
    }
    
    html { font-size: 16px; }
    
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: var(--bg-color);
      color: var(--text-color);
      line-height: 1.6;
    }
    
    header {
      background-color: #000;
      padding: 1rem;
      text-align: center;
    }
    
    header h1 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--primary-color);
      margin: 0;
      text-transform: uppercase;
    }
    
    nav {
      background-color: var(--card-bg-color);
      padding: 0.5rem;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    
    nav ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    nav li {
      margin: 0.5rem;
    }
    
    nav a {
      color: var(--text-color);
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    
    nav a:hover {
      background-color: var(--primary-color);
    }
    
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .section {
      margin-bottom: 3rem;
    }
    
    .section-title {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--primary-color);
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    
    .card {
      background-color: var(--card-bg-color);
      border-radius: 8px;
      padding: 1rem;
      transition: transform 0.3s;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
    
    .card a {
      color: var(--text-color);
      text-decoration: none;
    }
    
    .card i {
      color: var(--primary-color);
      margin-right: 0.5rem;
    }
    
    footer {
      background-color: #000;
      padding: 1rem;
      text-align: center;
      margin-top: 2rem;
    }
    
    footer a {
      color: var(--primary-color);
      text-decoration: none;
    }
    
    @media (max-width: 768px) {
      html {
        font-size: 14px;
      }
      
      main {
        padding: 1rem;
      }
      
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>WebNav Hub</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="#ai">AI搜索</a></li>
      <li><a href="#social">社交媒体</a></li>
      <li><a href="#tools">实用工具</a></li>
      <li><a href="#tech">科技资讯</a></li>
      <li><a href="#cloud">云存储</a></li>
      <li><a href="#email">电子邮箱</a></li>
    </ul>
  </nav>
  
  <main>
    <section id="ai" class="section">
      <h2 class="section-title">AI搜索</h2>
      <div class="grid">
        <div class="card">
          <a href="https://chat.openai.com" target="_blank">
            <i class="fas fa-robot"></i>ChatGPT
          </a>
        </div>
        <div class="card">
          <a href="https://www.bing.com/new" target="_blank">
            <i class="fas fa-search"></i>New Bing
          </a>
        </div>
        <div class="card">
          <a href="https://bard.google.com" target="_blank">
            <i class="fas fa-brain"></i>Bard
          </a>
        </div>
      </div>
    </section>
    
    <section id="social" class="section">
      <h2 class="section-title">社交媒体</h2>
      <div class="grid">
        <div class="card">
          <a href="https://twitter.com" target="_blank">
            <i class="fab fa-twitter"></i>Twitter
          </a>
        </div>
        <div class="card">
          <a href="https://www.facebook.com" target="_blank">
            <i class="fab fa-facebook"></i>Facebook
          </a>
        </div>
        <div class="card">
          <a href="https://www.instagram.com" target="_blank">
            <i class="fab fa-instagram"></i>Instagram
          </a>
        </div>
      </div>
    </section>
    
    <section id="tools" class="section">
      <h2 class="section-title">实用工具</h2>
      <div class="grid">
        <div class="card">
          <a href="https://translate.google.com" target="_blank">
            <i class="fas fa-language"></i>Google翻译
          </a>
        </div>
        <div class="card">
          <a href="https://www.notion.so" target="_blank">
            <i class="fas fa-sticky-note"></i>Notion
          </a>
        </div>
      </div>
    </section>
  </main>
  
  <footer>
    <p>© 2024 WebNav Hub. Made with <i class="fas fa-heart" style="color: var(--primary-color);"></i></p>
  </footer>

  <script>
    // 平滑滚动
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  </script>
</body>
</html>`;

    // 返回响应
    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
}; 