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
            itemImageSrc: 'https://alahazrat.net/wp-content/uploads/2018/10/slider.png',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: 'https://alahazrat.net/wp-content/uploads/2018/11/urs-e-ala-hazrat-alahazrat.png',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
            alt: 'Description for Image 7',
            title: 'Title 7'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg',
            alt: 'Description for Image 8',
            title: 'Title 8'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
            alt: 'Description for Image 9',
            title: 'Title 9'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
            alt: 'Description for Image 10',
            title: 'Title 10'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
            alt: 'Description for Image 11',
            title: 'Title 11'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
            alt: 'Description for Image 12',
            title: 'Title 12'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria13.jpg',
            alt: 'Description for Image 13',
            title: 'Title 13'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria14.jpg',
            alt: 'Description for Image 14',
            title: 'Title 14'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria15.jpg',
            alt: 'Description for Image 15',
            title: 'Title 15'
        }
       ]
    }

}
