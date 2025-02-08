import "./style.css"
import gsap from "gsap"

gsap.to("circle", { attr: { r: 250 } })
gsap.to("path", {
  attr: {
    d: "M 98.883 198.187 C 112.471 286.759 170.486 366.424 200 200 C 227.31 46.001 290.059 84.454 300 200",
  },
})
