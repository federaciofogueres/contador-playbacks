import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

export interface Timer {
  min: number,
  sec: number
}

export interface TimerStatus {
  name: string;
  status: boolean;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class TimerService {

  timers: TimerStatus[] = [];

  timer!: AngularFirestoreCollection<any>;

  timerObject: Timer = {
    min: localStorage.getItem('minutes') !== null ? parseInt(localStorage.getItem('minutes')!) : 4,
    sec: localStorage.getItem('seconds') !== null ? parseInt(localStorage.getItem('seconds')!) : 0
  }

  timerStatus: boolean = false;

  constructor(
    private db: AngularFirestore
  ) {
    this.timer = this.db.collection('timer');
  }

  updateContador(timer: Timer = this.timerObject) {
    localStorage.setItem('minutes', this.timerObject.min.toString())
    localStorage.setItem('seconds', this.timerObject.sec.toString())
    this.timer.doc('timer').update(timer);
  }

  changeTimer() {
    this.timerStatus = !this.timerStatus;
    if (this.timerStatus) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer() {
    this.timerStatus = true;
    let intervalTimer = setInterval(() => {
      if (this.timerStatus) {
        if (this.timerObject.sec > 0) {
          this.timerObject.sec--;
        } else {
          this.timerObject.min--;
          this.timerObject.sec = 59;
        }
        this.updateContador()
      } else {
        clearInterval(intervalTimer);
      }
    }, 1000)
  }

  resetTimer() {
    this.timerObject.min = 4;
    this.timerObject.sec = 0;
    this.updateContador()
  }

  stopTimer() {
    this.timerStatus = false;
  }

  saveTimer(name: string) {
    let timerStatus: TimerStatus = {
      name: name,
      status: false,
      value: `${this.timerObject.min}:${this.timerObject.sec}`
    }
    let timerIndexFound = this.timers.findIndex(timer => timer.name === name);
    if (timerIndexFound !== -1) {
      this.timers[timerIndexFound].value = timerStatus.value;
    } else {
      this.timers.push(timerStatus)
    }
  }

}
