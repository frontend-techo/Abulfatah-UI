import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface City {
    name: string;
    code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    cities: City[] | undefined;

    selectedCity: City | undefined;
   
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor() {}

    ngOnInit() {

        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

        this.images=[
        {
            itemImageSrc: '.././assets//images/slider/Slider-RabiulAwal.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: '.././assets//images/slider/jumma-durood-e-razwi.jpg',
            alt: 'Description for Image 1',
            title: 'Title 2'
        },
        {
            itemImageSrc: '.././assets//images/slider/jumma-surah-yaseen-2.jpg',
            alt: 'Description for Image 1',
            title: 'Title 3'
        },
        {
            itemImageSrc: '.././assets//images/slider/eid-namaz-tareeqa.jpg',
            alt: 'Description for Image 1',
            title: 'Title 4'
        },
        {
            itemImageSrc: '.././assets//images/slider/wednesday-dua.jpg',
            alt: 'Description for Image 1',
            title: 'Title 5'
        }

      
       ]
    }
    

}
