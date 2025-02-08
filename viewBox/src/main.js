import "./style.css"

import gsap from "gsap"

let tl = gsap.timeline()

tl.to("#viewBoxAnimation", {
  attr: {
    viewBox: "0 0 100 100",
  },
})
  .to("#viewBoxAnimation", {
    attr: {
      viewBox: "0 100 100 100",
    },
  })
  .to("#viewBoxAnimation", {
    attr: {
      viewBox: "100 100 100 100",
    },
  })
  .to("#viewBoxAnimation", {
    attr: {
      viewBox: "100 0 100 100",
    },
  })
