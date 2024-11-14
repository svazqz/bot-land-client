import * as React from 'react';
import { BotListQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: BotListQuery;
}

const className = 'BotList';

const BotList: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.getBots &&
        data.getBots.map(
          (launch, i) =>
            !!launch && (
              <li key={i} className={`${className}__item`}>
                {launch.name} ({launch.description})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default BotList;
