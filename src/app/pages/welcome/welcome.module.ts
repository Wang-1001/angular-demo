import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  /*后面继续添加组件*/
  declarations: [WelcomeComponent],
  /* 导出组件 被放在 declarations 的组件时可以被调用的*/
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
