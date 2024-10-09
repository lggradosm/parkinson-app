import { useEffect, useState } from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
type Props = {
  size: number;
  strokeWidth: number;
  color: string;
  active: boolean;
}

export default function CircularProgress ({ size, strokeWidth, color, active }:Props) {
  const TIME = 9
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / (1000/ TIME)) * circumference;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 1000/TIME) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 1000/TIME;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Circle
          stroke="#e6e6e6"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          {...{ strokeWidth }}
        />
      </Svg>
    </View>
  );
};


