import { boolean, integer, numeric, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table (maps Firebase Auth UID to relational record)
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(),
  email: text('email').notNull(),
  displayName: text('display_name'),
  photoUrl: text('photo_url'),
  role: text('role').notNull().default('admin'), // 'admin', 'finance_manager', 'hr_ops', 'contractor'
  companyName: text('company_name').default('Rise Global Technologies'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Contractors & Employees roster
export const contractors = pgTable('contractors', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  roleTitle: text('role_title').notNull(),
  country: text('country').notNull(),
  countryCode: text('country_code').notNull(),
  flag: text('flag').notNull(),
  currency: text('currency').notNull().default('USD'),
  payoutMethod: text('payout_method').notNull().default('crypto_usdc'), // 'crypto_usdc', 'crypto_eth', 'fiat_bank', 'stablecoin_usdt'
  walletAddress: text('wallet_address'),
  bankAccount: text('bank_account'),
  rate: numeric('rate', { precision: 12, scale: 2 }).notNull().default('5000.00'),
  rateType: text('rate_type').notNull().default('monthly'), // 'hourly', 'monthly', 'fixed'
  status: text('status').notNull().default('active'), // 'active', 'onboarding', 'pending_kyc', 'paused'
  complianceScore: integer('compliance_score').notNull().default(100),
  riseIdVerified: boolean('rise_id_verified').notNull().default(true),
  contractType: text('contract_type').notNull().default('contractor'), // 'contractor', 'eor_employee'
  createdAt: timestamp('created_at').defaultNow(),
});

// Payroll Runs
export const payrollRuns = pgTable('payroll_runs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  period: text('period').notNull(),
  totalAmountUsd: numeric('total_amount_usd', { precision: 14, scale: 2 }).notNull(),
  cryptoAmountUsd: numeric('crypto_amount_usd', { precision: 14, scale: 2 }).notNull().default('0'),
  fiatAmountUsd: numeric('fiat_amount_usd', { precision: 14, scale: 2 }).notNull().default('0'),
  contractorCount: integer('contractor_count').notNull().default(0),
  status: text('status').notNull().default('completed'), // 'draft', 'processing', 'completed', 'scheduled'
  initiatedBy: text('initiated_by').notNull().default('System Automated'),
  txHash: text('tx_hash'),
  executedAt: timestamp('executed_at').defaultNow(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Payroll Items (Line items for each contractor in a run)
export const payrollItems = pgTable('payroll_items', {
  id: serial('id').primaryKey(),
  payrollRunId: integer('payroll_run_id').references(() => payrollRuns.id),
  contractorId: integer('contractor_id').references(() => contractors.id),
  contractorName: text('contractor_name').notNull(),
  amount: numeric('amount', { precision: 12, scale: 2 }).notNull(),
  currency: text('currency').notNull(),
  payoutMethod: text('payout_method').notNull(),
  status: text('status').notNull().default('paid'), // 'paid', 'pending', 'failed'
  txHash: text('tx_hash'),
  paidAt: timestamp('paid_at').defaultNow(),
});

// Invoices submitted by global contractors
export const invoices = pgTable('invoices', {
  id: serial('id').primaryKey(),
  invoiceNumber: text('invoice_number').notNull().unique(),
  contractorId: integer('contractor_id').references(() => contractors.id),
  contractorName: text('contractor_name').notNull(),
  description: text('description').notNull(),
  amount: numeric('amount', { precision: 12, scale: 2 }).notNull(),
  currency: text('currency').notNull().default('USD'),
  dueDate: text('due_date').notNull(),
  status: text('status').notNull().default('pending_approval'), // 'pending_approval', 'approved', 'paid', 'rejected'
  createdAt: timestamp('created_at').defaultNow(),
});

// Enterprise Audit Logs
export const auditLogs = pgTable('audit_logs', {
  id: serial('id').primaryKey(),
  action: text('action').notNull(),
  actorEmail: text('actor_email').notNull(),
  role: text('role').notNull(),
  details: text('details').notNull(),
  ipAddress: text('ip_address').default('127.0.0.1'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Demo requests from prospective clients
export const demoRequests = pgTable('demo_requests', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company').notNull(),
  teamSize: text('team_size').notNull(),
  primaryNeed: text('primary_need').notNull(),
  status: text('status').notNull().default('new'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Relations
export const contractorsRelations = relations(contractors, ({ many }) => ({
  payrollItems: many(payrollItems),
  invoices: many(invoices),
}));

export const payrollRunsRelations = relations(payrollRuns, ({ many }) => ({
  items: many(payrollItems),
}));

export const payrollItemsRelations = relations(payrollItems, ({ one }) => ({
  run: one(payrollRuns, {
    fields: [payrollItems.payrollRunId],
    references: [payrollRuns.id],
  }),
  contractor: one(contractors, {
    fields: [payrollItems.contractorId],
    references: [contractors.id],
  }),
}));
