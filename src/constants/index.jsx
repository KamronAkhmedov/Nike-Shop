import { featured1, featured2, featured3, featured4, product1, product2, product3, product4, product5, product6, product7, product8, shoe1, shoe2, shoe3, thumbnail1, thumbnail2, thumbnail3 } from "../components"

export const NavLinks = [
  {
    title: 'home',
    path: 'home',
    offset: -150
  },
  {
    title: 'featured',
    path: 'featured',
    offset: -150
  },
  {
    title: 'about',
    path: 'about',
    offset: -150
  },
  {
    title: 'shop',
    path: 'shop',
    offset: -150
  },
  {
    title: 'contact',
    path: 'contact',
    offset: -150
  },

]

export const Shoes = [
  {
    thumbnail: thumbnail1,
    shoe: shoe1,
    title: 'basketball shoes',
    price: '$99'
  },
  {
    thumbnail: thumbnail2,
    shoe: shoe2,
    title: 'basketball shoes',
    price: '$80'
  },
  {
    thumbnail: thumbnail3,
    shoe: shoe3,
    title: 'basketball shoes',
    price: '$77'
  },
]


export const FEATURED = [
  {
    shoe: featured1,
    title: 'Nike Air Max',
    price: 99.00,
    bgColor: '#f42c37'
  },
  {
    shoe: featured2,
    title: 'Nike Dunk Low',
    price: 95.00,
    bgColor: '#fdc62e'
  },
  {
    shoe: featured3,
    title: 'Nike Zoom ',
    price: 89.00,
    bgColor: '#1376f4'
  },
  {
    shoe: featured4,
    title: 'Nike Free Run',
    price: 985.00,
    bgColor: '#2dcc6f'
  },
]

export const SHOP = [
  {
    title: 'Nike Waffle Racer',
    shoe: product1,
    price: 110.00
  },
  {
    title: 'Nike Air Zoom Generation',
    shoe: product2,
    price: 100.00
  },
  {
    title: 'Nike Zoom KD 4',
    shoe: product3,
    price: 170.00
  },
  {
    title: 'Air Jordan 8',
    shoe: product4,
    price: 120.00
  },
  {
    title: ' Nike LeBron 7',
    shoe: product5,
    price: 125.00
  },
  {
    title: 'Nike Zoom Fly',
    shoe: product6,
    price: 90.00
  },
  {
    title: 'Nike Air Max Penny',
    shoe: product7,
    price: 130.00
  },
  {
    title: 'Nike Air Griffey Max',
    shoe: product8,
    price: 115.00
  },
]

export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Us',
      'Latest Items',
      'Hot Offers',
      'Popular Designs',
      'FAQ',
      'Privacy Policy'
    ]
  },
  {
    title: 'Our Community',
    links: [
      'Terms and Conditions',
      'Special Offers',
      'Customer Reviews'
    ]
  }
]

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Contact Number', value: '124-842-9696' },
    { label: 'Email Addres', value: 'coma0705@outlook.com' }
  ]
}

export const SOCIALS = {
  title: 'Social',
  links: [
    '/assets/icons/facebook.svg',
    '/assets/icons/instagram.svg',
    '/assets/icons/twitter.svg',
    '/assets/icons/linkedin.svg',
  ]
}

const url = 'https://www.youtube.com/watch?v=GF94eRpbI8k'