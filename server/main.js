import { Meteor } from 'meteor/meteor';
import { Images } from '../startup.js';

Meteor.startup(() => {
  // code to run on server at startup
  if (Images.find().count() == 0) {
    Images.insert({
      img_src: "watch1.jpg",
      img_alt: "watch1",
      img_name: "Espair",
      count: 10,
      product: "watches"
    });
    Images.insert({
      img_src: "watch2.jpg",
      img_alt: "watch2",
      img_name: "Allice",
      count: 10,
      product: "watches"
    });
    Images.insert({
      img_src: "watch3.png",
      img_alt: "watch3",
      img_name: "Forum",
      count: 10,
      product: "watches"
    });
    Images.insert({
      img_src: "watch4.jpg",
      img_alt: "watch4",
      img_name: "Twilight",
      count: 10,
      product: "watches"
    });
    Images.insert({
      img_src: "watch5.jpg",
      img_alt: "watch5",
      img_name: "Timex",
      count: 10,
      product: "watches"
    });
    Images.insert({
      img_src: "watch6.jpg",
      img_alt: "watch6",
      img_name: "Sonata",
      count: 10,
      product: "watches"
    });
    Images.insert({
      img_src: "watch7.jpg",
      img_alt: "watch7",
      img_name: "Fastrack",
      count: 10,
      product: "watches"
    });
    Images.insert({
      img_src: "watch8.jpg",
      img_alt: "watch8",
      img_name: "Titan",
      count: 10,
      product: "watches"
    });
    //Mobiles
    Images.insert({
      img_src: "mb1.jpg",
      img_alt: "mb1",
      img_name: "Redmi Note 4",
      count: 10,
      product: "mobiles"
    });
    Images.insert({
      img_src: "mb2.jpg",
      img_alt: "mb2",
      img_name: "Vivo",
      count: 10,
      product: "mobiles"
    });
    Images.insert({
      img_src: "mb3.jpg",
      img_alt: "mb3",
      img_name: "Honor",
      count: 10,
      product: "mobiles"
    });
    Images.insert({
      img_src: "mb4.jpg",
      img_alt: "mb4",
      img_name: "Samsung",
      count: 10,
      product: "mobiles"
    });
    Images.insert({
      img_src: "mb5.jpg",
      img_alt: "mb5",
      img_name: "Real Me",
      count: 10,
      product: "mobiles"
    });
    Images.insert({
      img_src: "mb6.jpg",
      img_alt: "mb6",
      img_name: "Nokia",
      count: 10,
      product: "mobiles"
    });
    Images.insert({
      img_src: "mb7.png",
      img_alt: "mb7",
      img_name: "Asus",
      count: 10,
      product: "mobiles"
    });
    Images.insert({
      img_src: "mb8.jpg",
      img_alt: "mb8",
      img_name: "Jio",
      count: 10,
      product: "mobiles"
    });
    //Laptops
    Images.insert({
      img_src: "laptop1.jpg",
      img_alt: "lt1",
      img_name: "HP",
      count: 10,
      product: "laptops"
    });
    Images.insert({
      img_src: "laptop2.jpg",
      img_alt: "lt2",
      img_name: "Dell",
      count: 10,
      product: "laptops"
    });
    Images.insert({
      img_src: "laptop3.jpg",
      img_alt: "lt3",
      img_name: "Asus",
      count: 10,
      product: "laptops"
    });
    Images.insert({
      img_src: "laptop4.png",
      img_alt: "lt4",
      img_name: "Toshiba",
      count: 10,
      product: "laptops"
    });
    Images.insert({
      img_src: "laptop5.jpg",
      img_alt: "lt5",
      img_name: "Lenovo",
      count: 10,
      product: "laptops"
    });
    Images.insert({
      img_src: "laptop6.jpg",
      img_alt: "lt6",
      img_name: "Micromax",
      count: 10,
      product: "laptops"
    });
    Images.insert({
      img_src: "laptop7.jpg",
      img_alt: "lt7",
      img_name: "Blackberry",
      count: 10,
      product: "laptops"
    });
    Images.insert({
      img_src: "laptop8.jpg",
      img_alt: "lt8",
      img_name: "Diano",
      count: 10,
      product: "laptops"
    });
    //TV
    Images.insert({
      img_src: "tv1.jpg",
      img_alt: "tv1",
      img_name: "Videocon",
      count: 10,
      product: "tv"
    });
    Images.insert({
      img_src: "tv2.jpg",
      img_alt: "tv2",
      img_name: "Sony",
      count: 10,
      product: "tv"
    });
    Images.insert({
      img_src: "tv3.jpg",
      img_alt: "tv3",
      img_name: "Asus",
      count: 10,
      product: "tv"
    });
    Images.insert({
      img_src: "tv4.jpg",
      img_alt: "tv4",
      img_name: "Hitachi",
      count: 10,
      product: "tv"
    });
    Images.insert({
      img_src: "tv5.jpeg",
      img_alt: "tv5",
      img_name: "Samsung",
      count: 10,
      product: "tv"
    });
    Images.insert({
      img_src: "tv6.jpg",
      img_alt: "tv6",
      img_name: "Panasonic",
      count: 10,
      product: "tv"
    });
    Images.insert({
      img_src: "tv7.jpg",
      img_alt: "tv7",
      img_name: "Vizio",
      count: 10,
      product: "tv"
    });
    Images.insert({
      img_src: "tv8.jpg",
      img_alt: "tv8",
      img_name: "Xiomi",
      count: 10,
      product: "tv"
    })
  }

  console.log(Images.find().count());


});

