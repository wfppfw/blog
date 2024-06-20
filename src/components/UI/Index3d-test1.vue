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
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
// import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';

let mixer: any = null;

onMounted(() => {
    const clock = new THREE.Clock();
    const container = document.getElementById('container3d');
    const containerBody = document.getElementsByTagName('body');
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        premultipliedAlpha: false,
    });
    // 获取你屏幕对应的设备像素比.devicePixelRatio告诉threejs,以免渲染模糊问题
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(500, 500);
    renderer.outputEncoding = THREE.sRGBEncoding;
    //新版本，加载gltf，不需要执行下面代码解决颜色偏差
    // renderer.outputColorSpace = THREE.SRGBColorSpace; //设置为SRGB颜色空间

    container?.appendChild(renderer.domElement);

    // const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#00FFFF');
    renderer.setClearAlpha(0);

    // 创建后处理对象EffectComposer，WebGL渲染器作为参数
    const composer = new EffectComposer(renderer);

    // const texture = new THREE.TextureLoader().load(
    //     '/_nuxt/assets/images/hero-gradient.svg',
    // );
    // scene.background = texture;

    // scene.environment = pmremGenerator.fromScene(
    //     new RoomEnvironment(),
    //     0.04,
    // ).texture;

    const camera = new THREE.PerspectiveCamera(40, 1, 1, 100);
    camera.position.set(-2, 2, 20);

    // 创建点光源并设置颜色
    const pointLight = new THREE.AmbientLight(0xff0000, 0.5); // 红色光源

    // 设置光源位置
    pointLight.position.set(10, 10, 10);

    // 将光源添加到场景
    scene.add(pointLight);
    // 创建一个渲染器通道，场景和相机作为参数
    const renderPass = new RenderPass(scene, camera);

    // 设置renderPass通道
    composer.addPass(renderPass);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    // controls.update();
    controls.enablePan = true;
    controls.enableDamping = true;
    controls.enableZoom = false; //鼠标缩放
    // controls.minDistance = 0;
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('jsm/libs/draco/gltf/');

    // 创建OutlinePass通道
    const v2 = new THREE.Vector2(window.innerWidth, window.innerHeight);
    const outlinePass = new OutlinePass(v2, scene, camera);
    // outlinePass.selectedObjects = [mesh];
    outlinePass.visibleEdgeColor.set(0xff0000);
    outlinePass.edgeThickness = 4;
    outlinePass.edgeStrength = 6;
    composer.addPass(outlinePass);

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
        '/3dmodule/cat/scene.gltf',
        function (gltf) {
            const model = gltf.scene;
            model.position.set(0, 0, 0);
            model.scale.set(0.15, 0.15, 0.15);

            // 设置不透明材质
            gltf.scene.traverse((child: any) => {
                console.log(child);
                if (child?.isMesh) {
                    // child.material.metalness = 0.5;
                    // if (child.material.map) {
                    //     //判断是否存在贴图
                    //     console.log('.encoding', child.material.map.encoding);
                    // }
                    // child.material = new THREE.MeshLambertMaterial({
                    // wireframe: true,
                    // color: 0xffffff,
                    // });
                }
            });
            // gltf.scene.traverse((child: any) => {
            //     if (child.isMesh) {
            //         // child.frustumCulled = false;
            //         child.castShadow = true;
            //         // child.material.emissive = child.material.color;
            //         // child.material.emissiveMap = child.material.map;
            //     }
            // });

            scene.add(model);

            // mixer = new THREE.AnimationMixer(model);
            // mixer.clipAction(gltf.animations[0]).play();

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
        composer.render();
        // renderer.render(scene, camera);
        // requestAnimationFrame(render);

        requestAnimationFrame(animate);

        // const delta = clock.getDelta();

        // mixer.update(delta);

        // controls.update();

        // stats.update();

        // renderer.render(scene, camera);
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
