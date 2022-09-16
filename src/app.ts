import Map from 'ol/Map';
import View from 'ol/View';
// import layer from 'ol/layer/Layer';
import TileLayer from 'ol/layer/Tile';
import {fromLonLat} from 'ol/proj';
import OSM from 'ol/source/OSM';
const form:HTMLElement = document.querySelector('form')!
// const addressInput:HTMLInputElement= document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event:Event){
  event.preventDefault();

const coordinates = {lat: 12.5102239, lng: 74.9851678}; // Can't fetch coordinates from Google API, use dummy ones

document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([coordinates.lng, coordinates.lat]),
    zoom: 15
  })
});
}
form?.addEventListener('submit',searchAddressHandler)