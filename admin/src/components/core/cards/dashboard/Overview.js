import React from 'react';
import NumberCard from './NumberCard';
import ChartCard from './ChartCard';
import GraphCard from './GraphCard';
import ItemsCard from './ItemsCard';
import TableCard from './TableCard';

const Overview = props => {
  const { activeUsers, erasedUsers, processors } = props;

  return (
    <React.Fragment>
      <section className="cards">
        <div className="action-bar">
          <div className="text">
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
          </div>
        </div>
        <div className="row">
          <NumberCard cols="2" data={activeUsers} onClick={props.onClick} />
          <NumberCard cols="2" data={erasedUsers} onClick={props.onClick} />
          <ItemsCard
            cols="4"
            title="Consented by Processor"
            data={processors}
            onClick={props.onClick}
          />
        </div>
        <div className="row">
          <GraphCard cols="3" data={{ title: 'Consented Users' }} />
          <ChartCard cols="5" data={{ title: 'Requests - Last 7 days' }} />
        </div>
        <div className="row">
          <TableCard cols="8" data={{ title: 'Some Table' }} onClick={props.onClick} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Overview;
