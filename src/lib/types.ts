export type Revenue = {
  date: string;
  brute: number;
  tiersPayant: number;
  credit: number;
  remise: number;
};

export type Order = {
  id: string;
  supplier: string;
  date: string;
  amount: number;
  status: 'Payée' | 'Non payée';
};

export type Sale = {
  id: string;
  product: string;
  date: string;
  amount: number;
  type: 'Comptant' | 'Assurance';
};
