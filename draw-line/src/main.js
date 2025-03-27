import "./style.css"
import gsap from "gsap"
import DrawSVGPlugin from "gsap/DrawSVGPlugin"
const tl = gsap.timeline()
gsap.registerPlugin(DrawSVGPlugin)

// tl.to("line", { strokeDashoffset: 100 })
tl.to("rect", { strokeDashoffset: 800, duration: 3 })

const curve = document.querySelector(".curve path")
// const length = curve.getTotalLength()
// console.log({ length })
// tl.set(".curve path", {
//   strokeDasharray: length,
//   strokeDashoffset: length,
// })
gsap.from(".curve path", { duration: 1, drawSVG: 0 })
// tl.to(".curve path", {
//   strokeDashoffset: 0,
//   duration: 10,
// })
