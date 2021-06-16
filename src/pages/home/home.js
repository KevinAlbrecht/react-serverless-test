import { useEffect, useState } from 'react';
import LeafletMap from '../../components/map/leaflet-map';
import CampainList from '../../components/campain-list/campain-list';

import { useCurrentOrgContext } from '../../contexts/app-context';
import { getCampainForOrganization } from '../../http/api';

import './home.css';

export function Home() {
  const currentOrg = useCurrentOrgContext();
  const [campains, setCampains] = useState([]);

  useEffect(() => {
    (async () => setCampains(await getCampainForOrganization(currentOrg)))();
  }, [currentOrg]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Tu es connecté mon enfant.</p>
      <div className='home__wrapper'>
        <div id='home__campains'>
          <CampainList campains={campains}></CampainList>
        </div>
        <div id='home__map'>
          <LeafletMap
            locations={campains.map((c) => ({
              marker: c.marker,
              name: c.name,
            }))}
          ></LeafletMap>
        </div>
      </div>
    </div>
  );
}
