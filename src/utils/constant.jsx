import { BiPodcast, BiMoviePlay } from "react-icons/bi";
import { BsMusicNoteBeamed, BsNewspaper } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { RiReactjsFill } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { MdSchool } from 'react-icons/md'
import { GiTrophyCup } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";

export const categories = [
  { name: "New", icon: <AiFillHome /> },
  { name: "Coding", icon: <HiCode /> },
  { name: "React js", icon: <RiReactjsFill /> },
  { name: "Javascript", icon: <DiJavascript1 /> },
  { name: "Podcast", icon: <BiPodcast /> },
  { name: "Music", icon: <BsMusicNoteBeamed /> },
  { name: "Education", icon: <MdSchool /> },
  { name: "Movie", icon: <BiMoviePlay /> },
  { name: "Sport", icon: <GiTrophyCup /> },
  { name: "News", icon: <BsNewspaper /> },
  { name: "Gaming", icon: <FaGamepad /> },
  { name: "Live", icon: <CgMediaLive /> },
];
