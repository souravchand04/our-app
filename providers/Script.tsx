import * as THREE from "three";
import { FluidSimulation } from "./FluidSimulation";

interface FluidConfig {
  simResolution: number;
  dyeResolution: number;
  curl: number;
  pressureIterations: number;
  velocityDissipation: number;
  dyeDissipation: number;
  splatRadius: number;
  forceStrength: number;
  pressureDecay: number;
  threshold: number;
  edgeSoftness: number;
  inkColor: THREE.Color;
}

const config: FluidConfig = {
  simResolution: 256,
  dyeResolution: 1024,
  curl: 25,
  pressureIterations: 50,
  velocityDissipation: 0.95,
  dyeDissipation: 0.95,
  splatRadius: 0.275,
  forceStrength: 7.5,
  pressureDecay: 0.75,
  threshold: 1.0,
  edgeSoftness: 0.0,
  inkColor: new THREE.Color(1, 1, 1),
};

const canvas = document.getElementById("fluid") as HTMLCanvasElement;

if (canvas) {
  new FluidSimulation(canvas, config, canvas);
}