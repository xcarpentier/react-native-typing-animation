/* eslint-disable no-undef */
import React from "react";
import { View } from "react-native";

import Circle from "./Circle";
import styles from "./styles";

const centerY = 6;
const amplitude = 3;
const radius = 2.5;
const padding = 3;

class TypingIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnimationTime: 0
    };

    this._animation = () => {
      this.setState(prevState => ({
        y1: centerY + amplitude * Math.sin(prevState.currentAnimationTime),
        y2: centerY + amplitude * Math.sin(prevState.currentAnimationTime - 1),
        y3: centerY + amplitude * Math.sin(prevState.currentAnimationTime - 2),
        currentAnimationTime: prevState.currentAnimationTime + 0.15
      }));
      this.frameAnimationRequest = requestAnimationFrame(this._animation);
    };
    this.frameAnimationRequest = requestAnimationFrame(this._animation);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameAnimationRequest);
  }

  render() {
    return (
      <View style={styles.container}>
        <Circle x={12 - radius - padding} y={this.state.y1} radius={radius} />
        <Circle x={12} y={this.state.y2} radius={radius} />
        <Circle x={12 + radius + padding} y={this.state.y3} radius={radius} />
      </View>
    );
  }
}

export default TypingIndicator;