import "./style.css"
import gsap from "gsap"

const ts = gsap.timeline()

ts.to("line", { strokeDashoffset: 40 })
