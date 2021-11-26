import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  URL = environment.imgPath;

  transform( img: string, size: string = 'w500'): string {
    if ( !img ) {
      return './assets/no-image-banner.png';
    }

    const imgUrl = `${ this.URL }/${ size }${ img }`;

    return imgUrl;
  }

}
