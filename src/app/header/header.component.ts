import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{
    
  constructor () { }

  ngOnInit(){
     let btnMenu = document.getElementsByClassName('menu')[0]
     let nav = document.getElementsByClassName('nav')[0]
     
     btnMenu.addEventListener('click', function(){
      nav.classList.toggle('active')
      btnMenu.classList.toggle('active')
     })
  }
}
