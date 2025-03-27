import "./style.css"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

const tl = gsap.timeline()

// tl.to(".javascript", {
//   motionPath: {
//     path: ".js-path",
//     align: ".js-path",
//     alignOrigin: [0.5, 0.5],
//     end: 0.9,
//     // autoRotate: true,
//   },
//   duration: 2,
// }).to(
//   ".typescript",
//   {
//     motionPath: {
//       path: ".ts-path",
//       align: ".ts-path",
//       alignOrigin: [0.5, 0.5],
//       end: 0.9,
//       // autoRotate: true,
//     },
//     duration: 2,
//   },
//   "-=1.8"
// )

// const firstPath = document.querySelector("#path-first")

// let length = firstPath.getTotalLength()
// console.log({ length })

// gsap.set(firstPath, {
//   strokeDasharray: length,
//   strokeDashoffset: length,
// })
// // gsap.set(".vite", {
// //   rotate: 270,
// // })

// gsap.set(".vite", {
//   scale: 0,
// })
// tl.to(firstPath, {
//   strokeDashoffset: 0,
//   duration: 3,
// }).to(".vite", {
//   motionPath: {
//     path: "#path-first",
//     align: "#path-first",
//     alignOrigin: [0.5, 0.5],

//     autoRotate: -90,
//   },
//   scale: 0.1,
//   duration: 3,
// })

const paths = document.querySelectorAll(".tooling-path")
const pics = document.querySelectorAll(".toolings")

const pathArray = gsap.utils.toArray(paths)
const picsArray = gsap.utils.toArray(pics)
console.log({ picsLen: picsArray.length, pathLen: pathArray.length })
tl.to(pathArray, {
  strokeDasharray: length,
  strokeDashoffset: length,
})

pathArray.forEach((path) => {
  let length = path.getTotalLength()
  tl.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  })
})
tl.to(pathArray, {
  strokeDashoffset: 0,
  stagger: 0.08,
}).to(
  picsArray,
  {
    duration: 3,
    motionPath: function (index, target) {
      console.log(target)
      return {
        path: pathArray[index],
        align: pathArray[index],
        alignOrigin: [0.5, 0.5],
        ...(index === 0 ? { autoRotate: -90 } : {}),
      
      }
    },
    stagger: 0.07,
  },
  "-=1"
)
