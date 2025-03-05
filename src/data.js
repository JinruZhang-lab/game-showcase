import zeldaImage from '../assets/zelda.jpg';
import eldenRingImage from '../assets/elden_ring.jpg';
import minecraftImage from '../assets/minecraft.jpg';
import overwatchImage from '../assets/overwatch.jpg';
import hollowKnightImage from '../assets/hollow_knight.jpg';
import witcher3Image from '../assets/witcher3.jpg';
import celesteImage from '../assets/celeste.jpg';
import amongUsImage from '../assets/among_us.jpg';
import animalCrossingImage from '../assets/animal_crossing.jpg';
import stardewValleyImage from '../assets/stardew_valley.jpg';
import darkSoulsImage from '../assets/dark_soul.jpg';
import marioOdysseyImage from '../assets/mario_odyssey.jpg';

const gamesData = [
  {
    id: 1,
    title: 'The Legend of Zelda',
    description: 'An action-adventure game featuring a hero named Link.',
    image: zeldaImage,
    genre: 'Action-Adventure',
    rating: 4.8,
    releaseDate: 'February 21, 1986',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii U', 'NES'],
  },
  {
    id: 2,
    title: 'Elden Ring',
    description: 'An epic RPG with a vast open world to explore.',
    image: eldenRingImage,
    genre: 'RPG',
    rating: 4.9,
    releaseDate: 'February 25, 2022',
    developer: 'FromSoftware',
    platforms: ['PC', 'PS5', 'Xbox Series X'],
  },
  {
    id: 3,
    title: 'Minecraft',
    description: 'A sandbox game about creativity and survival.',
    image: minecraftImage,
    genre: 'Sandbox',
    rating: 4.7,
    releaseDate: 'November 18, 2011',
    developer: 'Mojang Studios',
    platforms: ['PC', 'Xbox One', 'PS4', 'Nintendo Switch'],
  },
  {
    id: 4,
    title: 'Overwatch',
    description: 'A team-based multiplayer shooter.',
    image: overwatchImage,
    genre: 'Shooter',
    rating: 4.3,
    releaseDate: 'May 24, 2016',
    developer: 'Blizzard Entertainment',
    platforms: ['PC', 'PS4', 'Xbox One', 'Nintendo Switch'],
  },
  {
    id: 5,
    title: 'Hollow Knight',
    description: 'A Metroidvania-style action-adventure game.',
    image: hollowKnightImage,
    genre: 'Metroidvania',
    rating: 4.5,
    releaseDate: 'February 24, 2017',
    developer: 'Team Cherry',
    platforms: ['PC', 'Nintendo Switch', 'PS4', 'Xbox One'],
  },
  {
    id: 6,
    title: 'The Witcher 3',
    description: 'An RPG set in a rich, detailed fantasy world.',
    image: witcher3Image,
    genre: 'RPG',
    rating: 4.9,
    releaseDate: 'May 19, 2015',
    developer: 'CD Projekt Red',
    platforms: ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X'],
  },
  {
    id: 7,
    title: 'Celeste',
    description: 'A platformer about overcoming challenges and climbing a mountain.',
    image: celesteImage,
    genre: 'Platformer',
    rating: 4.6,
    releaseDate: 'January 25, 2018',
    developer: 'Maddy Makes Games',
    platforms: ['PC', 'PS4', 'Xbox One', 'Nintendo Switch'],
  },
  {
    id: 8,
    title: 'Among Us',
    description: 'A party game of teamwork and betrayal.',
    image: amongUsImage,
    genre: 'Party',
    rating: 4.2,
    releaseDate: 'June 15, 2018',
    developer: 'Innersloth',
    platforms: ['PC', 'iOS', 'Android', 'Nintendo Switch'],
  },
  {
    id: 9,
    title: 'Animal Crossing: New Horizons',
    description: 'A life-simulation game set on a deserted island.',
    image: animalCrossingImage,
    genre: 'Simulation',
    rating: 4.7,
    releaseDate: 'March 20, 2020',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch'],
  },
  {
    id: 10,
    title: 'Stardew Valley',
    description: 'A farming simulation game with RPG elements.',
    image: stardewValleyImage,
    genre: 'Simulation',
    rating: 4.8,
    releaseDate: 'February 26, 2016',
    developer: 'ConcernedApe',
    platforms: ['PC', 'PS4', 'Xbox One', 'Nintendo Switch'],
  },
  {
    id: 11,
    title: 'Dark Souls III',
    description: 'An action RPG known for its challenging combat.',
    image: darkSoulsImage,
    genre: 'Action RPG',
    rating: 4.7,
    releaseDate: 'March 24, 2016',
    developer: 'FromSoftware',
    platforms: ['PC', 'PS4', 'Xbox One'],
  },
  {
    id: 12,
    title: 'Super Mario Odyssey',
    description: 'A 3D platformer featuring Mario on a globe-trotting adventure.',
    image: marioOdysseyImage,
    genre: 'Platformer',
    rating: 4.8,
    releaseDate: 'October 27, 2017',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch'],
  },
];

export default gamesData;