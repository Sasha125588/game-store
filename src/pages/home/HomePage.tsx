import { GameItem } from '../../components/game-item/GameItem';
import { faker } from '@faker-js/faker';


const GAMES = [
  {
    id: 540,
    title: 'Overwatch 2',
    thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
    short_description:
      'A hero-focused first-person team shooter from Blizzard Entertainment.',
    game_url: 'https://www.freetogame.com/open/overwatch-2',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Activision Blizzard',
    developer: 'Blizzard Entertainment',
    release_date: '2022-10-04',
    freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
  },
  {
    id: 517,
    title: 'Lost Ark',
    thumbnail: 'https://www.freetogame.com/g/517/thumbnail.jpg',
    short_description:
      'Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.',
    game_url: 'https://www.freetogame.com/open/lost-ark',
    genre: 'ARPG',
    platform: 'PC (Windows)',
    publisher: 'Amazon Games',
    developer: 'Smilegate RPG',
    release_date: '2022-02-11',
    freetogame_profile_url: 'https://www.freetogame.com/lost-ark',
  },
  {
    id: 516,
    title: 'PUBG: BATTLEGROUNDS',
    thumbnail: 'https://www.freetogame.com/g/516/thumbnail.jpg',
    short_description:
      'Get into the action in one of the longest running battle royale games PUBG Battlegrounds.',
    game_url: 'https://www.freetogame.com/open/pubg',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'KRAFTON, Inc.',
    developer: 'KRAFTON, Inc.',
    release_date: '2022-01-12',
    freetogame_profile_url: 'https://www.freetogame.com/pubg',
  },
  {
    id: 508,
    title: 'Enlisted',
    thumbnail: 'https://www.freetogame.com/g/508/thumbnail.jpg',
    short_description:
      'Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ',
    game_url: 'https://www.freetogame.com/open/enlisted',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Gaijin Entertainment',
    developer: 'Darkflow Software',
    release_date: '2021-04-08',
    freetogame_profile_url: 'https://www.freetogame.com/enlisted',
  },
  {
    id: 345,
    title: 'Forge of Empires',
    thumbnail: 'https://www.freetogame.com/g/345/thumbnail.jpg',
    short_description:
      'A free to play 2D browser-based online strategy game, become the leader and raise your city.',
    game_url: 'https://www.freetogame.com/open/forge-of-empires',
    genre: 'Strategy',
    platform: 'Web Browser',
    publisher: 'InnoGames',
    developer: 'InnoGames',
    release_date: '2012-04-17',
    freetogame_profile_url: 'https://www.freetogame.com/forge-of-empires',
  },
  {
    id: 475,
    title: 'Genshin Impact',
    thumbnail: 'https://www.freetogame.com/g/475/thumbnail.jpg',
    short_description:
      'If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.',
    game_url: 'https://www.freetogame.com/open/genshin-impact',
    genre: 'Action RPG',
    platform: 'PC (Windows)',
    publisher: 'miHoYo',
    developer: 'miHoYo',
    release_date: '2020-09-28',
    freetogame_profile_url: 'https://www.freetogame.com/genshin-impact',
  },
  {
    id: 523,
    title: 'Fall Guys',
    thumbnail: 'https://www.freetogame.com/g/523/thumbnail.jpg',
    short_description:
      'Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ',
    game_url: 'https://www.freetogame.com/open/fall-guys',
    genre: 'Battle Royale',
    platform: 'PC (Windows)',
    publisher: 'Mediatonic',
    developer: 'Mediatonic',
    release_date: '2020-08-04',
    freetogame_profile_url: 'https://www.freetogame.com/fall-guys',
  },
  {
    id: 340,
    title: 'Game Of Thrones Winter Is Coming',
    thumbnail: 'https://www.freetogame.com/g/340/thumbnail.jpg',
    short_description:
      'A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.',
    game_url:
      'https://www.freetogame.com/open/game-of-thrones-winter-is-coming',
    genre: 'Strategy',
    platform: 'Web Browser',
    publisher: 'GTArcade',
    developer: 'YOOZOO Games ',
    release_date: '2019-11-14',
    freetogame_profile_url:
      'https://www.freetogame.com/game-of-thrones-winter-is-coming',
  },

  {
    id: 11,
    title: 'Neverwinter',
    thumbnail: 'https://www.freetogame.com/g/11/thumbnail.jpg',
    short_description:
      'A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ',
    game_url: 'https://www.freetogame.com/open/neverwinter',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    publisher: 'Perfect World Entertainment',
    developer: 'Cryptic Studios',
    release_date: '2013-12-06',
    freetogame_profile_url: 'https://www.freetogame.com/neverwinter',
  },

  {
    id: 515,
    title: 'Halo Infinite',
    thumbnail: 'https://www.freetogame.com/g/515/thumbnail.jpg',
    short_description:
      'For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.',
    game_url: 'https://www.freetogame.com/open/halo-infinite',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Xbox Game Studios',
    developer: '343 Industries',
    release_date: '2021-11-15',
    freetogame_profile_url: 'https://www.freetogame.com/halo-infinite',
  },

  {
    id: 521,
    title: 'Diablo Immortal',
    thumbnail: 'https://www.freetogame.com/g/521/thumbnail.jpg',
    short_description:
      'Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.',
    game_url: 'https://www.freetogame.com/open/diablo-immortal',
    genre: 'MMOARPG',
    platform: 'PC (Windows)',
    publisher: 'Blizzard Entertainment',
    developer: 'Blizzard Entertainment',
    release_date: '2022-06-02',
    freetogame_profile_url: 'https://www.freetogame.com/diablo-immortal',
  },

  {
    id: 5,
    title: 'Crossout',
    thumbnail: 'https://www.freetogame.com/g/5/thumbnail.jpg',
    short_description: 'A post-apocalyptic MMO vehicle combat game! ',
    game_url: 'https://www.freetogame.com/open/crossout',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Targem',
    developer: 'Gaijin',
    release_date: '2017-05-30',
    freetogame_profile_url: 'https://www.freetogame.com/crossout',
  },
  {
    id: 9,
    title: 'World of Warships',
    thumbnail: 'https://www.freetogame.com/g/9/thumbnail.jpg',
    short_description:
      'A 3D free to play naval action-themed MMO from the creators of World of Tanks! ',
    game_url: 'https://www.freetogame.com/open/world-of-warships',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Wargaming',
    developer: 'Wargaming',
    release_date: '2015-07-02',
    freetogame_profile_url: 'https://www.freetogame.com/world-of-warships',
  },
  {
    id: 12,
    title: 'War Thunder',
    thumbnail: 'https://www.freetogame.com/g/12/thumbnail.jpg',
    short_description:
      'A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.',
    game_url: 'https://www.freetogame.com/open/war-thunder',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Gaijin Entertainment',
    developer: 'Gaijin Entertainment',
    release_date: '2013-08-15',
    freetogame_profile_url: 'https://www.freetogame.com/war-thunder',
  },
  {
    id: 2,
    title: 'World of Tanks',
    thumbnail: 'https://www.freetogame.com/g/2/thumbnail.jpg',
    short_description:
      'If you like blowing up tanks, with a quick and intense game style you will love this game!',
    game_url: 'https://www.freetogame.com/open/world-of-tanks',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Wargaming',
    developer: 'Wargaming',
    release_date: '2011-04-12',
    freetogame_profile_url: 'https://www.freetogame.com/world-of-tanks',
  },

  {
    id: 14,
    title: 'Star Trek Online',
    thumbnail: 'https://www.freetogame.com/g/14/thumbnail.jpg',
    short_description:
      'A free-to-play, 3D, Sci-Fi MMORPG based on the popular Star Trek series.',
    game_url: 'https://www.freetogame.com/open/star-trek-online',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    publisher: 'Perfect World Entertainment',
    developer: ' Cryptic Studios',
    release_date: '2010-02-02',
    freetogame_profile_url: 'https://www.freetogame.com/star-trek-online',
  },

  {
    id: 466,
    title: 'Valorant',
    thumbnail: 'https://www.freetogame.com/g/466/thumbnail.jpg',
    short_description:
      'Test your mettle in Riot Games’ character-based FPS shooter Valorant.',
    game_url: 'https://www.freetogame.com/open/valorant',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Riot Games',
    developer: 'Riot Games',
    release_date: '2020-06-02',
    freetogame_profile_url: 'https://www.freetogame.com/valorant',
  },
  {
    id: 452,
    title: 'Call Of Duty: Warzone',
    thumbnail: 'https://www.freetogame.com/g/452/thumbnail.jpg',
    short_description:
      'A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.',
    game_url: 'https://www.freetogame.com/open/call-of-duty-warzone',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Activision',
    developer: 'Infinity Ward',
    release_date: '2020-03-10',
    freetogame_profile_url: 'https://www.freetogame.com/call-of-duty-warzone',
  },
  {
    id: 21,
    title: 'Destiny 2',
    thumbnail: 'https://www.freetogame.com/g/21/thumbnail.jpg',
    short_description: 'A free-to-play multiplayer Sci-Fi MMOFPS from Bungie.',
    game_url: 'https://www.freetogame.com/open/destiny-2',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Bungie',
    developer: 'Bungie',
    release_date: '2019-10-01',
    freetogame_profile_url: 'https://www.freetogame.com/destiny-2',
  },

  {
    id: 23,
    title: 'Apex Legends',
    thumbnail: 'https://www.freetogame.com/g/23/thumbnail.jpg',
    short_description:
      'A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ',
    game_url: 'https://www.freetogame.com/open/apex-legends',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Electronic Arts',
    developer: 'Electronic Arts',
    release_date: '2019-02-04',
    freetogame_profile_url: 'https://www.freetogame.com/apex-legends',
  },
  {
    id: 57,
    title: 'Fortnite',
    thumbnail: 'https://www.freetogame.com/g/57/thumbnail.jpg',
    short_description:
      "A free-to-play, standalone mode of Epic Game's Fortnite. ",
    game_url: 'https://www.freetogame.com/open/fortnite-battle-royale',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Epic Games',
    developer: 'Epic Games',
    release_date: '2017-09-26',
    freetogame_profile_url: 'https://www.freetogame.com/fortnite-battle-royale',
  },
  {
    id: 449,
    title: 'Albion Online',
    thumbnail: 'https://www.freetogame.com/g/449/thumbnail.jpg',
    short_description:
      'A free-to-play cross-platform sandbox MMO developed and published by Sandbox Interactive GmbH. ',
    game_url: 'https://www.freetogame.com/open/albion-online',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    publisher: 'Sandbox Interactive GmbH',
    developer: 'Sandbox Interactive GmbH',
    release_date: '2017-07-17',
    freetogame_profile_url: 'https://www.freetogame.com/albion-online',
  },
  {
    id: 6,
    title: 'Blade and Soul',
    thumbnail: 'https://www.freetogame.com/g/6/thumbnail.jpg',
    short_description:
      'A free-to-play martial arts MMORPG that tasks players with learning combination attacks.',
    game_url: 'https://www.freetogame.com/open/blade-and-soul',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    publisher: 'NCSoft',
    developer: 'NCSoft',
    release_date: '2016-01-19',
    freetogame_profile_url: 'https://www.freetogame.com/blade-and-soul',
  },
  {
    id: 212,
    title: 'Brawlhalla',
    thumbnail: 'https://www.freetogame.com/g/212/thumbnail.jpg',
    short_description:
      'A free-to-play 2D platform fighter inspired by the Smash Bros.',
    game_url: 'https://www.freetogame.com/open/brawlhalla',
    genre: 'Fighting',
    platform: 'PC (Windows)',
    publisher: 'Blue Mammoth Games',
    developer: 'Blue Mammoth Games',
    release_date: '2015-11-03',
    freetogame_profile_url: 'https://www.freetogame.com/brawlhalla',
  },

  {
    id: 217,
    title: 'Smite',
    thumbnail: 'https://www.freetogame.com/g/217/thumbnail.jpg',
    short_description:
      'A popular free-to-play 3D MOBA where you take on the role of an ancient god.',
    game_url: 'https://www.freetogame.com/open/smite',
    genre: 'MOBA',
    platform: 'PC (Windows)',
    publisher: 'Hi-Rez Studios',
    developer: 'Hi-Rez Studios',
    release_date: '2014-03-25',
    freetogame_profile_url: 'https://www.freetogame.com/smite',
  },
  {
    id: 3,
    title: 'Warframe',
    thumbnail: 'https://www.freetogame.com/g/3/thumbnail.jpg',
    short_description:
      'A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ',
    game_url: 'https://www.freetogame.com/open/warframe',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Digital Extremes',
    developer: 'Digital Extremes',
    release_date: '2013-03-25',
    freetogame_profile_url: 'https://www.freetogame.com/warframe',
  },
  {
    id: 13,
    title: 'Guild Wars 2',
    thumbnail: 'https://www.freetogame.com/g/13/thumbnail.jpg',
    short_description:
      "A free-to-play MMORPG, the follow-up to ArenaNet's popular Guild Wars. ",
    game_url: 'https://www.freetogame.com/open/guild-wars-2',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    publisher: 'NCsoft',
    developer: 'ArenaNet',
    release_date: '2012-08-28',
    freetogame_profile_url: 'https://www.freetogame.com/guild-wars-2',
  },

  {
    id: 255,
    title: 'Stronghold Kingdoms',
    thumbnail: 'https://www.freetogame.com/g/255/thumbnail.jpg',
    short_description:
      'A strategy based building/warfare game based on the long running Strongholds PC game series.',
    game_url: 'https://www.freetogame.com/open/stronghold-kingdoms',
    genre: 'Strategy',
    platform: 'Web Browser',
    publisher: 'FireFly Studios',
    developer: 'FireFly Studios',
    release_date: '2012-02-28',
    freetogame_profile_url: 'https://www.freetogame.com/stronghold-kingdoms',
  },

  {
    id: 570,
    title: 'The Finals',
    thumbnail: 'https://www.freetogame.com/g/570/thumbnail.jpg',
    short_description: 'A game-show style PvP shooter from Embark Studios.',
    game_url: 'https://www.freetogame.com/open/the-finals',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Embark Studios',
    developer: 'Embark Studios',
    release_date: '2023-12-07',
    freetogame_profile_url: 'https://www.freetogame.com/the-finals',
  },
  {
    id: 577,
    title: 'Deceit 2',
    thumbnail: 'https://www.freetogame.com/g/577/thumbnail.jpg',
    short_description: 'A social deduction game from World Makers.',
    game_url: 'https://www.freetogame.com/open/deceit-2',
    genre: 'Action',
    platform: 'PC (Windows)',
    publisher: 'World Makers',
    developer: 'World Makers',
    release_date: '2023-09-14',
    freetogame_profile_url: 'https://www.freetogame.com/deceit-2',
  },
  {
    id: 226,
    title: 'Path of Exile',
    thumbnail: 'https://www.freetogame.com/g/226/thumbnail.jpg',
    short_description:
      'A free-to-play massively multiplayer online ARPG in the style of Diablo.',
    game_url: 'https://www.freetogame.com/open/path-of-exile',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    publisher: 'Grinding Gear Games',
    developer: 'Grinding Gear Games',
    release_date: '2013-10-23',
    freetogame_profile_url: 'https://www.freetogame.com/path-of-exile',
  },
  {
    id: 402,
    title: 'Might And Magic Heroes Online',
    thumbnail: 'https://www.freetogame.com/g/402/thumbnail.jpg',
    short_description:
      'A free-to-play MMO strategy RPG game in which you control powerful Heroes! ',
    game_url: 'https://www.freetogame.com/open/might-magic-heroes-online',
    genre: 'MMORPG',
    platform: 'Web Browser',
    publisher: 'Ubisoft',
    developer: 'Ubisoft Blue Byte, Related Designs',
    release_date: '2009-09-03',
    freetogame_profile_url:
      'https://www.freetogame.com/might-magic-heroes-online',
  },
];

const fakeGamePrice = faker.number.int({ min: 50, max: 1200 });

GAMES.map(game => game.price = fakeGamePrice)

console.log(GAMES)

export const HomePage = () => {
  return (
    <div className="text-white justify-center flex flex-wrap	gap-6">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};