export interface WeeklyPlanItem {
  week: number
  title: string
  description: string
}

export interface ProgramHighlight {
  icon: string
  title: string
  description: string
}

export interface Program {
  id: string
  name: string
  slug: string // "basic", "vocal", "instrument"
  shortDescription: string
  description: string
  curriculum: string[]
  targetGrade: string
  duration: string
  sessions: number // 회차 (4회, 6회 등)
  price: number
  image: string
  // 상세 페이지용 확장 필드
  features: string[] // 제공 내용
  weeklyPlan: WeeklyPlanItem[] // 주차별 커리큘럼
  highlights: ProgramHighlight[] // 차별점 3가지
}

export interface ClassSlot {
  id: string
  programId: string
  name: string // "월수 A반"
  dayOfWeek: string[] // ["월", "수"]
  time: string // "15:00-15:50"
  capacity: number
  enrolled: number
  waitlist: number
  status: 'open' | 'closed'
}
