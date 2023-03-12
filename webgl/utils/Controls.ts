import type * as THREE from 'three'
import GSAP from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ASScroll from '@ashthornton/asscroll'
import type Airplane from '../objects/Airplane'
import type { ThreeObject } from '~/types/object'

export default class CameraControls implements ThreeObject {
  private scene: THREE.Scene
  private airplane: Airplane
  private asscroll: ASScroll

  private firstMoveTimeline: GSAPTimeline | undefined
  private secondMoveTimeline: GSAPTimeline | undefined

  constructor(scene: THREE.Scene, airplane: Airplane) {
    this.scene = scene
    this.airplane = airplane

    // this.scene.add(curveObject)
    GSAP.registerPlugin(ScrollTrigger)

    this.asscroll = this.setupSmoothScroll()
    this.setupScrollTrigger()
  }

  private setupSmoothScroll() {
    const asscroll = new ASScroll({
      ease: 0.05,
      disableRaf: true,
    })

    GSAP.ticker.add(asscroll.update)

    ScrollTrigger.defaults({
      scroller: asscroll.containerElement,
    })

    ScrollTrigger.scrollerProxy(asscroll.containerElement, {
      scrollTop(value) {
        if (arguments.length) {
          asscroll.currentPos = value as number
          return
        }
        return asscroll.currentPos
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      fixedMarkers: true,
    })

    asscroll.on('update', ScrollTrigger.update)
    ScrollTrigger.addEventListener('refresh', asscroll.resize)

    requestAnimationFrame(() => {
      asscroll.enable({
        newScrollElements: document.querySelectorAll('.gsap-marker-start, .gsap-marker-end, [asscroll]'),
      })
    })
    return asscroll
  }

  private setupScrollTrigger() {
    const page = GSAP.matchMedia('.page')

    page.add('(min-width: 960px)', () => {
      this.firstMoveTimeline = GSAP.timeline({
        scrollTrigger: {
          trigger: '.first-move',
          start: 'top top',
          end: 'bottom bottom',
          markers: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      this.firstMoveTimeline
        .to(
          this.airplane.airplane?.position as THREE.Vector3,
          {
            z: () => innerWidth * 0.0007,
          },
          'same'
        )
        .fromTo(
          this.airplane.airplane?.rotation as THREE.Euler,
          {
            x: 0,
          },
          {
            x: Math.PI / 5,
          },
          'same'
        )
        .to(
          this.airplane.airplane?.rotation as THREE.Euler,
          {
            x: 0,
          },
          'same+0.5<'
        )

      this.secondMoveTimeline = GSAP.timeline({
        scrollTrigger: {
          trigger: '.second-move',
          start: 'top top',
          end: 'bottom bottom',
          markers: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      this.secondMoveTimeline
        .to(
          this.airplane.airplane?.position as THREE.Vector3,
          {
            z: () => -innerWidth * 0.0007,
          },
          'same'
        )
        .fromTo(
          this.airplane.airplane?.rotation as THREE.Euler,
          {
            x: 0,
          },
          {
            x: -Math.PI / 5,
          },
          'same'
        )
        .to(
          this.airplane.airplane?.rotation as THREE.Euler,
          {
            x: 0,
          },
          'same+0.5<'
        )
    })

    page.add('(max-width: 960px)', () => {
      console.log('mobile ')
    })
  }

  private setup() {}

  public update(delta: number): void {}

  public resize(): void {}
}
