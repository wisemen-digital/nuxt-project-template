import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin({
  name: 'gsap',
  parallel: true,
  setup() {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSRulePlugin, ScrollToPlugin, TextPlugin)

    return {
      provide: {
        gsap,
        scrollTrigger: ScrollTrigger,
      },
    }
  },
})
