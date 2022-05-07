import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AnalyticsComponent } from './containers/analytics/analytics.component';
import { DashboardComponent } from './containers/dash/dash.component';
import { DeliveryComponent } from './containers/delivery/delivery.component';
import { ImagesComponent } from './containers/images/images.component';
import { MessagesComponent } from './containers/messages/messages.component';
import { OrdersComponent } from './containers/orders/orders.component';
import { PayoutsComponent } from './containers/payouts/payouts.component';
import { AddProductComponent } from './containers/products/add-product/add-product.component';
import { ProductListComponent } from './containers/products/product-list/product-list.component';
import { ProductsComponent } from './containers/products/products.component';
import { SettingsComponent } from './containers/settings/settings.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from '../app/containers/auth/login/login.component';
import { RegisterComponent } from '../app/containers/auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component:DashboardComponent ,
        data: {
          title: 'Dashboard'
        }

      },  
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'Products'
        },
        children:[
          {
            path:'product-add',
            component:AddProductComponent,
            data: {
              title: 'Product Add'
            },
            
          },
          {
            path:'product-add/:id',
            component:AddProductComponent,
            data: {
              title: 'Product Add'
            },
            
          },
          {
            path:'',
            component:ProductListComponent,
            data: {
              title: 'Product List'
            },
            
          },
        ]


      },      
      {
        path: 'orders',
        component: OrdersComponent,
        data: {
          title: 'Orders'
        }

      },
      {
        path: 'delivery',
        component: DeliveryComponent,
        data: {
          title: 'Delivery'
        }

      },
      {
        path: 'messages',
        component: MessagesComponent,
        data: {
          title: 'Messages'
        }

      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics'
        }

      },
      {
        path: 'payouts',
        component: PayoutsComponent,
        data: {
          title: 'Payouts'
        }

      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Settings'
        }

      },
      {
        path:'images',
        component:ImagesComponent,
        data:{
          title:'images'
        }
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
