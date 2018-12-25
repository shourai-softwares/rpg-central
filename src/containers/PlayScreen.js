import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import StatusBox from '../components/StatusBox';
import ScreenContainer from '../components/ScreenContainer';

class PlayScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    return (
      <ScreenContainer>
        <View style={{ flexDirection: 'row' }}>
          <StatusBox
            title="Habilidade"
            initial={2}
            onPress={() => this.props.navigation.navigate('StatusScreen')}
          >{this.state.habilidade}</StatusBox>
          <StatusBox title="Energia">{this.state.energia}</StatusBox>
          <StatusBox title="Sorte">{this.state.sorte}</StatusBox>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <StatusBox title="Equipamento">Equipamento</StatusBox>
          <View style={{ flexGrow: 1 }}>
            <StatusBox title="Ouro">{this.state.ouro}</StatusBox>
            <StatusBox title="Joias">{this.state.joias}</StatusBox>
            <StatusBox title="Poções">{this.state.pocoes}</StatusBox>
            <StatusBox title="Provisões">{this.state.provisoes}</StatusBox>
          </View>
        </View>
        <StatusBox title="Encontros">Encontros</StatusBox>
        <Button title="Roll D4" onPress={() => 1} />
      </ScreenContainer>
    );
  }
}

export default PlayScreen;
