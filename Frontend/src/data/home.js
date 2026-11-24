import hero from '../assets/photos/hero.jpg'
import yala from '../assets/photos/yala.jpg'
import elephant from '../assets/photos/elephant.jpg'
import wilpattu from '../assets/photos/wilpattu.jpg'
import peacock from '../assets/photos/peacock.jpg'
import minneriya from '../assets/photos/minneriya.jpg'
import kumana from '../assets/photos/kumana.jpg'
import horton from '../assets/photos/horton.jpeg'
import bundala from '../assets/photos/bundala.jpg'
import look from '../assets/photos/look.jpg'



export const photos = {
  look: { src: look, alt: 'A view of a Sri Lankan landscape', author: 'Rusmika dilshan', file: 'Sri Lankan Landscape.jpg' },
  hero: { src: hero, alt: 'A Sri Lankan leopard resting on a tree in Wilpattu', author: 'Rusmika dilshan', file: 'Sri Lankan Leopard - Wilpattu National Park, Sri Lanka.jpg' },
  yala: { src: yala, alt: 'A leopard in Yala National Park', author: 'Rusmika dilshan', file: 'Sri Lankan Leopard Yala.jpg' },
  elephant: { src: elephant, alt: 'A Sri Lankan elephant in Udawalawe National Park', author: 'Rusmika dilshan', file: 'Sri Lankan elephant, Udawalawe NP.jpg' },
  peacock: { src: peacock, alt: 'A peacock displaying its tail feathers in Yala', author: 'Rusmika dilshana', file: 'A Peacock at Yala National Park.jpg' },
  wilpattu: { src: wilpattu, alt: 'A view of Wilpattu National Park', author: 'Rusmika dilshan', file: 'Wilpattu National Park.jpg' },
  minneriya: { src: minneriya, alt: 'A view of Minneriya National Park', author: 'Rusmika dilshan', file: 'Minneriya National Park.jpg' },
  kumana: { src: kumana, alt: 'A view of Kumana National Park', author: 'Rusmika dilshan', file: 'Kumana National Park.jpg' },
  horton: { src: horton, alt: 'A view of Horton Plains National Park', author: 'Rusmika dilshan', file: 'Horton Plains National Park.jpeg' },
  bundala: { src: bundala, alt: 'A view of Bundala National Park', author: 'Rusmika dilshan', file: 'Bundala National Park.jpg' },

}

export const parks = [
  { title: 'Yala Safari', park: 'Yala National Park', photo: photos.yala, subtitle: 'In leopard country', detail: 'Look for the curve of a spotted tail among the branches. Explore Yala with a guide and photography throughout your safari.' },
  { title: 'Udawalawe Safari', park: 'Udawalawe National Park', photo: photos.elephant, subtitle: 'Among the elephants', detail: 'Discover Udawalawe with a guide and time to watch for elephants. Our photography service covers the journey from start to finish.' },
  { title: 'Wilpattu Safari', park: 'Wilpattu National Park', photo: photos.wilpattu, subtitle: 'Into the forest', detail: 'Follow the forest tracks of Wilpattu with a guide. Take your time watching the trees as we photograph the safari along the way.' },
  { title: 'Minneriya Safari', park: 'Minneriya National Park', photo: photos.minneriya, subtitle: 'Into the Elephant Paradise', detail: 'Follow the forest tracks of Minneriya with a guide. Take your time watching the trees as we photograph the safari along the way.' },
  { title: 'Kumana Safari', park: 'Kumana National Park', photo: photos.kumana, subtitle: 'Into the Bird Paradise', detail: 'Follow the forest tracks of Kumana with a guide. Take your time watching the trees as we photograph the safari along the way.' },
  { title: 'Horton Plains Safari', park: 'Horton Plains National Park', photo: photos.horton, subtitle: 'Into the Highland', detail: 'Follow the forest tracks of Horton Plains with a guide. Take your time watching the trees as we photograph the safari along the way.' },
  { title: 'Bundala Safari', park: 'Bundala National Park', photo: photos.bundala, subtitle: 'Into the Wetland', detail: 'Follow the forest tracks of Bundala with a guide. Take your time watching the trees as we photograph the safari along the way.' },
]

export const stories = [
  { title: 'A different view from the jeep', subtitle: 'Field notes · Elephants', photo: photos.elephant, detail: 'When an elephant comes into view, take a moment before lifting the camera. Watch the tip of its trunk and the slow movement of its ears. Those small details can tell the story of an encounter.' },
  { title: 'The colours of the forest', subtitle: 'Field notes · Birdlife', photo: photos.peacock, detail: 'An open peacock tail fills the frame with colour. Look closer and the pattern breaks into individual feathers, each catching the light a little differently.' },
  { title: 'Among the branches', subtitle: 'Field notes · Leopards', photo: photos.hero, detail: 'Look along a branch before looking up through the leaves. A paw resting against bark or a tail hanging below the canopy can be the first detail you notice.' },
]
