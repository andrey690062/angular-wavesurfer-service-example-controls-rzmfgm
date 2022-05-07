import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { WaveService } from 'angular-wavesurfer-service';
import WaveSurfer = require('wavesurfer.js');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WaveService]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  wave: WaveSurfer;

  constructor(public waveService: WaveService) {}

  ngAfterViewInit(): void {
    this.wave = this.waveService.create({
      container: '#waveform'
    });
    this.wave.load(
      '//www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3'
    );
  }

  ngOnDestroy() {
    this.wave.destroy();
  }
}
