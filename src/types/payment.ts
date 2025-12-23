export interface Payment {
  id: string
  enrollmentId: string
  studentId: string
  amount: number
  status: 'pending' | 'completed' | 'refunded'
  method: string // "카드", "계좌이체"
  paidAt?: string
  refundedAt?: string
}
