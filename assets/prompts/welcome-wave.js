// welcome screen dot wave: loaded after the page is ready,
// skipped quietly when three.js or WebGL is unavailable (offline, old devices)
(function () {
  const intro = document.querySelector('.welcome-intro');
  if (!intro) return;

  window.addEventListener('load', function () {
    (window.requestIdleCallback || setTimeout)(start);
  });

  async function start() {
    let THREE;
    try {
      THREE = await import('https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js');
    } catch (e) {
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.className = 'welcome-wave';
    canvas.setAttribute('aria-hidden', 'true');
    intro.prepend(canvas);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch (e) {
      canvas.remove();
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    // the canvas changes shape between the phone and desktop layouts
    new ResizeObserver(function () {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      if (!frame) renderer.render(scene, camera);
    }).observe(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 2.2, 7);
    camera.lookAt(0, 0, 0);

    // a flat grid of dots, wide enough for desktop; wave() lifts each dot into rolling ripples
    const cols = 90, rows = 26;
    const positions = new Float32Array(cols * rows * 3);
    function wave(time) {
      const t = time / 1000;
      let k = 0;
      for (let i = 0; i < cols; i++) {
        const x = (i / (cols - 1) - 0.5) * 24;
        for (let j = 0; j < rows; j++) {
          const z = (j / (rows - 1) - 0.5) * 6;
          positions[k++] = x;
          positions[k++] = Math.sin(x * 0.6 + t * 0.9) * 0.35 + Math.cos(z * 0.9 + t * 0.7) * 0.25;
          positions[k++] = z;
        }
      }
      geometry.attributes.position.needsUpdate = true;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    // round dots: points are squares unless they're drawn with a circle texture
    const dot = document.createElement('canvas');
    dot.width = dot.height = 64;
    const dotCtx = dot.getContext('2d');
    dotCtx.fillStyle = '#fff';
    dotCtx.arc(32, 32, 30, 0, Math.PI * 2);
    dotCtx.fill();
    const material = new THREE.PointsMaterial({ size: 0.11, map: new THREE.CanvasTexture(dot), transparent: true, opacity: 0.95, depthWrite: false });
    const tilt = new THREE.Group();
    tilt.add(new THREE.Points(geometry, material));
    scene.add(tilt);
    wave(0);

    // follow the color theme picker
    function setColor() {
      material.color.set(getComputedStyle(document.documentElement).getPropertyValue('--accent').trim());
      if (!frame) renderer.render(scene, camera);
    }
    new MutationObserver(setColor).observe(document.documentElement, { attributes: true, attributeFilter: ['data-color', 'data-theme'] });

    let tiltX = 0, tiltY = 0;
    const welcome = intro.closest('.welcome');
    welcome.addEventListener('pointermove', function (e) {
      const box = welcome.getBoundingClientRect();
      tiltX = ((e.clientY - box.top) / box.height - 0.5) * 0.15;
      tiltY = ((e.clientX - box.left) / box.width - 0.5) * 0.25;
      resume();
    });
    welcome.addEventListener('pointerleave', function () {
      tiltX = 0;
      tiltY = 0;
    });

    // only animate while the welcome screen is on screen and the tab is visible
    let frame = 0, onScreen = false;
    function tick(time) {
      frame = 0;
      wave(time);
      tilt.rotation.x += (tiltX - tilt.rotation.x) * 0.05;
      tilt.rotation.y += (tiltY - tilt.rotation.y) * 0.05;
      renderer.render(scene, camera);
      if (onScreen && !document.hidden) frame = requestAnimationFrame(tick);
    }
    function resume() {
      if (!frame && onScreen && !document.hidden) frame = requestAnimationFrame(tick);
    }
    new IntersectionObserver(function (entries) {
      onScreen = entries[0].isIntersecting;
      resume();
    }).observe(canvas);
    document.addEventListener('visibilitychange', resume);

    setColor();
    canvas.classList.add('is-ready');
  }
})();
