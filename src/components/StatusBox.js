import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
  box: {
    alignItems: 'center',
    borderColor: '#63a148',
    borderRadius: 5,
    borderWidth: 2,
    flexGrow: 1,
    margin: 2,
    padding: 10,
  },
});

const StatusBox = ({ children, initial, onPress, title }) => (
  <TouchableOpacity
    style={style.box}
    onPress={onPress}
  >
    <Text>{title}</Text>
    <Text>{initial ? `${children}/${initial}` : children }</Text>
  </TouchableOpacity>
);
StatusBox.propTypes = {
  children: PropTypes.any,
  initial: PropTypes.any,
  onPress: PropTypes.func,
  title: PropTypes.string,
};

export default StatusBox;
