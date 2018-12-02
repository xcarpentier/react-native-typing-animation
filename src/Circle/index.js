/* eslint-disable react/no-unused-prop-types */
import React from "react";
import { View } from "react-native";
import PropTypes from 'prop-types';

import styles from "./styles";

const getStyles = ({ x, y, radius }) => ({
  left: x,
  top: y,
  width: radius * 2,
  height: radius * 2,
  borderRadius: radius
});

const Circle = () => (
  <View style={[styles.container, getStyles(props)]} />
);

Circle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  radius: PropTypes.number
};

export default Circle;