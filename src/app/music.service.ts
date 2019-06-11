import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Track } from './track';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class MusicService {

 constructor(private httpclient: HttpClient) { }
track: any;
 getMusicAfterSearch(value):any{
   var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=a00aacf2db03de2bd0e3cab6a7e3f00f&track=${value}&format=json`;
   return this.httpclient.get(url);
 }

 getTopTracks():any{
   return this.httpclient.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a00aacf2db03de2bd0e3cab6a7e3f00f&format=json");
 }

 setWishList(value) : any{
   console.log(value);
   return this.httpclient.post("http://localhost:8080/api/v1/music",value).subscribe();
 }
 getWishlistMusic(): any{
   return this.httpclient.get("http://localhost:8080/api/v1/display");
 }

 deleteMusic(value): any{
  return this.httpclient.delete(`http://localhost:8080/api/v1/music/${value}`).subscribe();
}
getDetails(artist,name): any{
  console.log(artist, name)
  var url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=a00aacf2db03de2bd0e3cab6a7e3f00f&artist=${artist}&album=${name}&format=json`
return this.httpclient.get(url);
}
}