import { v4 as uuidv4 } from 'uuid';

import serviceCard1 from './images/service-list1.webp';
import serviceCard2 from './images/service-list2.webp';
import serviceCard3 from './images/service-list3.webp';
import serviceCard4 from './images/service-list4.webp';

const services = [
  {
    img:serviceCard1,
    alt:'VR glasses',
    title: 'SIMULATION',
    description: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae',
    id: uuidv4(), 
  },

  {
    img:serviceCard2,
    alt:'VR glasses',
    title: 'EDUCATION',
    description: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae',
    id: uuidv4(), 
  },  

  {
    img:serviceCard3,
    alt:'VR glasses',
    title: 'SELF-CARE',
    description: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae',
    id: uuidv4(), 
  }, 

  {
    img:serviceCard4,
    alt:'VR glasses',
    title: 'OUTDOOR',
    description: 'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae',
    id: uuidv4(), 
  }
]

export {services}