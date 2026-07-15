import { useReducedMotion as useMotionReducedMotion } from 'motion/react'

/** Respects the visitor's reduced-motion operating-system preference. */
export function useReducedMotion(): boolean {
  return useMotionReducedMotion() ?? false
}
