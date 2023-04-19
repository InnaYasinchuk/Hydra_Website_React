import { v4 as uuidv4 } from "uuid";

import unreal from "./images/TechUnreal.webp";
import unity from "./images/TechUnity.webp";
import oculus from "./images/TechOculus.webp";
import vive from "./images/TechVive.webp";

const technologiesCards = [
  {
    img: unreal,
    alt: "unreal-logo",
    id: uuidv4(),
  },
  {
    img: unity,
    alt: "unity-logo",
    id: uuidv4(),
  },
  {
    img: oculus,
    alt: "oculus-logo",
    id: uuidv4(),
  },
  {
    img: vive,
    alt: "vive-logo",
    id: uuidv4(),
  },
];

export { technologiesCards };
