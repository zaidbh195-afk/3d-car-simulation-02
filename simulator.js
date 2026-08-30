import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);
camera.position.set(6, 4, 8);
camera.lookAt(0, 0, 0);
const groundGeometry = new THREE.PlaneGeometry(100, 100);

const groundMaterial = new THREE.MeshBasicMaterial({
    color: 0x444444,
    side: THREE.DoubleSide
});

const ground = new THREE.Mesh(
    groundGeometry,
    groundMaterial
);

scene.add(ground);

ground.rotation.x = -Math.PI / 2;
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
const carGeometry = new THREE.BoxGeometry(2, 1, 4);
const carMaterial = new THREE.MeshBasicMaterial({
    color: 0x1565c0
});
const carBody = new THREE.Mesh(
    carGeometry,
    carMaterial
);
scene.add(carBody);
carBody.position.y = 0.5;
const wheelGeometry = new THREE.CylinderGeometry(
    0.5,
    0.5,
    0.5,
    32
);

const wheelMaterial = new THREE.MeshBasicMaterial({
    color: 0x111111
});
function createWheel(x, y, z) {

    const wheel = new THREE.Mesh(
        wheelGeometry,
        wheelMaterial
    );

    wheel.position.set(x, y, z);

    wheel.rotation.z = Math.PI / 2;

    scene.add(wheel);

    return wheel;
}
const frontLeftWheel = createWheel(-1.2, 0.5, -1.2);
const frontRightWheel = createWheel(1.2, 0.5, -1.2);

const rearLeftWheel = createWheel(-1.2, 0.5, 1.2);
const rearRightWheel = createWheel(1.2, 0.5, 1.2);
