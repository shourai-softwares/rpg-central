import React, { PureComponent } from 'react';
import { Text, Button } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

class StatusScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScreenContainer>
        <Text>Habilidade</Text>
        <Text>Value/InitialValue</Text>
        <Button title="up" onPress={() => 1} />
        <Button title="down" onPress={() => 1} />
        <Text>New Initial Value</Text>
        <Button title="Roll D6" onPress={() => 1} />
        <Button title="Set Initial Value" onPress={() => 1} />
      </ScreenContainer>
    );
  }
}

export default StatusScreen;
