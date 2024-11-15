import * as React from 'react';
import { BotListQuery } from '../../generated/graphql';
import './styles.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';

interface Props {
  data: BotListQuery;
}

const className = 'BotList';

const BotList: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <ol className={`${className}__list p-5`}>
      {!!data.getBots &&
        data.getBots.map(
          (bot, i) =>
            !!bot && (
              <li key={i} className={`${className}__item`}>
                <Card className="w-full mb-5">
                  <CardHeader>
                    <CardTitle>{bot.name}</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>{bot.description}</CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Edit</Button>
                  </CardFooter>
                </Card>
              </li>
            ),
        )}
    </ol>
  </div>
);

export default BotList;
