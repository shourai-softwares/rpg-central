import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

class HomeScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      chars: ['teste'],
      newName: '',
    };
  }

  handleAddChar = () => {
    const chars = [
      ...this.state.chars,
      this.state.newName,
    ];

    this.setState({
      chars,
      newName: '',
    });
  };

  render() {
    return (
      <ScreenContainer>
        <TextInput
          value={this.state.newName}
          onChangeText={newName => this.setState({ newName })}
        />
        <Button title="Add Character" onPress={this.handleAddChar} />
        <FlatList
          data={this.state.chars}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row' }}>
              <Text>{item}</Text>
              <Button
                title="Play"
                onPress={() => this.props.navigation.navigate('PlayScreen')}
              />
            </View>
          )}
        />
      </ScreenContainer>
    );
  }
}

export default HomeScreen;
