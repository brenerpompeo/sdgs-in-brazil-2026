import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Flip } from "gsap/Flip";
import { Observer } from "gsap/Observer";
import { Draggable } from "gsap/Draggable";

// Register core robust GSAP plugins
gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollToPlugin,
  Flip,
  Observer,
  Draggable
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
