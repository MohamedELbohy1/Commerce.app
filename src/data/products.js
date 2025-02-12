const products = [
  {
    id: "1",
    name: "Laptop Pro X",
    image: "/images/labtop2.jpg",
    shortDescription: "Powerful laptop for professionals",
    fullDescription: `The Laptop Pro X offers top-notch performance with a sleek design, featuring a 
                      15.6-inch 4K display, Intel i7 processor, 16GB RAM, and 1TB SSD. Ideal for 
                      developers, designers, and gamers.`,
    price: 1500,
    quantity: 1,
    variant: "Space Black",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "1TB SSD",
      display: "15.6-inch 4K",
    },
  },
  {
    id: "2",
    name: "Mobile Max Z",
    image: "/images/iphone11.jpg",
    shortDescription: "Latest mobile with cutting-edge features",
    fullDescription: `The Mobile Max Z is a flagship device with a 6.7-inch OLED display, 
                      Snapdragon 888 processor, 12GB RAM, and 256GB storage. Equipped with a 108MP 
                      camera, it delivers stunning photos and videos.`,
    price: 1000,
    quantity: 1,
    variant: "Space Gray",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },
  {
    id: "3",
    name: "Mobile Hawawi",
    image: "/images/Hawawi.jpeg",
    shortDescription: "Latest mobile with cutting-edge features",
    fullDescription: `The  Hawawi is a flagship device with a 6.7-inch OLED display, 
                      Snapdragon 888 processor, 12GB RAM, and 256GB storage. Equipped with a 108MP 
                      camera, it delivers stunning photos and videos.`,
    price: 200,
    quantity: 1,
    variant: "Space Black",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },
  {
    id: "4",
    name: "Mobile Samsung M",
    image: "/images/SamsungM.avif",
    shortDescription: "Latest mobile with cutting-edge features",
    fullDescription: `The Samsung M is a flagship device with a 6.7-inch OLED display, 
                      Snapdragon 888 processor, 12GB RAM, and 256GB storage. Equipped with a 108MP 
                      camera, it delivers stunning photos and videos.`,
    price: 900,
    quantity: 1,
    variant: "Space Black",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },
  {
    id: "5",
    name: "LapTop Hp",
    image: "/images/hplabtop.webp",
    shortDescription: "Powerful laptop for professionals",
    fullDescription: `The Laptop Hp offers top-notch performance with a sleek design, featuring a 
                      15.6-inch 4K display, Intel i7 processor, 16GB RAM, and 1TB SSD. Ideal for 
                      developers, designers, and gamers.`,
    price: 1300,
    quantity: 1,
    variant: "Space Gray",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "1TB SSD",
      display: "15.6-inch 4K",
    },
  },
  {
    id: "6",
    name: " Mobile iphone 16 Pro Max",
    image: "/images/iphone16.webp",
    shortDescription: "Latest mobile with cutting-edge features",
    fullDescription: `The Iphone 16 Pro Max is a flagship device with a 6.7-inch OLED display, 
                      Snapdragon 888 processor, 12GB RAM, and 256GB storage. Equipped with a 108MP 
                      camera, it delivers stunning photos and videos.`,
    price: 3000,
    quantity: 1,
    variant: "Space Black",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },
  {
    id: "7",
    name: "Headphone ",
    image: "/images/headphones1.avif",
    shortDescription: "Latest Headphone with cutting-edge features",
    fullDescription: `Sound Quality: High-definition audio with deep bass and clear treble for an immersive experience.
Noise Cancellation: Active noise cancellation (ANC) to block out external noise for better focus and sound clarity.`,
    price: 100,
    quantity: 1,
    variant: "Space Black",
    specs: {
      SoundQuality:
        "High-definition audio with deep bass and clear treble for an immersive experience",
      NoiseCancellation:
        "Active noise cancellation (ANC) to block out external noise for better focus and sound clarity",
      WirelessConnectivity:
        "Bluetooth connectivity allows for wireless use without being tethered to a device",
    },
  },
  {
    id: "8",
    name: "Laptop Apple",
    image: "/images/Apple Laptop.jpeg",
    shortDescription: "Powerful laptop for professionals",
    fullDescription: `The Apple Laptop Z is a flagship device with a 6.7-inch OLED display, 
                      Snapdragon 888 processor, 12GB RAM, and 256GB storage. Equipped with a 108MP 
                      camera, it delivers stunning photos and videos.`,
    price: 2500,
    quantity: 1,
    variant: "Space Gray",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },

  {
    id: "9",
    name: "Headphone",
    image: "/images/headphones2.jpg",
    shortDescription: "Latest Headphone with cutting-edge features",
    fullDescription: `Sound Quality: High-definition audio with deep bass and clear treble for an immersive experience.
Noise Cancellation: Active noise cancellation (ANC) to block out external noise for better focus and sound clarity.`,
    price: 1000,
    quantity: 1,
    variant: "Space Black",
    specs: {
      SoundQuality:
        "High-definition audio with deep bass and clear treble for an immersive experience",
      NoiseCancellation:
        "Active noise cancellation (ANC) to block out external noise for better focus and sound clarity",
      WirelessConnectivity:
        "Bluetooth connectivity allows for wireless use without being tethered to a device",
    },
  },
  {
    id: "10",
    name: "Mobile OPPO",
    image: "/images/OPPO.webp",
    shortDescription: "Latest mobile with cutting-edge features",
    fullDescription: `The Mobile OPPO is a flagship device with a 6.7-inch OLED display, 
                      Snapdragon 888 processor, 12GB RAM, and 256GB storage. Equipped with a 108MP 
                      camera, it delivers stunning photos and videos.`,
    price: 1100,
    quantity: 1,
    variant: "Space Black",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },
  {
    id: "11",

    name: "Apple Watch",
    image: "/images/Watch.jpeg",
    shortDescription: "Latest Apple Watch with cutting-edge features",
    fullDescription: `Accurate Time Display: Digital watches display time with high precision using numbers instead of 
    traditional hour and minute hands, making it easier to read at a glance. 
    They typically show hours, minutes, and seconds.Backlit Screen: 
    Many digital watches come with a backlight feature, allowing you to see the time in low-light 
    conditions or at night. This is particularly useful for outdoor activities or in dark environments.`,
    price: 300,
    quantity: 1,
    variant: "Space Gray",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },
  {
    id: "12",
    name: "Camera",
    image: "/images/camera.jpeg",
    shortDescription: "Latest CAMERA with cutting-edge features",
    fullDescription: `Image Quality: Cameras come with different resolutions measured in megapixels (MP). 
    The higher the megapixel count, the more detailed the image. Professional cameras can have resolutions ranging 
    from 20MP to 100MP or more, resulting in high-quality, sharp images.
    Lens Options: Many cameras, especially DSLR and mirrorless cameras, allow you to change lenses, 
    offering versatility for different photography styles such as wide-angle, telephoto, or macro shots.`,
    price: 1000,
    quantity: 1,
    variant: "Space Black",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },
  {
    id: "13",
    name: "LapTop Dell",
    image: "/images/dell.jpg",
    shortDescription: "Powerful laptop for professionals",
    fullDescription: `The Laptop Dell offers top-notch performance with a sleek design, featuring a 
                      15.6-inch 4K display, Intel i7 processor, 16GB RAM, and 1TB SSD. Ideal for 
                      developers, designers, and gamers..`,
    price: 1400,
    quantity: 1,
    variant: "Space Gray",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "1TB SSD",
      display: "15.6-inch 4K",
    },
  },
  {
    id: "14",
    name: "Screen Computer",
    image: "/images/screen.jpg",
    shortDescription: "Latest Computer with cutting-edge features",
    fullDescription: `The Sreen is a flagship device with a 6.7-inch OLED display, 
                      Snapdragon 888 processor, 12GB RAM, and 256GB storage. Equipped with a 108MP 
                      camera, it delivers stunning photos and videos.`,
    price: 550,
    quantity: 1,
    variant: "Space Black",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },
  {
    id: "15",
    name: "AirPods",
    image: "/images/airpods.jpeg",
    shortDescription: "Latest AirPods with cutting-edge features",
    fullDescription: `Sound Quality: High-definition audio with deep bass and clear treble for an immersive experience.
                      Noise Cancellation: Active noise cancellation (ANC) to block out external noise for better focus and sound clarity.`,
    price: 400,
    quantity: 1,
    variant: "Space Gray",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },
  {
    id: "16",
    name: "Mobile Pro Max",
    image: "/images/iphone11.jpg",
    shortDescription: "Latest mobile with cutting-edge features",
    fullDescription: `The Mobile Max is a flagship device with a 6.7-inch OLED display, 
                      Snapdragon 888 processor, 12GB RAM, and 256GB storage. Equipped with a 108MP 
                      camera, it delivers stunning photos and videos.`,
    price: 550,
    quantity: 1,
    variant: "Space Black",
    specs: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP",
    },
  },
];
export const lastCartItems = [];

export default products;
