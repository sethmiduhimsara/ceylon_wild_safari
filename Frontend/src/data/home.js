import hero from '../assets/photos/hero.jpg'
import yala from '../assets/photos/yala.jpg'
import elephant from '../assets/photos/elephant.jpg'
import peacock from '../assets/photos/peacock.jpg'

export const photos = {
  hero: { src: hero, alt: 'A Sri Lankan leopard resting on a tree in Wilpattu', author: 'Shaluka Herath', file: 'Sri Lankan Leopard - Wilpattu National Park, Sri Lanka.jpg' },
  yala: { src: yala, alt: 'A leopard in Yala National Park', author: 'Xyler2019', file: 'Sri Lankan Leopard Yala.jpg' },
  elephant: { src: elephant, alt: 'A Sri Lankan elephant in Udawalawe National Park', author: 'M.S Dulan De Silva', file: 'Sri Lankan elephant, Udawalawe NP.jpg' },
  peacock: { src: peacock, alt: 'A peacock displaying its tail feathers in Yala', author: 'Manelka Jayasundara', file: 'A Peacock at Yala National Park.jpg' },
}

export const parks = [
  { title: 'Yala Safari', park: 'Yala National Park', photo: photos.yala, subtitle: 'In leopard country', detail: 'Look for the curve of a spotted tail among the branches. Explore Yala with a guide and photography throughout your safari.' },
  { title: 'Udawalawe Safari', park: 'Udawalawe National Park', photo: photos.elephant, subtitle: 'Among the elephants', detail: 'Discover Udawalawe with a guide and time to watch for elephants. Our photography service covers the journey from start to finish.' },
  { title: 'Wilpattu Safari', park: 'Wilpattu National Park', photo: photos.hero, subtitle: 'Into the forest', detail: 'Follow the forest tracks of Wilpattu with a guide. Take your time watching the trees as we photograph the safari along the way.' },
]

export const stories = [
  { title: 'A different view from the jeep', subtitle: 'Field notes · Elephants', photo: photos.elephant, detail: 'When an elephant comes into view, take a moment before lifting the camera. Watch the tip of its trunk and the slow movement of its ears. Those small details can tell the story of an encounter.' },
  { title: 'The colours of the forest', subtitle: 'Field notes · Birdlife', photo: photos.peacock, detail: 'An open peacock tail fills the frame with colour. Look closer and the pattern breaks into individual feathers, each catching the light a little differently.' },
  { title: 'Among the branches', subtitle: 'Field notes · Leopards', photo: photos.hero, detail: 'Look along a branch before looking up through the leaves. A paw resting against bark or a tail hanging below the canopy can be the first detail you notice.' },
]
