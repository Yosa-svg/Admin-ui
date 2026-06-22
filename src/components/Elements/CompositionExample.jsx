import { useContext } from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { ThemeContext } from "../../context/themeContext";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();
  const { theme } = useContext(ThemeContext);

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill={theme.color} />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke={theme.color}
        strokeWidth={3}
      />
    </g>
  );
}

export default function CompositionExample(props) {
  const { data } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <GaugeContainer
      width={150}
      height={80}
      startAngle={-90}
      endAngle={90}
      value={data}
      sx={() => ({
        [`& .value-arc`]: {
          fill: theme.color,
        },
      })}
    >
      <GaugeReferenceArc />
      <GaugeValueArc className="value-arc" />
      <GaugePointer />
    </GaugeContainer>
  );
}
