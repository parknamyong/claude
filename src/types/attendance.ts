export interface Attendance {
  id: string
  studentId: string
  classSlotId: string
  date: string
  status: 'present' | 'absent' | 'late'
}
