import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Photo } from '../models/photo.model';
import { AlbumService } from '../album-service/album-service';

@Component({
  selector: 'app-album-photos-component',
  imports: [RouterLink],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css',
})
export class AlbumPhotosComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);
  photos: Photo[] | null = null;
  isLoading = true;
  id!: number;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.id).subscribe(photos => {
      this.photos = photos;
      this.isLoading = false;
    });
  }
}