import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { TimerService } from "src/app/services/timer.service";

export type TimerTitleType = 'entrada' | 'salida';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.scss']
})
export class TimerPageComponent {

  timerTitle: TimerTitleType = 'entrada';

  timerEntry = {
    min: 0,
    sec: 0
  }

  timerExit = {
    min: 0,
    sec: 0
  }

  loading: boolean = true;

  ngOnInit() {
    let appHeader = document.querySelector('app-header');
    ///appHeader?.remove();
    appHeader?.setAttribute('style', 'display: flex')
    this.loading = false;
  }

  constructor(
    public timerService: TimerService,
    private route: Router,
    public authService: AuthService
    ) { }

  resetTimer() {
    this.timerService.resetTimer();
  }

  changeTimer() {
    this.saveTimer();
    if (this.timerTitle === 'entrada') {
      this.timerTitle = 'salida';
    } else {
      this.timerTitle = 'entrada';
    }
  }

  saveTimer() {
    if (this.timerTitle === 'entrada') {
      this.timerService.saveTimer('entryTime');
    } else {
      this.timerService.saveTimer('exitTime');
    }
  }

  goToConfirmation() {
    this.saveTimer();
    this.route.navigateByUrl('validar')
  }

}
