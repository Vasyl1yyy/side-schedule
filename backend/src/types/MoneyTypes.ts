export interface Income {
  id: number;
  value: string;
  summa: number;
  description: string;
  date: string;
}

export interface schedule {
  id: number;
  date: string;
  num: number;
  cash: number;
  tips: number;
}
