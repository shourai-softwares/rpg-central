import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const ScreenContainer = ({ children }) => (
  <View
    style={{
      backgroundColor: '#f7ffc2',
      flexGrow: 1,
      padding: 10,
    }}
  >
    {children}
  </View>
);
ScreenContainer.propTypes = {
  children: PropTypes.node,
};

export default ScreenContainer;
