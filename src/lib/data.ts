import type { Revenue, Order, Sale } from './types';

const today = new Date();
const generateDate = (daysAgo: number) => {
    const date = new Date(today);
    date.setDate(today.getDate() - daysAgo);
    return date.toISOString().split('T')[0];
};

export const revenueData: Revenue[] = Array.from({ length: 30 }, (_, i) => {
    const date = generateDate(29 - i);
    const brute = Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000;
    const tiersPayant = Math.floor(brute * (Math.random() * 0.4 + 0.2)); // 20-60% of brute
    const credit = Math.floor(brute * (Math.random() * 0.1 + 0.05)); // 5-15% of brute
    const remise = Math.floor(brute * (Math.random() * 0.05)); // 0-5% of brute
    return {
        date,
        brute,
        tiersPayant,
        credit,
        remise,
    };
});

export const ordersData: Order[] = [
    { id: 'ORD001', supplier: 'Grossiste A', date: generateDate(1), amount: 2540.50, status: 'Payée' },
    { id: 'ORD002', supplier: 'Fournisseur B', date: generateDate(2), amount: 1200.00, status: 'Non payée' },
    { id: 'ORD003', supplier: 'Grossiste C', date: generateDate(2), amount: 780.75, status: 'Payée' },
    { id: 'ORD004', supplier: 'Grossiste A', date: generateDate(5), amount: 3100.00, status: 'Non payée' },
    { id: 'ORD005', supplier: 'Fournisseur D', date: generateDate(7), amount: 950.20, status: 'Payée' },
    { id: 'ORD006', supplier: 'Fournisseur B', date: generateDate(10), amount: 1800.00, status: 'Payée' },
];

export const salesData: Sale[] = [
    { id: 'SALE001', product: 'Paracétamol 1g', date: generateDate(0), amount: 5.50, type: 'Comptant' },
    { id: 'SALE002', product: 'Amoxicilline 500mg', date: generateDate(0), amount: 12.75, type: 'Assurance' },
    { id: 'SALE003', product: 'Vitamine C', date: generateDate(1), amount: 8.00, type: 'Comptant' },
    { id: 'SALE004', product: 'Doliprane 1000mg', date: generateDate(1), amount: 3.50, type: 'Comptant' },
    { id: 'SALE005', product: 'Spasfon', date: generateDate(1), amount: 4.20, type: 'Assurance' },
    { id: 'SALE006', product: 'Imodium', date: generateDate(2), amount: 6.80, type: 'Comptant' },
];
