export enum Ease {
  tween = "tween",
  spring = "spring",
  easeIn = "easeIn",
  easeOut = "easeOut",
}

export enum StateValues {
  hidden = "hidden",
  show = "show",
}

export interface StaggerVariant {
  [key: string]:
    | {
        opacity?: number;
        x?: number | string;
        y?: number | string;
        transition?: {
          type?: string;
          ease?: Ease;
          staggerChildren?: number;
          delayChildren?: number;
          stiffness?: number;
          duration?: number;
          delay?: number;
        };
      }
    | ((i: number) => {
        opacity?: number;
        transition?: {
          type?: string;
          ease?: Ease;
          staggerChildren?: number;
          delayChildren?: number;
          stiffness?: number;
          delay?: number;

          duration?: number;
        };
      });
}
