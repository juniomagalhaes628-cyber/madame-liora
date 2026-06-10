// ===== HERO 3D — elegant WebGL layer (lazy-loaded) =====
// Three.js via CDN ESM. A textured plane with a subtle ripple that reacts to
// pointer + scroll, plus a few faint golden particles drifting upward.
// Degrades silently: caller only imports this after a capability check, and any
// failure here leaves the existing <img> + gradient fallback visible.

import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const HERO_IMG =
  'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function initHero3D(canvas) {
  const hero = canvas.closest('.hero');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 12;

  // ── Textured plane with ripple shader ──────────────────────────
  const uniforms = {
    uTime:    { value: 0 },
    uTex:     { value: null },
    uMouse:   { value: new THREE.Vector2(0, 0) },
    uScroll:  { value: 0 },
    uCover:   { value: new THREE.Vector2(1, 1) }, // for object-fit:cover
  };

  const geo = new THREE.PlaneGeometry(36, 22, 60, 40);
  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform vec2  uMouse;
      uniform float uScroll;
      varying vec2  vUv;
      void main(){
        vUv = uv;
        vec3 p = position;
        // gentle travelling ripple, stronger toward edges
        float w = sin(p.x*0.25 + uTime*0.6) * cos(p.y*0.3 + uTime*0.45);
        p.z += w * 0.6;
        // pointer pushes the surface for parallax depth
        p.z += (uMouse.x * p.x + uMouse.y * p.y) * 0.04;
        p.y += uScroll * 2.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D uTex;
      uniform vec2 uCover;
      uniform float uTime;
      varying vec2 vUv;
      void main(){
        // object-fit: cover mapping
        vec2 uv = (vUv - 0.5) * uCover + 0.5;
        vec3 col = texture2D(uTex, uv).rgb;
        // warm rose/gold grade to match the brand
        col = mix(col, col * vec3(1.08, 0.94, 0.86), 0.35);
        // very soft moving vignette to add depth
        float d = distance(vUv, vec2(0.5));
        col *= 1.0 - d * 0.35;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });

  const plane = new THREE.Mesh(geo, mat);
  scene.add(plane);

  // ── Faint golden particles ─────────────────────────────────────
  const COUNT = 60;
  const pPos = new Float32Array(COUNT * 3);
  const pSeed = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    pPos[i * 3]     = (Math.random() - 0.5) * 34;
    pPos[i * 3 + 1] = (Math.random() - 0.5) * 20;
    pPos[i * 3 + 2] = Math.random() * 4 + 1;
    pSeed[i] = Math.random() * 100;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xe7c9a0, size: 0.13, transparent: true, opacity: 0.55,
    depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  // ── Load texture, then reveal ──────────────────────────────────
  new THREE.TextureLoader().load(
    HERO_IMG,
    (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      uniforms.uTex.value = tex;
      resize();
      canvas.classList.add('ready');
      hero && hero.classList.add('webgl-on');
    },
    undefined,
    () => { dispose(); } // texture failed → leave fallback image
  );

  // ── Interaction ────────────────────────────────────────────────
  const mouse = { x: 0, y: 0 };
  function onMove(e) {
    const r = hero.getBoundingClientRect();
    mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    mouse.y = -((e.clientY - r.top) / r.height - 0.5) * 2;
  }
  hero.addEventListener('pointermove', onMove);

  function onScroll() {
    const r = hero.getBoundingClientRect();
    uniforms.uScroll.value = Math.max(-1, Math.min(1, -r.top / window.innerHeight));
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Resize / cover ─────────────────────────────────────────────
  function resize() {
    const w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    // fit plane to view at camera distance
    const vh = 2 * Math.tan((camera.fov * Math.PI / 180) / 2) * camera.position.z;
    const vw = vh * camera.aspect;
    plane.scale.set(vw / 36, vh / 22, 1);
    // cover mapping based on image (≈1600x1067) vs viewport aspect
    const imgAspect = 1600 / 1067;
    const viewAspect = w / h;
    if (viewAspect > imgAspect) uniforms.uCover.value.set(1, imgAspect / viewAspect);
    else uniforms.uCover.value.set(viewAspect / imgAspect, 1);
  }
  window.addEventListener('resize', resize);

  // ── Loop ───────────────────────────────────────────────────────
  let raf, running = true;
  const clock = new THREE.Clock();
  function tick() {
    if (!running) return;
    raf = requestAnimationFrame(tick);
    const t = clock.getElapsedTime();
    uniforms.uTime.value = t;
    // ease mouse into uniform for natural momentum
    uniforms.uMouse.value.x += (mouse.x - uniforms.uMouse.value.x) * 0.05;
    uniforms.uMouse.value.y += (mouse.y - uniforms.uMouse.value.y) * 0.05;
    // drift particles upward, wrap around
    const arr = pGeo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] += 0.006 + (pSeed[i] % 1) * 0.004;
      arr[i * 3]     += Math.sin(t * 0.3 + pSeed[i]) * 0.002;
      if (arr[i * 3 + 1] > 11) arr[i * 3 + 1] = -11;
    }
    pGeo.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  }
  tick();

  // pause when tab hidden (save battery)
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) { clock.start(); tick(); }
  });

  function dispose() {
    running = false;
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    window.removeEventListener('scroll', onScroll);
    hero && hero.removeEventListener('pointermove', onMove);
    geo.dispose(); mat.dispose(); pGeo.dispose(); pMat.dispose();
    renderer.dispose();
  }

  return { dispose };
}
