import "./style.css"

import gsap from "gsap"

let tl = gsap.timeline()

tl.to("#mypath", {
  attr: {
    startOffset: 0,
  },
  duration: 3,
  ease: "back.out",
})
