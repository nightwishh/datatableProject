import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Campaign } from '../models/campaign';
import { CampaignService } from './campaign.service';

@Component({
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {
  constructor(private campaignService: CampaignService) {}
  campaigns: Campaign[];
  totalRecords: number = 0;
  first: number = 0;
  last: number = 0;

  loading: boolean = true;
  statuses: any[];
  budgetTypes: any[];
  selectedCampaigns: Campaign[] = [];
  cols: any[];
  _selectedColumns: any[];

  ngOnInit(): void {
    this.statuses = [
      { label: 'ACTIVE', value: 'ACTIVE' },
      { label: 'PAUSED', value: 'PAUSED' },
      { label: 'DELETED', value: 'DELETED' },
      { label: 'ARCHIVED', value: 'ARCHIVED' },
    ];
    this.budgetTypes = [
      {
        label: 'DAILY',
        value: 'DAILY',
      },
      { label: 'LIFETIME', value: 'LIFETIME' },
    ];
    this.cols = [
      { field: 'name', header: 'Campaign Name' },
      { field: 'start_time', header: 'Start Date' },
      { field: 'stop_time', header: 'End Date' },
      { field: 'campaign_lead', header: 'Campaign Lead' },
      { field: 'last_changed_by', header: 'Last Changed By' },
      { field: 'status', header: 'Status' },
      { field: 'budget_type', header: 'Ad Set Budget Type' },
    ];
    this.selectedColumns = this.cols;
  }

  loadCampaigns(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      this.campaignService
        .getCampaigns({ lazyEvent: JSON.stringify(event) })
        .then((res) => {
          this.campaigns = <Campaign[]>res.data;
          this.totalRecords = res.totalRecords;
          this.first = res.first;
          this.last = res.last;
          this.loading = false;
          console.log(this.campaigns);
          this.campaigns.forEach((campaign) => {
            campaign.created_time = new Date(campaign.created_time);
            campaign.updated_time = new Date(campaign.updated_time);
            campaign.start_time = new Date(campaign.start_time);
            campaign.stop_time = new Date(campaign.stop_time);
          });
        });
    }, 500);
  }
  clear(table: Table) {
    table.clear();
  }

  get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }

  columnVisible(fieldName: string) {
    if (this.selectedColumns.findIndex((x) => x.field == fieldName) > -1)
      return true;
    return false;
  }
}
