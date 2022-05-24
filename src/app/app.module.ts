import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import {MatTooltipModule} from '@angular/material/tooltip';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from '../app/containers/auth/login/login.component';
import { AuthSignOutComponent } from '../app/containers/auth/signOut/sign-out.component';
import { RegisterComponent } from '../app/containers/auth/register/register.component';
import { ForgotPasswordComponent } from '../app/containers/auth/forgot-password/forgot-password.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ProductsComponent } from './containers/products/products.component';
import { OrdersComponent } from './containers/orders/orders.component';
import { DeliveryComponent } from './containers/delivery/delivery.component';
import { MessagesComponent } from './containers/messages/messages.component';
import { AnalyticsComponent } from './containers/analytics/analytics.component';
import { PayoutsComponent } from './containers/payouts/payouts.component';
import { SettingsComponent } from './containers/settings/settings.component';
import { DashboardComponent } from './containers/dash/dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { AddProductComponent } from './containers/products/add-product/add-product.component';
import { ProductListComponent } from './containers/products/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { ColorSwatchesModule } from 'ngx-color/swatches';
import { TagInputModule } from 'ngx-chips';
import { ImagesComponent } from './containers/images/images.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthInterceptorService } from 'src/app/containers/auth/auth.interceptor'




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    DataTablesModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgpImagePickerModule,
    ColorSwatchesModule,
    MatTooltipModule,
    TagInputModule,
   

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    OrdersComponent,
    DeliveryComponent,
    MessagesComponent,
    AnalyticsComponent,
    PayoutsComponent,
    SettingsComponent,
    DashboardComponent,
    AddProductComponent,
    ProductListComponent,
    ImagesComponent,
    LoginComponent,
    AuthSignOutComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
     },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
