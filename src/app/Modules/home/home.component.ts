import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  option:boolean=true;
  panelOpenState:boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  moveToHome() {
    this.router.navigate(['/landing']);
  }

  moveToAbout() {
    this.router.navigate(['/about']);
  }

  moveToTokens() {
    this.router.navigate(['/tokens']);
  }

  moveToStack() {
    this.router.navigate(['/stack']);
  }

  moveToWeb3() {
    this.router.navigate(['/web3']);
  }

  moveToApp() {
    window.open("https://app.humidefi.com", "_blank");
  }

}
