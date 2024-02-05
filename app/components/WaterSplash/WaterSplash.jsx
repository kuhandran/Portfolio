// src/FlowerField.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './WaterSplash.css';

const WaterSplash = () => {
  const group = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // Set white background color
    document.body.appendChild(renderer.domElement);

    const generateFlowers = () => {
      const flowers = new THREE.Group();

      for (let i = 0; i < 20; i++) {
        const geometry = new THREE.TetrahedronGeometry(0.1); // Tetrahedron for flower-like shape
        const material = new THREE.MeshBasicMaterial({ color: 0xf5f5dc });
        const flower = new THREE.Mesh(geometry, material);

        flower.position.x = (Math.random() - 0.5) * 10;
        flower.position.y = Math.random() * 2;
        flower.position.z = (Math.random() - 0.5) * 10;

        flowers.add(flower);
      }

      scene.add(flowers);

      // Animation logic
      const animateFlowers = () => {
        flowers.children.forEach((flower) => {
          flower.rotation.x += 0.01;
          flower.rotation.y += 0.01;

          flower.position.y = Math.sin(flower.rotation.x) * 2; // Adjust the flower's motion
        });
      };

      const animate = () => {
        requestAnimationFrame(animate);

        animateFlowers();

        renderer.render(scene, camera);
      };

      animate();
    };

    generateFlowers();

    camera.position.z = 5;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={group} />;
};

export default WaterSplash;
