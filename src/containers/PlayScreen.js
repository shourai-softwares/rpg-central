import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import StatusBox from '../components/StatusBox';
import ScreenContainer from '../components/ScreenContainer';
import StatusModal from './StatusModal';

class PlayScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      isStatusModalOpen: false,
      habilidade: 0,
      energia: 0,
      sorte: 0,
      equipamento: [],
      ouro: 0,
      joias: 0,
      pocoes: 0,
      provisoes: 0,
      encontros: [],
    };
  }

  handleStatusClick = (statusName) => {
    this.openedStatus = statusName;
    this.setState({ isStatusModalOpen: true });
  };

  handleModalClose = ({ value, initialValue }) => {
    this.setState({
      [this.openedStatus]: value,
      isStatusModalOpen: false,
    });
  };

  render() {
    return (
      <ScreenContainer>
        <View style={{ flexDirection: 'row' }}>
          <StatusBox
            title="Habilidade"
            initial={2}
            onPress={() => this.handleStatusClick('habilidade')}
          >
            {this.state.habilidade}
          </StatusBox>
          <StatusBox title="Energia" onPress={() => this.handleStatusClick('energia')}>{this.state.energia}</StatusBox>
          <StatusBox title="Sorte" onPress={() => this.handleStatusClick('sorte')}>{this.state.sorte}</StatusBox>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <StatusBox title="Equipamento">Equipamento</StatusBox>
          <View style={{ flexGrow: 1 }}>
            <StatusBox title="Ouro" onPress={() => this.handleStatusClick('ouro')}>{this.state.ouro}</StatusBox>
            <StatusBox title="Joias" onPress={() => this.handleStatusClick('joias')}>{this.state.joias}</StatusBox>
            <StatusBox title="Poções" onPress={() => this.handleStatusClick('pocoes')}>{this.state.pocoes}</StatusBox>
            <StatusBox title="Provisões" onPress={() => this.handleStatusClick('provisoes')}>{this.state.provisoes}</StatusBox>
          </View>
        </View>
        <StatusBox title="Encontros">Encontros</StatusBox>
        <Button title="Roll D4" onPress={() => 1} />
        <StatusModal isOpen={this.state.isStatusModalOpen} onClose={this.handleModalClose} />
      </ScreenContainer>
    );
  }
}

export default PlayScreen;
