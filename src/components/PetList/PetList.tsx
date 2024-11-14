import * as React from 'react';
import { PetListQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: PetListQuery;
}

const className = 'PetList';

const PetList: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.getPets &&
        data.getPets.map(
          (launch, i) =>
            !!launch && (
              <li key={i} className={`${className}__item`}>
                {launch.ownerName} ({launch.name})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default PetList;