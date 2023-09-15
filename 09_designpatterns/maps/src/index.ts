import { User } from './components/User';
import { Company } from './components/Company';
import { CustomMap } from './components/CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// customMap.map <- Breaks! We marked as private
customMap.addMarker(user);
customMap.addMarker(company);