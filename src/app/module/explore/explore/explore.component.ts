import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'elix-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements AfterViewInit {

  private map: any;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initMap();

  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);


    navigator.geolocation.getCurrentPosition((position => {
      let lat = position.coords.latitude
      let long = position.coords.longitude

      var marker = L.marker([lat, long]).addTo(this.map)
    }))
  }


}
