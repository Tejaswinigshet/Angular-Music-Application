import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-wishlist',
 templateUrl: './wishlist.component.html',
 styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

 constructor(private musicService: MusicService ,private route :Router) { }
arrayOfMusic=[];
 ngOnInit() {
this.getWishList();

 }

 setWishList(music): void{
   this.musicService.setWishList(music);
 }

 getWishList():any {
 this.musicService.getWishlistMusic().subscribe(data=>
   {
       console.log(data);
       this.arrayOfMusic=data;
   });

 }
 onDelete(value): void {
  this.musicService.deleteMusic(value);
  this.route.navigateByUrl('/delete');
}
 
 }
