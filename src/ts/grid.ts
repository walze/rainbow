import { Graphics } from "pixi.js"

export interface RectConstructor {
    x: number,
    y: number,
    w: number,
    h: number,
    c?: number,
}

export class Rect extends Graphics {


    public constructor(c: RectConstructor) {
        super()

        this.beginFill(c.c || 0xffffff)
        this.drawRect(c.x, c.y, c.w, c.h)
        this.endFill()
    }
}
