'use strict';


const scene = new THREE.Scene();

const fov = 70;
const aspectRatio = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('yellow');
document.body.prepend(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const geometry = new THREE.ConeGeometry(5, 20, 32);
const material = new THREE.MeshPhongMaterial({ color: '#6e6e6e' });
const cone = new THREE.Mesh(geometry, material);
console.log(cone);

cone.scale.set(1, 1, 1);

scene.add(cone);
controls.update();

camera.position.z = 30;

const color = '#fff';
const intensity = 0.7;

const light = new THREE.DirectionalLight(color, intensity);

light.position.set(-1, 4, 4);

scene.add(light);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);

    cone.rotation.x += 0.002;
    cone.rotation.z += 0.002;

    controls.update();
}

animate();
