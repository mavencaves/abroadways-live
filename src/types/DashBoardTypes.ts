export interface DashboardCards {
  totalUsers: number;
  newUsers: number;
  activeUsers: number;
  rewardedUsers: number;
}

export interface VisitorData {
  day: string;
  count: number;
}

export interface CountryData {
  name: string;
  value: number;
}

export interface UpdateData {
  id: number;
  type: string;
  title: string;
  date: string;
  status: string;
}

export interface DashboardData {
  cards: DashboardCards;
  visitors: VisitorData[];
  countries: CountryData[];
  updates: UpdateData[];
}
