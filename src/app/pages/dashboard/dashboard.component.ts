import { Component, OnInit } from '@angular/core';

export interface MockCard {
  image?: string;
  header?: string;
  body?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mockCards: MockCard[] = [
    {
      header: "Pictures?",
      body: "I found this image on my phone and I don't remember taking it. What is it even of? Something creepy that's what.",
      image: "dashboard1.webp"
    },
    {
      header: "That Vignette",
      body: "The radial gradient on the edge of the images here is dynamic ie: it isn't part of the image. Which means it could be truely dynamic.",
      image: "dashboard2.webp"
    },
    {
      header: "Wait!",
      body: "Was that a picture of Stephen Fry dancing awkwardly on the last card? What kind of application is this—a fake one is what it is.",
      image: "dashboard3.webp"
    },
    {
      header: "Reflections?",
      body: "Reflections are great at showing things that are super high tech right? Also, this text totally trailed off predicably when we got to the last one–except this bit–which actually made it the longest.",
      image: "dashboard4.webp"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
