import "./style.css"
import gsap from "gsap"

const tl = gsap.timeline()

// tl.to("line", { strokeDashoffset: 100 })
tl.to("rect", { strokeDashoffset: 800, duration: 3 })

const curve = document.querySelector(".curve path")
const length = curve.getTotalLength()
console.log({ length })
tl.set(".curve path", {
  strokeDasharray: length,
  strokeDashoffset: length,
})
tl.to(".curve path", {
  strokeDashoffset: 0,
  duration: 10,
})
