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
  people: string[];
  groups: Group[];
  hasBudget: boolean;
  budget: string;
  area: string;
  date: string;
  images: DayImages[] | [];
  documents: Document[];
}

export interface Group {
  groupName: string;
  people: string[];
}
export interface DayImages {
  DayImages: Image[];
}
export interface Image {
  owner: string;
  url: string;
}

export interface Document {
  name: string;
  url: string;
}
