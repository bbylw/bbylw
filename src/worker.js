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
      margin: 0.3rem;
    }
    
    nav a {
      color: var(--text-color);
      text-decoration: none;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.5rem 0.8rem;
      border-radius: 1.25rem;
      transition: background-color 0.3s, color 0.3s;
    }
    
    nav a:hover, nav a.active {
      background-color: var(--primary-color);
      color: #000;
    }
    
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
    }
    
    .category-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 2rem 0 1rem;
      color: var(--primary-color);
      border-left: 4px solid var(--primary-color);
      padding-left: 0.6rem;
      text-transform: uppercase;
    }
    
    .link-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .link-card {
      background-color: var(--card-bg-color);
      border-radius: 5px;
      padding: 1rem;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .link-card:hover {
      background-color: #2a2a2a;
      transform: translateY(-5px);
    }
    
    .link-card i {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
      color: var(--primary-color);
    }
    
    .link-card h3 {
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
      color: var(--text-color);
    }
    
    footer {
      background-color: #000;
      color: #ccc;
      text-align: center;
      padding: 1rem;
      font-size: 0.75rem;
    }
    
    footer nav {
      margin-top: 0.6rem;
      background-color: transparent;
    }
    
    footer nav a {
      color: #ccc;
      margin: 0 0.6rem;
      font-size: 0.75rem;
    }
    
    @media (max-width: 768px) {
      html { font-size: 14px; }
      
      .link-grid {
        grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
      }
      
      nav {
        padding: 0.3rem;
      }
      
      nav a {
        padding: 0.4rem 0.6rem;
      }
    }
    
    @media (max-width: 480px) {
      html { font-size: 12px; }
      
      .link-grid {
        grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
      }
      
      header h1 {
        font-size: 1.8rem;
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
      <li><a href="#ai-search">Ai搜索</a></li>
      <li><a href="#social">社交媒体</a></li>
      <li><a href="#tools">实用工具</a></li>
      <li><a href="#tech-news">科技资讯</a></li>
      <li><a href="#cloud-storage">云存储</a></li>
      <li><a href="#email">电子邮箱</a></li>
    </ul>
  </nav>
  
  <main>
    <h2 class="category-title" id="ai-search">Ai搜索</h2>
    <section class="link-grid">
      ${generateAiSearchLinks()}
    </section>

    <h2 class="category-title" id="social">社交媒体</h2>
    <section class="link-grid">
      ${generateSocialLinks()}
    </section>

    <h2 class="category-title" id="tools">实用工具</h2>
    <section class="link-grid">
      ${generateToolLinks()}
    </section>

    <h2 class="category-title" id="tech-news">科技资讯</h2>
    <section class="link-grid">
      ${generateTechNewsLinks()}
    </section>

    <h2 class="category-title" id="cloud-storage">云存储</h2>
    <section class="link-grid">
      ${generateCloudStorageLinks()}
    </section>

    <h2 class="category-title" id="email">电子邮箱</h2>
    <section class="link-grid">
      ${generateEmailLinks()}
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023 WebNav Hub. 保留所有权利。</p>
    <nav>
      <a href="#">隐私政策</a>
      <a href="#">使用条款</a>
      <a href="#">联系我们</a>
    </nav>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      var navLinks = document.querySelectorAll('nav a');
      var linkCards = document.querySelectorAll('.link-card');

      navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
          var targetId = this.getAttribute('href').split('#')[1];
          var targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '#' + targetId;
            window.history.pushState({path: newUrl}, '', newUrl);
          }
        });
      });

      function handleHashChange() {
        var hash = window.location.hash;
        if (hash) {
          var targetElement = document.getElementById(hash.substring(1));
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            var activeLink = document.querySelector('nav a[href="' + hash + '"]');
            if (activeLink) {
              navLinks.forEach(l => l.classList.remove('active'));
              activeLink.classList.add('active');
            }
          }
        }
      }

      window.addEventListener('hashchange', handleHashChange);
      handleHashChange();

      linkCards.forEach(function(card) {
        card.addEventListener('click', function() {
          window.open(this.getAttribute('href'), '_blank');
        });
      });
    });
  </script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
};

// 生成AI搜索链接
function generateAiSearchLinks() {
  const links = [
    { href: "https://www.google.com", icon: "fab fa-google", title: "Google" },
    { href: "https://www.bing.com", icon: "fab fa-microsoft", title: "Bing" },
    { href: "https://websim.ai/", icon: "fas fa-search", title: "websim" },
    { href: "https://chatgpt.com/", icon: "fab fa-google", title: "chatgpt" },
    { href: "https://www.doubao.com/chat/", icon: "fas fa-paw", title: "傻豆包" },
    { href: "https://yuanbao.tencent.com/", icon: "fas fa-robot", title: "傻元宝" },
    { href: "https://poe.com/", icon: "fas fa-robot", title: "poe" },
    { href: "https://claude.ai/", icon: "fas fa-robot", title: "claude" },
    { href: "https://chandler.bet/", icon: "fas fa-robot", title: "ChandlerAi" },
    { href: "https://mistral.ai/", icon: "fas fa-brain", title: "mistral" },
    { href: "http://u.90tsg.com/", icon: "fas fa-clinic-medical", title: "循证医学UTD" },
    { href: "https://www.medscape.com/", icon: "fas fa-stethoscope", title: "medscape" },
    { href: "https://chat.oaichat.cc/", icon: "fab fa-rocketchat", title: "免费oaichat" },
    { href: "https://app.leonardo.ai/", icon: "far fa-images", title: "leonardo.ai绘图" },
    { href: "https://huggingface.co/", icon: "fas fa-meh-rolling-eyes", title: "huggingface" },
    { href: "https://lmarena.ai/", icon: "fas fa-robot", title: "lmarena" },
    { href: "https://kelaode.ai/", icon: "fas fa-robot", title: "kelaode" },
    { href: "https://x.ai/", icon: "fab fa-twitter-square", title: "x.ai" },
    { href: "https://ascvdpce.186404.xyz/", icon: "fas fa-heartbeat", title: "pce计算" }
  ];
  return generateLinkCards(links);
}

// 生成社交媒体链接
function generateSocialLinks() {
  const links = [
    { href: "https://www.facebook.com", icon: "fab fa-facebook", title: "Facebook" },
    { href: "https://twitter.com", icon: "fab fa-twitter", title: "Twitter" },
    { href: "https://www.instagram.com", icon: "fab fa-instagram", title: "Instagram" },
    { href: "https://www.linkedin.com", icon: "fab fa-linkedin", title: "LinkedIn" },
    { href: "https://www.tiktok.com", icon: "fab fa-tiktok", title: "TikTok" },
    { href: "https://www.reddit.com", icon: "fab fa-reddit", title: "Reddit" },
    { href: "https://github.com/", icon: "fab fa-github", title: "GitHub" }
  ];
  return generateLinkCards(links);
}

// 生成实用工具链接
function generateToolLinks() {
  const links = [
    { href: "https://translate.google.com", icon: "fas fa-language", title: "Google翻译" },
    { href: "https://d.186404.xyz/", icon: "fas fa-link", title: "短链" },
    { href: "https://dynv6.com/", icon: "fas fa-network-wired", title: "dynv6" },
    { href: "https://fast.com/", icon: "fas fa-tachometer-alt", title: "网速测试" },
    { href: "https://www.cloudns.net/", icon: "fas fa-cloud", title: "Cloudns" },
    { href: "https://www.cloudflare.com/zh-cn/", icon: "fas fa-shield-alt", title: "Cloudflare" },
    { href: "https://ygpy.net/", icon: "fas fa-user-friends", title: "一个朋友" },
    { href: "https://notebooklm.google/", icon: "fas fa-book", title: "谷歌笔记" },
    { href: "https://email.ml/", icon: "fas fa-envelope", title: "临时邮箱" },
    { href: "https://www.ahhhhfs.com/", icon: "fas fa-blog", title: "A姐" },
    { href: "https://ip.sb/", icon: "fas fa-map-marker-alt", title: "IP查询" },
    { href: "https://img.186404.xyz/", icon: "fas fa-image", title: "图床" },
    { href: "https://www.site.ac/", icon: "fas fa-exchange-alt", title: "Site域名转发" },
    { href: "https://zh.go-to-library.sk/", icon: "fas fa-book-reader", title: "Z-Library" },
    { href: "https://nic.us.kg/", icon: "fas fa-globe", title: "us.kg域名" },
    { href: "https://www.spaceship.com/zh/", icon: "fas fa-space-shuttle", title: "Spaceship廉价域名" },
    { href: "https://itsyebekhe.github.io/HiN-VPN/", icon: "fas fa-walking", title: "HiN-VPN" },
    { href: "https://fontawesome.com/", icon: "fas fa-icons", title: "FontAwesome图标" },
    { href: "https://scamalytics.com/", icon: "fas fa-icons", title: "ip清洁度查询" },
    { href: "https://test-ipv6.com/", icon: "fas fa-ethernet", title: "test-ipv6" },
    { href: "https://html.zone/ip", icon: "fab fa-sourcetree", title: "zone/ip" },
    { href: "https://www.lumiproxy.com/zh-hans/online-proxy/proxysite/", icon: "fas fa-unlock", title: "免费网络代理" },
    { href: "https://ipcheck.ing/", icon: "fas fa-map-marker-alt", title: "ipcheck" },
    { href: "https://console.cron-job.org/", icon: "fas fa-ethernet", title: "定时任务cron-job" },
    { href: "https://uptimerobot.com/", icon: "fas fa-map-marker-alt", title: "uptimerobot" },
    { href: "https://forwardemail.net/", icon: "fas fa-mail-bulk", title: "forwardemail" },
    { href: "https://improvmx.com/", icon: "fas fa-mail-bulk", title: "improvmx" },
    { href: "https://gb.w404.nyc.mn/", icon: "fab fa-github", title: "github文件加速" },
    { href: "https://hostry.com/", icon: "fas fa-history", title: "hostryDNS" },
    { href: "https://www.sitelutions.com/", icon: "fas fa-sitemap", title: "免费域名sitelutions" },
    { href: "https://www.changeip.com/", icon: "fas fa-satellite-dish", title: "免费域名changeip" },
    { href: "https://dnsexit.com/", icon: "fas fa-users", title: "免费域名dnsexit" },
    { href: "https://www.nslookup.io/", icon: "fas fa-transgender", title: "DNS查找nslookup" },
    { href: "https://ping0.cc/", icon: "fas fa-fingerprint", title: "ping0" },
    { href: "https://customer.l53.net/", icon: "fas fa-fingerprint", title: "L53免费域名" },
    { href: "https://tools.pdf24.org/", icon: "fas fa-file-pdf", title: "PDF在线工具" },
    { href: "http://free-proxy.cz/en/", icon: "fab fa-internet-explorer", title: "free-proxy" }
  ];
  return generateLinkCards(links);
}

// 生成科技资讯链接
function generateTechNewsLinks() {
  const links = [
    { href: "https://www.techcrunch.com", icon: "fas fa-newspaper", title: "TechCrunch" },
    { href: "https://www.wired.com", icon: "fas fa-bolt", title: "Wired" },
    { href: "https://www.theverge.com", icon: "fas fa-laptop", title: "The Verge" },
    { href: "https://arstechnica.com", icon: "fas fa-rocket", title: "Ars Technica" },
    { href: "https://www.engadget.com", icon: "fas fa-mobile-alt", title: "Engadget" },
    { href: "https://techradar.com", icon: "fas fa-satellite", title: "TechRadar" },
    { href: "https://b.186404.xyz/", icon: "fas fa-blog", title: "科技博客" },
    { href: "https://www.cnbeta.com.tw/", icon: "fas fa-info-circle", title: "cnbeta" }
  ];
  return generateLinkCards(links);
}

// 生成云存储链接
function generateCloudStorageLinks() {
  const links = [
    { href: "https://www.dropbox.com", icon: "fas fa-cloud", title: "Dropbox" },
    { href: "https://drive.google.com", icon: "fab fa-google-drive", title: "Google Drive" },
    { href: "https://onedrive.live.com", icon: "fab fa-microsoft", title: "OneDrive" },
    { href: "https://www.box.com", icon: "fas fa-box", title: "Box" },
    { href: "https://www.mediafire.com", icon: "fas fa-file-alt", title: "MediaFire" },
    { href: "https://mega.nz", icon: "fas fa-cloud-upload-alt", title: "MEGA" },
    { href: "https://mypikpak.com/", icon: "fas fa-cloud", title: "PikPak" }
  ];
  return generateLinkCards(links);
}

// 生成电子邮箱链接
function generateEmailLinks() {
  const links = [
    { href: "https://mail.google.com", icon: "fas fa-envelope", title: "Gmail" },
    { href: "https://outlook.live.com", icon: "fab fa-microsoft", title: "Outlook" },
    { href: "https://cock.li/", icon: "fas fa-envelope-open", title: "cock邮箱" },
    { href: "https://disroot.org/", icon: "fas fa-envelope-square", title: "disroot邮箱" },
    { href: "https://www.protonmail.com", icon: "fas fa-shield-alt", title: "ProtonMail" },
    { href: "https://mail.qq.com", icon: "fab fa-qq", title: "QQ邮箱" },
    { href: "https://librem.one/", icon: "fas fa-at", title: "librem邮箱" },
    { href: "https://www.linshigmail.com/", icon: "fas fa-mail-bulk", title: "临时谷歌邮箱" }
  ];
  return generateLinkCards(links);
}

// 通用的链接卡片生成函数
function generateLinkCards(links) {
  return links.map(link => `
    <div class="link-card" href="${link.href}">
      <i class="${link.icon}"></i>
      <h3>${link.title}</h3>
    </div>
  `).join('');
} 