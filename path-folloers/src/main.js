import "./style.css"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

const tl = gsap.timeline()

tl.to(".javascript", {
  motionPath: {
    path: ".js-path",
    align: ".js-path",
    alignOrigin: [0.5, 0.5],
    end: 0.9,
    // autoRotate: true,
  },
  duration: 2,
}).to(
  ".typescript",
  {
    motionPath: {
      path: ".ts-path",
      align: ".ts-path",
      alignOrigin: [0.5, 0.5],
      end: 0.9,
      // autoRotate: true,
    },
    duration: 2,
  },
  "-=1.8"
)
