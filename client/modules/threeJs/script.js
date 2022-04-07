// import HttpHelper from "common/utils/axios_helper.js";
import { onMounted } from 'vue';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
export default {
    setup() {

        let camera, scene, renderer;

        const init = () => {

            const container = document.createElement( 'div' );
            document.body.appendChild( container );

            camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
            camera.position.set( - 1.8, 0.6, 2.7 );

            scene = new THREE.Scene();

            new RGBELoader()
                .setPath( 'three/equirectangular/' )
                .load( 'royal_esplanade_1k.hdr', function ( texture ) {

                    texture.mapping = THREE.EquirectangularReflectionMapping;

                    scene.background = texture;
                    scene.environment = texture;

                    render();

                    // model

                    const loader = new GLTFLoader().setPath( 'three/DamagedHelmet/glTF/' );
                    loader.load( 'DamagedHelmet.gltf', function ( gltf ) {

                        scene.add( gltf.scene );

                        render();

                    } );

                } );

            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1;
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild( renderer.domElement );

            const controls = new OrbitControls( camera, renderer.domElement );
            controls.addEventListener( 'change', render ); // use if there is no animation loop
            controls.minDistance = 2;
            controls.maxDistance = 10;
            controls.target.set( 0, 0, - 0.2 );
            controls.update();

            window.addEventListener( 'resize', onWindowResize );

        };

        const onWindowResize = () => {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

            render();

        };

        const render = () => {

            renderer.render( scene, camera );

        };

        onMounted(() => {
            init();
            render();
        });

        return {
            
        };
    }
};