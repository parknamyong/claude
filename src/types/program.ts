export interface Program {
  id: string
  name: string
  slug: string // "basic", "vocal", "instrument"
  shortDescription: string
  description: string
  curriculum: string[]
  targetGrade: string
  duration: string
  price: number
  image: string
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
