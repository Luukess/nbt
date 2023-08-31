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
import { DesktopNavComponent } from './components/desktop-nav/desktop-nav.component';
import { DescriptionformComponent } from './pages/definition-page/descriptionform/descriptionform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogTutorialComponent } from './pages/definition-page/catalog-tutorial/catalog-tutorial.component';
import { ConditionsformComponent } from './pages/definition-page/conditionsform/conditionsform.component';
import { SummarygridComponent } from './pages/summary-page/children-routs/summarygrid/summarygrid.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        DefinitionPageComponent,
        ChooseProdPageComponent,
        ChooseClientsPageComponent,
        ClientsLimitsPageComponent,
        SummaryPageComponent,
        DesktopNavComponent,
        DescriptionformComponent,
        CatalogTutorialComponent,
        ConditionsformComponent,
        SummarygridComponent,
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
        ]),
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
