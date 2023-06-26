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

export interface Trip {
  id: string;
  name: string;
  color: string;
  owner: string;
  hasBudget: boolean;
  budget: string;
  area: string;
  date: string;
}

export interface Access {
  added_at: string;
  tripId: string;
  userId: string;
  adderId: string;
  group: string;
}

export interface Document {
  id: string;
  uploaded_at: string;
  tripId: string;
  userId: string;
  name: string;
  link: string;
}

export interface Spending {
  id: string;
  creatorId: string;
  description: string;
  name: string;
  amount: number;
  category: string;
  group: string;
  created_at: string;
  tripId: string;
}

export interface Image {
  id: string;
  userId: string;
  link: string;
  height: string;
  width: string;
  name: string;
  day: string;
  uploaded_at: string;
  tripId: string;
  fileId: string;
}
