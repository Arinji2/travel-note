export interface User {
  id: string;
  email: string;
  username: string;
  trips: UserTrip[];
  created_at: string;
}

export interface UserTrip {
  id: string;
  name: string;
  people: number;
  status: string;
  departure: string;
  area: string;

  role: string;
}
