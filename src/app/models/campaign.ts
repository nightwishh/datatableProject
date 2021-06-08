export class Campaign {
  public id: string;
  public created_time: Date;
  public updated_time: Date;
  public name?: string;
  public start_time?: Date;
  public stop_time?: Date;
  public status?: MainStatus;
  public effective_status?: EffectiveStatus;
  public budget_type?: BudgetType;
  public client_budget?: string;
  public daily_budget?: string;
  public lifetime_budget?: string;
  public budget_remaining?: string;
  public spend_cap?: string;
  public ad_account?: string;
}

enum BudgetType {
  DAILY,
  LIFETIME,
}

enum EffectiveStatus {
  ACTIVE,
  PAUSED,
  DELETED,
  ARCHIVED,
  IN_PROCESS,
  WITH_ISSUES,
  CAMPAIGN_PAUSED,
}
enum MainStatus {
  ACTIVE,
  PAUSED,
  DELETED,
  ARCHIVED,
}
