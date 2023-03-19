import facepaint from 'facepaint'

// galaxy fold = 280
// 다른 기기의 breakpoint tailwindcss 참고
const breakpoints = [280, 640, 768, 1024]

// mobile first 로 디자인하려면 min-width 로 설정해야함
export const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))