import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './collections/biography/biography.component';
import { CompaniesComponent } from './collections/companies/companies.component';
import { PartnersComponent } from './collections/partners/partners.component';
import { TabsComponent } from './collections/tabs/tabs.component';

@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent, BiographyComponent, CompaniesComponent, PartnersComponent, TabsComponent],
  imports: [CommonModule, CollectionsRoutingModule, SharedModule]
})
export class CollectionsModule {}
