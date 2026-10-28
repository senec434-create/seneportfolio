<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cheikhou Sene | Portfolio Sci-Fi - Aéronautique & Énergie</title>
    <style>
        :root {
            --bg-color: #030712;
            --panel-bg: rgba(10, 15, 30, 0.7);
            --primary: #00f0ff;
            --secondary: #7000ff;
            --accent: #00ff66;
            --text-color: #e2e8f0;
            --border-color: rgba(0, 240, 255, 0.3);
        }

        .theme-gold {
            --primary: #ffd700;
            --secondary: #ff4500;
            --accent: #ffa500;
            --border-color: rgba(255, 215, 0, 0.3);
        }

        .theme-magenta {
            --primary: #ff007f;
            --secondary: #7928ca;
            --accent: #ff0055;
            --border-color: rgba(255, 0, 127, 0.3);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Courier New', Courier, monospace;
            cursor: crosshair;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            overflow-x: hidden;
            position: relative;
            transition: background 0.5s ease;
        }

        canvas#space-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
        }

        .hud-controls {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            gap: 10px;
            background: var(--panel-bg);
            padding: 10px;
            border: 1px solid var(--border-color);
            backdrop-filter: blur(5px);
            border-radius: 4px;
        }

        .theme-btn {
            background: transparent;
            border: 1px solid var(--primary);
            color: var(--primary);
            padding: 5px 10px;
            cursor: pointer;
            font-size: 12px;
            transition: 0.3s;
        }

        .theme-btn:hover, .theme-btn.active {
            background: var(--primary);
            color: var(--bg-color);
            box-shadow: 0 0 10px var(--primary);
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
            position: relative;
            z-index: 2;
        }

        header {
            text-align: center;
            padding: 40px 0;
            background: var(--panel-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
            backdrop-filter: blur(10px);
            margin-bottom: 30px;
        }

        .profile-img {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            border: 3px solid var(--primary);
            box-shadow: 0 0 20px var(--primary);
            object-fit: cover;
            margin-bottom: 20px;
        }

        h1 {
            color: var(--primary);
            font-size: 2.5rem;
            letter-spacing: 2px;
            text-shadow: 0 0 10px var(--primary);
            margin-bottom: 10px;
        }

        h3 {
            color: var(--accent);
            font-size: 1.1rem;
            margin-bottom: 15px;
        }

        p.quote {
            font-style: italic;
            opacity: 0.8;
            max-width: 600px;
            margin: 0 auto 20px auto;
        }

        .badges {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .badge {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid var(--border-color);
            color: var(--primary);
            padding: 6px 12px;
            font-size: 0.8rem;
            border-radius: 4px;
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
        }

        section {
            background: var(--panel-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 30px;
            margin-bottom: 30px;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 15px rgba(0,0,0,0.5);
        }

        h2 {
            color: var(--primary);
            border-bottom: 1px dashed var(--border-color);
            padding-bottom: 10px;
            margin-bottom: 20px;
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .terminal-box {
            background: #010409;
            border: 1px solid var(--primary);
            padding: 20px;
            border-radius: 4px;
            font-family: 'Courier New', Courier, monospace;
            color: var(--accent);
            box-shadow: inset 0 0 15px rgba(0, 240, 255, 0.1);
            line-height: 1.6;
        }

        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        @media(max-width: 768px) {
            .grid-2 {
                grid-template-columns: 1fr;
            }
        }

        .mission-card {
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid var(--border-color);
            padding: 20px;
            border-radius: 6px;
            transition: transform 0.3s, box-shadow 0.3s;
            margin-bottom: 15px;
        }

        .mission-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 15px var(--primary);
            border-color: var(--primary);
        }

        .mission-title {
            color: var(--primary);
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 8px;
        }

        .skill-bar {
            margin-bottom: 15px;
        }

        .skill-info {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            margin-bottom: 5px;
        }

        .progress-track {
            background: rgba(255,255,255,0.1);
            height: 8px;
            border-radius: 4px;
            overflow: hidden;
            border: 1px solid var(--border-color);
        }

        .progress-fill {
            background: var(--primary);
            height: 100%;
            width: 0;
            transition: width 1.5s ease-in-out;
            box-shadow: 0 0 10px var(--primary);
        }

        ul {
            list-style-type: none;
        }

        ul li {
            padding: 8px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            position: relative;
            padding-left: 20px;
        }

        ul li::before {
            content: "▸";
            position: absolute;
            left: 0;
            color: var(--primary);
        }

        .links-container {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .sci-fi-btn {
            background: transparent;
            border: 1px solid var(--primary);
            color: var(--primary);
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
            transition: 0.3s;
            font-weight: bold;
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
        }

        .sci-fi-btn:hover {
            background: var(--primary);
            color: var(--bg-color);
            box-shadow: 0 0 20px var(--primary);
        }

        footer {
            text-align: center;
            padding: 30px;
            font-size: 0.9rem;
            opacity: 0.7;
        }
    </style>
</head>
<body>

    <canvas id="space-canvas"></canvas>

    <div class="hud-controls">
        <button class="theme-btn active" onclick="setTheme('cyan')">CYAN</button>
        <button class="theme-btn" onclick="setTheme('gold')">SOLAR</button>
        <button class="theme-btn" onclick="setTheme('magenta')">VOID</button>
    </div>

    <div class="container">
        <!-- HEADER -->
        <header>
            <img src="https://github.com/senec434-create/seneportfolio/blob/main/photocheikhou2.jpg" alt="Cheikhou Sene" class="profile-img">
            <h1>CHEIKHOU SENE</h1>
            <h3>Élève-ingénieur · ENSEEIHT (N7) Toulouse · Aéronautique & Énergie</h3>
            <p class="quote">« Des équations aux systèmes qui fonctionnent : je transforme les maths et la physique en solutions concrètes. »</p>
            
            <div class="badges">
                <span class="badge">ENSEEIHT 1ère année</span>
                <span class="badge">Python / C</span>
                <span class="badge">Prépa MPSI / MP</span>
                <span class="badge">Mobilité Internationale</span>
            </div>
        </header>

        <!-- TRANSMISSION -->
        <section>
            <h2>🛰️ TRANSMISSION D'ENTRÉE</h2>
            <div class="terminal-box" id="terminal">
                > IDENTIFIANT      : Cheikhou Sene<br>
                > BASE             : Toulouse, France<br>
                > ÉCOLE            : ENSEEIHT (N7), 1ère année<br>
                > FORMATION        : Prépa MPSI / MP · Licences de mathématiques<br>
                > SECTEURS CIBLES  : Aéronautique & Spatial · Énergie<br>
                > LANGUES          : Wolof (natif) · Français · Anglais<br>
                > OBJECTIF         : Stage ingénieur (Juin)<br>
                > STATUT           : Systèmes en ligne ✅
            </div>
        </section>

        <!-- À PROPOS -->
        <section>
            <h2>👨‍🚀 À PROPOS</h2>
            <p>Passionné par l'<strong>aéronautique, le spatial et l'énergie</strong>, je me forme à l'ENSEEIHT après une classe préparatoire MPSI/MP et des licences de mathématiques. J'aime les problèmes qui mélangent <strong>théorie et mise en œuvre</strong> : modéliser, coder, mesurer, vérifier.</p>
            <br>
            <p>Mon cap : une carrière d'ingénieur <strong>à l'international</strong>, au cœur des technologies qui font avancer les transports et l'énergie de demain.</p>
        </section>

        <!-- MISSIONS -->
        <section>
            <h2>🧪 MISSIONS ACCOMPLIES</h2>
            
            <div class="mission-card">
                <div class="mission-title">🛸 Mission 01 · Reconnaissance de caractères manuscrits (TIPE MPSI)</div>
                <p>Développement d'une IA en Python capable de reconnaître des caractères écrits à la main.</p>
                <br>
                <p><strong>Notions :</strong> Probabilités, matrices de vérité, traitement d'images, Python.</p>
                <br>
                <a href="https://github.com/senec434-create/seneportfolio" target="_blank" class="sci-fi-btn">Voir le dépôt GitHub</a>
            </div>

            <div class="mission-card">
                <div class="mission-title">⚡ Mission 02 · Détecteur de niveau de liquide (TIPE MP)</div>
                <p>Conception d'un capteur de niveau de liquide pour l'industrie basé sur des oscillateurs quasi sinusoïdaux.</p>
                <br>
                <p><strong>Notions :</strong> Amplificateurs, filtres, physique des matériaux, électricité, incertitudes.</p>
                <br>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <a href="https://github.com/senec434-create/seneportfolio/blob/main/DETECTEUR-DE-NIVEAU-DE%20LIQUIDE.pdf" target="_blank" class="sci-fi-btn">📄 Rapport PDF</a>
                    <a href="https://github.com/senec434-create/seneportfolio/blob/main/Diapo.3.21.pdf" target="_blank" class="sci-fi-btn">📊 Présentation PDF</a>
                </div>
            </div>
        </section>

        <!-- ARSENAL -->
        <section>
            <h2>🧰 ARSENAL DE COMPÉTENCES</h2>
            
            <div class="skill-bar">
                <div class="skill-info"><span>Programmation (Python, C, Traitement d'images)</span><span>90%</span></div>
                <div class="progress-track"><div class="progress-fill" style="width: 90%;"></div></div>
            </div>

            <div class="skill-bar">
                <div class="skill-info"><span>Mathématiques (Probabilités, Analyse, Matrices)</span><span>95%</span></div>
                <div class="progress-track"><div class="progress-fill" style="width: 95%;"></div></div>
            </div>

            <div class="skill-bar">
                <div class="skill-info"><span>Physique & Électronique (Oscillateurs, Filtres, Matériaux)</span><span>85%</span></div>
                <div class="progress-track"><div class="progress-fill" style="width: 85%;"></div></div>
            </div>

            <div class="skill-bar">
                <div class="skill-info"><span>Langues (Wolof, Français, Anglais)</span><span>88%</span></div>
                <div class="progress-track"><div class="progress-fill" style="width: 88%;"></div></div>
            </div>

            <br>
            <p>🔭 <strong>En exploration :</strong> Mécanique des fluides · Matériaux composites · Systèmes d'énergie embarqués</p>
        </section>

        <!-- TRAJECTOIRE -->
        <section class="grid-2">
            <div>
                <h2>🗺️ TRAJECTOIRE</h2>
                <ul>
                    <li><strong>ENSEEIHT (N7) Toulouse</strong> · Cycle ingénieur 1ère année</li>
                    <li><strong>Classes Préparatoires</strong> · MPSI / MP (avec double TIPE)</li>
                    <li><strong>Licences de Mathématiques</strong> · Lille & Paul Sabatier</li>
                </ul>
            </div>
            <div>
                <h2>💼 EXPÉRIENCES DE TERRAIN</h2>
                <ul>
                    <li><strong>2024 → 2026</strong> · Valet de chambre (hôtels 3★)</li>
                    <li>Agent d'entretien & Agent polyvalent de restaurant</li>
                    <li><em>Rigueur, autonomie et sens du service en parallèle des études.</em></li>
                </ul>
            </div>
        </section>

        <!-- HORS ORBITE -->
        <section>
            <h2>🌌 HORS ORBITE</h2>
            <ul>
                <li><strong>Bénévolat</strong> · Action Solidaire (accompagnement de jeunes en difficulté)</li>
                <li><strong>Art & Graphisme</strong> · Participation à la biennale d'art de mon collège</li>
                <li><strong>Sports & Loisirs</strong> · Badminton & Musique</li>
            </ul>
        </section>

        <!-- CONTACT -->
        <section style="text-align: center;">
            <h2>📡 ÉTABLIR LE CONTACT</h2>
            <div class="links-container">
                <a href="mailto:senec434@gmail.com" class="sci-fi-btn">📧 Envoyer un Email</a>
                <a href="https://www.linkedin.com/in/cheikhou-sene-2a1406361" target="_blank" class="sci-fi-btn">💼 LinkedIn</a>
                <a href="https://github.com/senec434-create" target="_blank" class="sci-fi-btn">🐙 GitHub</a>
            </div>
        </section>

        <footer>
            <p>« Ad astra per aspera » : vers les étoiles, à travers les difficultés.</p>
        </footer>
    </div>

    <script>
        // Canvas Animation Arrière-plan Espace & Particules
        const canvas = document.getElementById('space-canvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const stars = [];
        const numStars = 150;
        let mouse = { x: null, y: null, radius: 150 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                baseAlpha: Math.random(),
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            stars.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;

                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.baseAlpha})`;
                ctx.fill();

                // Interaction curseur
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - star.x;
                    let dy = mouse.y - star.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        ctx.beginPath();
                        ctx.moveTo(star.x, star.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
                        ctx.strokeStyle = primaryColor;
                        ctx.globalAlpha = 1 - (dist / mouse.radius);
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                        ctx.globalAlpha = 1.0;
                    }
                }
            });

            requestAnimationFrame(animate);
        }
        animate();

        // Gestionnaire de thèmes Sci-Fi
        function setTheme(theme) {
            document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            document.documentElement.className = '';
            if (theme === 'gold') {
                document.documentElement.classList.add('theme-gold');
            } else if (theme === 'magenta') {
                document.documentElement.classList.add('theme-magenta');
            }
        }
    </script>
</body>
</html>
