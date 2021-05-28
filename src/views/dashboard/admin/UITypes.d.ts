export interface UIPanelGroupData {
  rptDayCount: number
  rptNewUsers: number
  rptOnlineUsers: number
  rptActiveUsers: number
}

export interface ILineChartData {
  activeUsersOfWeek: number[]
  rptOfWeek: number[]
}

export interface IPieChartData {
  legendData : string[]
  seriesData: IPieData[]
}

export interface IPieData {
  value: number
  name: string
}

export interface IBarData {
  name: string
  type: string
  stack: string
  // barWidth: '60%',
  data: number[]
  animationDuration: number
}
