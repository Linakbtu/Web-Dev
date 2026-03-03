import { Component, inject, OnInit } from '@angular/core';
import { AlbumService } from '../album-service/album-service';
import { Album } from '../models/album.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-albums-component',
  imports: [RouterLink],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css',
})
export class AlbumsComponent implements OnInit {
  private albumService = inject(AlbumService);
  albums: Album[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
      this.isLoading = false;
    });
  }

  onDelete(id: number, event: Event): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}