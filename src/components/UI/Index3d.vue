<template>
    <div><div id="container3d"></div></div>
</template>
<script lang="ts" setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
let mixer: any = null;

onMounted(() => {
    const clock = new THREE.Clock();
    const container = document.getElementById('container3d');
    const containerBody = document.getElementsByTagName('body');
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(500, 500);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container?.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xbfe3dd);
    renderer.setClearAlpha(0);

    // const texture = new THREE.TextureLoader().load(
    //     '/_nuxt/assets/images/hero-gradient.svg',
    // );
    // scene.background = texture;
    scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04,
    ).texture;

    const camera = new THREE.PerspectiveCamera(40, 1, 1, 100);
    camera.position.set(-2, 2, 20);

    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.target.set( 0, 0.5, 0 );
    // controls.update();
    // controls.enablePan = true;
    // controls.enableDamping = true;
    // controls.enableZoom = false; //鼠标缩放
    // controls.minDistance = 0;
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('jsm/libs/draco/gltf/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
        '/3dmodule/cat/scene.gltf',
        function (gltf) {
            const model = gltf.scene;
            model.position.set(0, 0, 0);
            model.scale.set(0.15, 0.15, 0.15);
            scene.add(model);

            mixer = new THREE.AnimationMixer(model);
            mixer.clipAction(gltf.animations[0]).play();

            animate();
        },
        undefined,
        function (e) {
            console.error(e);
        },
    );

    // window.onresize = function () {

    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();

    //     renderer.setSize( window.innerWidth, window.innerHeight );

    // };

    function animate() {
        requestAnimationFrame(animate);

        const delta = clock.getDelta();

        mixer.update(delta);

        controls.update();

        // stats.update();

        renderer.render(scene, camera);
    }
});
</script>
<style scoped>
#container3d {
    height: 500px;
    width: 500px;
    position: fixed;
    bottom: 0px;
    right: 50%;
}
</style>
