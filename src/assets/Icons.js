import ArchitectureIcon from '@mui/icons-material/Architecture';
import InfoIcon from '@mui/icons-material/Info';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import JavaIcon from "./JavaIcon";

export const architectureIconRef = 'architecture'
export const javaIconRef = 'java'
export const todoIconRef = 'todo'
export const aboutIconRef = 'about'

const iconsMap = {
  [architectureIconRef]: ArchitectureIcon,
  [aboutIconRef]: InfoIcon,
  [todoIconRef]: PlaylistAddCheckIcon,
  [javaIconRef]: JavaIcon, 
}

export function get(ref) {
  return iconsMap[ref]
}