declare module "scrollmagic-plugin-gsap" {
  const ScrollMagicPluginGsap: any;
  export = ScrollMagicPluginGsap;
}

declare module "scrollmagic" {
  import { TimelineMax } from "gsap";
  import { TweenLite } from "gsap";

  export class Scene {
    constructor(options?: any);
    setTween(tween: TweenLite | TimelineMax): this;
    setTween(element: any, duration: number, tween: any): this;
    addTo(controller: any): this;
    destroy(reset?: boolean): this;
  }

  export class Controller {
    constructor(options?: any);
    addScene(scene: Scene): this;
    destroy(reset?: boolean): this;
  }
}
