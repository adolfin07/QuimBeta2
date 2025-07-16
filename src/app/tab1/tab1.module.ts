import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';
import { HeaderProductsModule } from './header-products/header-products.module';

import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { HttpClientModule } from '@angular/common/http';
import { QuimagroAboutComponent } from './quimagro-about/quimagro-about.component';
import { QuimagroServicesComponent } from './quimagro-services/quimagro-services.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule,
    HeaderProductsModule,
    HttpClientModule,
  ],
  declarations: [Tab1Page, QuimagroAboutComponent, QuimagroServicesComponent],
  providers: [File, FileOpener],
  exports: [Tab1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1PageModule {}
