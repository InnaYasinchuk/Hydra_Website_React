import { v4 as uuidv4 } from 'uuid';

import location from "./images/slider-location-Icon.png";
import phone from "./images/slider-phone-call.png";
import mail from "./images/slider-mail.png";

const contacts = [

  {
    img: location,
    alt: 'location',
    title: 'Pay Us a Visit',
    description: 'Union St, Seattle, WA 98101, United States',
    href: 'https://goo.gl/maps/opRnX14hEaqbhBWQ6',
    target:'_blank',
    id: uuidv4(), 
  },
  {
    img: phone,
    alt: 'phone',
    title: 'Give Us a Call',
    description: '(110) 1111-1010',
    href: 'tel:%2B3811011111010',
    id: uuidv4(),
  },
  {
    img: mail,
    alt: 'mail',
    title: 'Send Us a Message',
    description: 'Contact@HydraVTech.com',
    href: 'mailto:Contact@HydraVTech.com',
    id: uuidv4(),
  }
]

export {contacts}