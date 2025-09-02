
<html lang="th">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Portfolio | Smart</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  
  <canvas id="bg"></canvas>


  <header class="nav">
    <a href="#" class="logo">FEliX</a>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <button id="menuBtn" class="menu-btn" aria-label="Menu">☰</button>
  </header>

  
  <nav class="mobile-nav" id="mobileNav">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>

  
  <section id="home" class="section hero">
    <div class="hero-inner">
      <h1 class="glitch" data-text="Hello, I'm Mina">Hello, I'm Smart</h1>
      <p class="subtitle typewriter" id="typewriter"></p>

      <div class="avatar-wrap">
        <img id="avatar" src="" alt="My photo" />
        <div class="avatar-actions">
          <label class="btn">
            เลือกรูปตัวเอง
            <input type="file" id="avatarInput" accept="image/*" hidden />
          </label>
          <button class="btn ghost" id="resetAvatar">ล้างรูป</button>
        </div>
      </div>

      <div class="cta">
        <a class="btn ghost" href="#contact">ติดต่อฉัน</a>
      </div>
      <div class="scroll-indicator">▼ เลื่อน ▼</div>
    </div>
  </section>

  
  <section id="about" class="section container reveal">
    <h2>About Me</h2>
    <p>
      สวัสดี! ผมชื่อ <b>สมาร์ท</b> 
      ชอบทำเว็บ ดีไซน์ และสร้างโปรเจกต์สนุกๆ ไว้เล่นกับแฟน 
      เวลาว่างผมชอบศึกษา เขียนโค้ด เล่นเกม ดู Tiktok Youtube 
    </p>
  </section>

 
  <section id="skills" class="section container reveal">
    <h2>Skills</h2>
    <div class="skill">
      <span>HTML</span><div class="bar"><div style="width:50%"></div></div>
    </div>
    <div class="skill">
      <span>CSS</span><div class="bar"><div style="width:30%"></div></div>
    </div>
    <div class="skill">
      <span>JavaScript</span><div class="bar"><div style="width:30%"></div></div>
    </div>
  </section>

  
  <section id="projects" class="section container reveal">
    <h2>Projects</h2>
    <div class="project-grid">
      <div class="card tilt">
       <h3>โปรเจกต์ 1</h3>
       <p>เกมเป่ายิ่งฉุบ</p>
       <a href="https://felixz3004.github.io/flowerfourrr/"target="_blank" class="btn primary">
      ดูโปรเจกต์
    </a>
  </div>
      <div class="card tilt">
      <h3>โปรเจกต์ 2</h3>
      <p>เกมจับคู่ภาพ</p>
      <a href="https://felixz3004.github.io/-/"target="_blank" class="btn primary">
      ดูโปรเจกต์
    </a>
  <div class="card tilt">
        <h3>โปรเจกต์ 3</h3>
        <p>เกม XO </p>
        <a href="https://felixz3004.github.io/-Xo/"target="_blank" class="btn primary">
          ดูโปรเจกต์
        </a>
  </section>

  
  <section id="contact" class="section container reveal">
    <h2>Contact</h2>
    <p>📧 อีเมล: smartrattanaweera007x@gmail.com</p>
    <p>📱 โทร: 098-950-4788</p>
  </section>

  
  <button id="backToTop">⬆</button>

  <script src="script.js"></script>
</body>
</html>

