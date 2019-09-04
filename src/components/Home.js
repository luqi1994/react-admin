import React from 'react';
import { Skeleton,Card } from 'antd';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

class Home extends React.Component {

  render() {
    return (

      <div>
          <Skeleton avatar paragraph={{ rows: 4 }} />
          <Card title="Card Title">
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>
      </div>

    );
  }
  
}

export default Home;