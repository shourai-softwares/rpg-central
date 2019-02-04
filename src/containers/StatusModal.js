import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, Button, Modal } from 'react-native';

class StatusModal extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.initialState = {
      value: 0,
      initialValue: 0,
      newInitialValue: '0',
    };

    this.state = this.initialState;
  }

  handleUpValue = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDownValue = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  handleClose = () => {
    const { value, initialValue } = this.state;

    this.setState(this.initialState);
    this.props.onClose({
      value,
      initialValue,
    });
  };

  rollDice = () => {
    const newValue = Math.round(Math.random() * 6);
    this.setState({ initialValue: newValue });
  };

  handleSetInitialValue = () => {
    this.setState(prevState => ({
      initialValue: Number(prevState.newInitialValue),
      newInitialValue: '0',
    }));
  };

  render() {
    return (
      <Modal
        visible={this.props.isOpen}
        onRequestClose={this.handleClose}
        animationType="fade"
        transparent
      >
        <View
          onPress={this.props.onClose}
          style={{ justifyContent: 'center', flexGrow: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <View style={{ backgroundColor: 'white', alignSelf: 'center', padding: 25, borderRadius: 25 }}>
            <Text>Habilidade</Text>
            <Text>{this.state.value}/{this.state.initialValue}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button title="up" onPress={this.handleUpValue} />
              <Button title="down" onPress={this.handleDownValue} />
            </View>
            <Text>New Initial Value</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={newInitialValue => this.setState({ newInitialValue })}
              value={this.state.newInitialValue}
            />
            <View style={{ flexDirection: 'row' }}>
              <Button title="Roll D6" onPress={this.rollDice} />
              <Button title="Set Initial Value" onPress={this.handleSetInitialValue} />
            </View>
            <View style={{ marginTop: 10 }}>
              <Button title="Done" onPress={this.handleClose} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default StatusModal;
