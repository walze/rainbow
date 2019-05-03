
import { Application } from 'pixi.js'
import { Rect } from './ts/grid'

const {
    innerWidth: wWidth,
    innerHeight: wHeight,
} = window

if (wWidth < 800) alert('Mobile is not supported')

export const APP = new Application({
    view: document.querySelector('#canvas') as HTMLCanvasElement,
    width: wWidth,
    height: wHeight,
    forceFXAA: true,
    powerPreference: "high-performance",
})

const r1 = new Rect({
    x: 100,
    y: 100,
    w: 100,
    h: 100,
    c: 0xFFF,
})

APP.stage.addChild(r1)

export const ticker = APP.ticker.add((dt: number) => {

    r1.x += (Math.random() >= .5 ? Math.random() : -Math.random()) * dt
})
