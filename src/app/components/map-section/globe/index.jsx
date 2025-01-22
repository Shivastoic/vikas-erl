"use client"

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

const GlobeComponent = () => {
    const canvasRef = useRef(null); // Ref for the canvas element
    let phi = 0; // Angle for rotation

    useEffect(() => {
        const canvas = canvasRef.current; // Get the canvas element
        if (!canvas) return;

        // Initialize the globe
        const globe = createGlobe(canvas, {
            devicePixelRatio: 2,
            width: 1200,
            height: 1200,
            phi: 0,
            theta: 0,
            dark: 0,
            diffuse: 1.2,
            scale: 1,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [1, 1, 1],
            markerColor: [1, 0.5, 1],
            glowColor: [2, 0.8, 0.9],
            offset: [0, 0],
            markers: [
                { location: [17.4065, 78.4772], size: 0.1 },
            ],
            onRender: (state) => {
                state.phi = phi; // Update rotation angle
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy(); // Cleanup on component unmount
        };
    }, []); // Empty dependency array to run effect once on mount

    return <canvas ref={canvasRef} className="size-96 lg:size-[600px]" />;
};

export default GlobeComponent;

