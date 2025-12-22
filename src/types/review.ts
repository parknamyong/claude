export interface Review {
  id: string
  programId: string
  parentName: string
  studentGrade: string
  content: string
  rating: number // 1-5
  createdAt: string
}
