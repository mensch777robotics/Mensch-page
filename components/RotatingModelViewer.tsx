import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

type RotatingModelViewerProps = {
    modelUrl: string;
    alt: string;
    className?: string;
};

export const RotatingModelViewer: React.FC<RotatingModelViewerProps> = ({ modelUrl, alt, className }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const initialRotationY = -Math.PI / 2;

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
        camera.position.set(0, 0.18, 3.1);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 1.8));

        const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
        keyLight.position.set(3, 4, 5);
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0x9cc7ff, 1.1);
        fillLight.position.set(-4, 1, 3);
        scene.add(fillLight);

        const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
        rimLight.position.set(-2, 3, -4);
        scene.add(rimLight);

        let modelRoot: THREE.Group | null = null;
        let animationFrame = 0;
        let resizeObserver: ResizeObserver | null = null;
        let isDragging = false;
        let lastPointerX = 0;

        const fitModelToFrame = (object: THREE.Object3D, width: number) => {
            const box = new THREE.Box3().setFromObject(object);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const isMobile = width < 640;
            const targetFill = isMobile ? 1.0812 : width < 1024 ? 1.1628 : 1.2036;
            const cameraHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5));
            const cameraWidth = cameraHeight * camera.aspect;
            const heightDistance = size.y / cameraHeight;
            const widthDistance = size.x / cameraWidth;
            const distance = Math.max(heightDistance, widthDistance) / targetFill;

            object.position.x -= center.x;
            object.position.y -= center.y;
            object.position.z -= center.z;

            camera.position.set(0, isMobile ? 0.12 : 0.08, distance + Math.max(size.z, 0.15));
            camera.lookAt(0, 0, 0);
        };

        const onResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;

            if (width === 0 || height === 0) {
                return;
            }

            const isMobile = width < 640;
            camera.fov = isMobile ? 34 : 30;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);

            if (modelRoot) {
                fitModelToFrame(modelRoot, width);
            }
        };

        const loader = new GLTFLoader();
        loader.setMeshoptDecoder(MeshoptDecoder);
        loader.load(
            modelUrl,
            (gltf: { scene: THREE.Group }) => {
                modelRoot = gltf.scene;
                modelRoot.rotation.y = initialRotationY;
                scene.add(modelRoot);
                onResize();
            },
            undefined,
            () => {
                const fallback = new THREE.Mesh(
                    new THREE.SphereGeometry(0.9, 32, 32),
                    new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.15, roughness: 0.35 })
                );
                modelRoot = new THREE.Group();
                modelRoot.add(fallback);
                scene.add(modelRoot);
                onResize();
            }
        );

        const animate = () => {
            animationFrame = window.requestAnimationFrame(animate);

            if (modelRoot) {
                modelRoot.rotation.y += 0.009;
            }

            renderer.render(scene, camera);
        };

        const onPointerDown = (event: PointerEvent) => {
            isDragging = true;
            lastPointerX = event.clientX;
            container.setPointerCapture(event.pointerId);
        };

        const onPointerMove = (event: PointerEvent) => {
            if (!isDragging || !modelRoot) {
                return;
            }

            const deltaX = event.clientX - lastPointerX;
            lastPointerX = event.clientX;
            modelRoot.rotation.y += deltaX * 0.01;
        };

        const onPointerUp = (event: PointerEvent) => {
            isDragging = false;
            if (container.hasPointerCapture(event.pointerId)) {
                container.releasePointerCapture(event.pointerId);
            }
        };

        resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(container);
        container.style.touchAction = 'none';
        container.addEventListener('pointerdown', onPointerDown);
        container.addEventListener('pointermove', onPointerMove);
        container.addEventListener('pointerup', onPointerUp);
        container.addEventListener('pointercancel', onPointerUp);
        onResize();
        animate();

        return () => {
            window.cancelAnimationFrame(animationFrame);
            resizeObserver?.disconnect();
            container.removeEventListener('pointerdown', onPointerDown);
            container.removeEventListener('pointermove', onPointerMove);
            container.removeEventListener('pointerup', onPointerUp);
            container.removeEventListener('pointercancel', onPointerUp);
            renderer.dispose();

            scene.traverse((child: THREE.Object3D) => {
                if (child instanceof THREE.Mesh) {
                    child.geometry.dispose();

                    if (Array.isArray(child.material)) {
                        child.material.forEach((material: THREE.Material) => material.dispose());
                    } else {
                        child.material.dispose();
                    }
                }
            });

            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [modelUrl]);

    return (
        <div className={className ?? 'h-full w-full'}>
            <div ref={containerRef} className="h-full w-full" aria-label={alt} role="img" />
        </div>
    );
};