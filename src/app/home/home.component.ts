import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



 constructor(private musicService: MusicService ,private route :Router) { }
 arrayOfMusic:any=[];
 ngOnInit() {
     this.musicService.getTopTracks().subscribe(data=>
       {
           console.log(data.tracks.track);
           this.arrayOfMusic=data.tracks.track;
       });
       
 }

 addToWishlist(value): any{

   console.log(value);
   let Track = {
trackId : value.listeners,
trackName : value.name,
comments: value.artist.name
   }
   this.musicService.setWishList(Track);
 }

 getDetails(value): any{
  this.route.navigateByUrl("/details/"+value.artist.name+"/"+value.name);
}
 
 click(value){
   
  this.route.navigateByUrl("result/"+value);
  console.log("This Works");  
}
}
