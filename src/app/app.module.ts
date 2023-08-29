import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { DefinitionPageComponent } from './pages/definition-page/definition-page.component';
import { ChooseProdPageComponent } from './pages/choose-prod-page/choose-prod-page.component';
import { ExcludeProdPageComponent } from './pages/exclude-prod-page/exclude-prod-page.component';
import { ChooseClientsPageComponent } from './pages/choose-clients-page/choose-clients-page.component';
import { ExcludeClientsPageComponent } from './pages/exclude-clients-page/exclude-clients-page.component';
import { ClientsLimitsPageComponent } from './pages/clients-limits-page/clients-limits-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        DefinitionPageComponent,
        ChooseProdPageComponent,
        ChooseClientsPageComponent,
        ClientsLimitsPageComponent,
        SummaryPageComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        LayoutModule,
        RouterModule.forRoot([
            { path: 'definition', component: DefinitionPageComponent },
            { path: 'choose-products', component: ChooseProdPageComponent },
            { path: 'exclude-products', component: ExcludeProdPageComponent },
            { path: 'choose-clients', component: ChooseClientsPageComponent },
            { path: 'exclude-clients', component: ExcludeClientsPageComponent },
            { path: 'clients-limits', component: ClientsLimitsPageComponent },
            { path: 'summary', component: SummaryPageComponent },
            { path: '**', redirectTo: 'definition' }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
