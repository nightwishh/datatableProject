import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CampaignComponent } from './campaign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [CampaignComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    TriStateCheckboxModule,
    DropdownModule,
    BrowserAnimationsModule,
  ],
})
export class CampaignModule {}
