export interface Contractor {
  id: number;
  name: string;
  email: string;
  roleTitle: string;
  country: string;
  countryCode: string;
  flag: string;
  currency: string;
  payoutMethod: 'crypto_usdc' | 'crypto_eth' | 'fiat_bank' | 'stablecoin_usdt';
  walletAddress?: string | null;
  bankAccount?: string | null;
  rate: string;
  rateType: 'hourly' | 'monthly' | 'fixed';
  status: 'active' | 'onboarding' | 'pending_kyc' | 'paused';
  complianceScore: number;
  riseIdVerified: boolean;
  contractType: 'contractor' | 'eor_employee';
  createdAt?: string;
}

export interface PayrollRun {
  id: number;
  title: string;
  period: string;
  totalAmountUsd: string;
  cryptoAmountUsd: string;
  fiatAmountUsd: string;
  contractorCount: number;
  status: 'draft' | 'processing' | 'completed' | 'scheduled';
  initiatedBy: string;
  txHash?: string | null;
  executedAt?: string;
  createdAt?: string;
}

export interface Invoice {
  id: number;
  invoiceNumber: string;
  contractorId?: number;
  contractorName: string;
  description: string;
  amount: string;
  currency: string;
  dueDate: string;
  status: 'pending_approval' | 'approved' | 'paid' | 'rejected';
  createdAt?: string;
}

export interface AuditLog {
  id: number;
  action: string;
  actorEmail: string;
  role: string;
  details: string;
  ipAddress?: string;
  createdAt: string;
}

export interface GlobalStats {
  activeContractorsCount: number;
  totalContractorsCount: number;
  countriesCount: number;
  totalVolumeUsd: number;
  cryptoVolumeUsd: number;
  fiatVolumeUsd: number;
  cryptoPercentage: number;
  complianceRate: number;
  pendingInvoicesCount: number;
  averageSettlementTime: string;
}

export type UserRole = 'super_admin' | 'finance_manager' | 'hr_ops' | 'contractor';

export interface AuthUser {
  uid: string;
  email: string;
  displayName: string;
  photoUrl?: string;
  role: UserRole;
}
