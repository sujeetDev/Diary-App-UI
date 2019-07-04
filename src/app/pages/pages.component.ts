import { Component, OnInit } from '@angular/core';
import { NbSidebarService,NB_WINDOW, NbMenuService } from '@nebular/theme';
import {ADMIN_MENU_ITEMS,SUPER_ADMIN_MENU_ITEMS,USER_MENU_ITEMS} from '../shared/menuItem';
import { filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  styles: [`
    :host nb-layout-header a {
      font-size: 2rem;
      text-decoration: none;
    }
    :host nb-layout-column {
      height: 50vw;
    }
    :host nb-layout-column:first-child {
      background: #f4f4f7;
    }
  `]
})
export class PagesComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService,private nbMenuService: NbMenuService,private router: Router) { }
  menu:any;
  role:string;
  items = [{ title: 'Profile' },{ title: 'Logout' }];
  ngOnInit() {
    
    this.role=sessionStorage.getItem('role');
    if(this.role=='admin'){
      this.menu = ADMIN_MENU_ITEMS;
    }else if(this.role=='superadmin'){
      this.menu = SUPER_ADMIN_MENU_ITEMS;
    }else if(this.role=='user'){
      this.menu = USER_MENU_ITEMS;
    }

    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title =>{
        if(title=="Logout"){
          this.router.navigate(['/login']);
        }
      });

  }

  toggle() {
    this.sidebarService.toggle(true,'menu-sidebar');
    return false;
  }

  

}
