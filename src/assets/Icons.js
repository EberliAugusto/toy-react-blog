import ArchitectureIcon from '@mui/icons-material/Architecture';
import InfoIcon from '@mui/icons-material/Info';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import JavaIcon from "./JavaIcon";



export const refs = {
  architecture: "architecture",
  java: "java",
  todo: "todo",
  about: "about"
}

export const all = {
  [refs.architecture]: ArchitectureIcon,
  [refs.about]: InfoIcon,
  [refs.todo]: PlaylistAddCheckIcon,
  [refs.java]: JavaIcon,
}

export {
  ArchitectureIcon as architecture,
  JavaIcon as java,
  InfoIcon as about,
  PlaylistAddCheckIcon as todo
}