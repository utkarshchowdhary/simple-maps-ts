import { Map } from "./components/Map";
import { User } from "./models/User";
import { Company } from "./models/Company";

const map = new Map("map-container");
const user = new User();
const company = new Company();

map.addMarker(user);
map.addMarker(company);
