import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../../theme';
import { DEVICE_MENU } from './device.menu';

@Component({
  selector: 'device',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right" translate>{{'general.powered_by'}}</div>
      <!--<div class="al-footer-right" translate>{{'general.created_with'}} <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://pierdav.com" translate>{{'general.pierdav'}}</a> 2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>-->
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `,
})
export class DeviceComponent {

  user: Object;

  constructor(private _menuService: BaMenuService) {
    try {
        this.user = JSON.parse(localStorage.getItem('token'));
        } catch (e) {
        this.user = {};
        }
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>DEVICE_MENU);
  }
}
