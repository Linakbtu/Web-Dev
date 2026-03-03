import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../album-service/album-service';
import { Album } from '../models/album.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail-component.html',
  styleUrl: './album-detail-component.css',
})
export class AlbumDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);
  album: Album | null = null;
  isLoading = true;
  updatedTitle = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(album => {
      this.album = album;
      this.updatedTitle = album.title;
      this.isLoading = false;
    });
  }

  onSave(): void {
    if (this.album) {
      const updated = { ...this.album, title: this.updatedTitle };
      this.albumService.updateAlbum(updated).subscribe(() => {
        this.album = updated;
      });
    }
  }
}