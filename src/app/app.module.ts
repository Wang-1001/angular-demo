import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { StudentListComponent } from './student-list/student-list.component';
import { DepListComponent } from './dep-list/dep-list.component';
import {DepService} from './service/dep.service';

registerLocaleData(zh);

@NgModule({
  /*声明组件*/
  declarations: [
    AppComponent ,
    DepListComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    NgZorroAntdModule,
    /* Http请求 */
    HttpClientModule,
    BrowserAnimationsModule,
    /* 响应式表单*/
    ReactiveFormsModule
  ],
  /*放所有的组件  告诉模块有多少服务*/
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, DepService],
  /*启动*/
  bootstrap: [AppComponent]
})
export class AppModule { }
