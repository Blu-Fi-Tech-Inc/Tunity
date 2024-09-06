import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Electronica",
    color: colors.teal,
    cover:
      "https://res.cloudinary.com/dqdzxjldy/image/upload/v1696902647/Barbiee__9_umekbp.png",
    artists: ["ShitHits(theFan)"],
  },
  {
    id: "2",
    title: "Indie",
    color: colors.green,
    cover:
      "https://res.cloudinary.com/dqdzxjldy/image/upload/v1696904672/VA_no5cbj.png",
    artists: ["Mr.Barbiee_"],
  },
  {
    id: "3",
    title: "Trap Vibez",
    color: colors.rose,
    cover:
      "https://res.cloudinary.com/dqdzxjldy/image/upload/v1703651712/smokeriddlez_m7qd8m.png",
    artists: ["SmokeRiddlez"],
  },
  {
    id: "4",
    title: "Alternative",
    color: colors.red,
    cover:
      "https://res.cloudinary.com/dqdzxjldy/image/upload/v1696903228/NHhouse_nogdfe.webp",
    artists: ["The Neighborhood"],
  },
  {
    id: "5",
    title: "Experimental",
    color: colors.pink,
    cover:
      "https://res.cloudinary.com/dqdzxjldy/image/upload/v1696907446/21_yg8hqg.webp",
    artists: ["21 Pilots"],
  },
  {
    id: "6",
    title: "Rock",
    color: colors.gray,
    cover:
      "https://res.cloudinary.com/dqdzxjldy/image/upload/v1696903197/AM_gdlpxv.webp",
    artists: ["Artic Monkeys"],
  },
];

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

interface Song {
  id: string;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}
const songScale = "w_40,h_40,c_scale";
export const songs: Song[] = [
  {
    id: "1",
    title: "The Nights",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_1_qitfwl.jpg`,
    artists: ["Avicii"],
    album: "The Days / Nights",
    duration: "2:56",
  },
  {
    id: "2",
    title: "Saint-Tropez",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_2_cijs8v.jpg`,
    artists: ["Post Malone"],
    album: "Hollywood's Bleeding",
    duration: "2:23",
  },
  {
    id: "3",
    title: "SICKO MODE",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_3_td9ncs.jpg`,
    artists: ["Travis Scott", "Drake"],
    album: "ASTROWORLD",
    duration: "5:13",
  },
  {
    id: "4",
    title: "Blinding Lights",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_4_lwumgu.png`,
    artists: ["The Weeknd"],
    album: "After Hours",
    duration: "3:22",
  },
  {
    id: "5",
    title: "Shape of You",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_5_rd5xqa.jpg`,
    artists: ["Ed Sheeran"],
    album: "÷ (Divide)",
    duration: "3:53",
  },
  {
    id: "6",
    title: "Uptown Funk",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_6_f1lt7y.jpg`,
    artists: ["Mark Ronson", "Bruno Mars"],
    album: "Uptown Special",
    duration: "4:30",
  },
  {
    id: "7",
    title: "Bad Guy",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_7_m7f0mh.jpg`,
    artists: ["Billie Eilish"],
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
  },
  {
    id: "8",
    title: "Yesterday",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_8_hwxisr.jpg`,
    artists: ["The Beatles"],
    album: "Today & Tomorrow",
    duration: "4:38",
  },
  {
    id: "9",
    title: "Havana",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_9_szemzp.jpg`,
    artists: ["Camila Cabello", "Young Thug"],
    album: "Camila",
    duration: "3:37",
  },
  {
    id: "10",
    title: "Radioactive",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_10_sz0cib.jpg`,
    artists: ["Imagine Dragons"],
    album: "Night Visions",
    duration: "3:07",
  },
];
