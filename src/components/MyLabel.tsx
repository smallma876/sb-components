import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Es es el texto
   */
  label: string;
  /**
   * Este es el tamanio del texto
   */
  size: "normal" | "h1" | "h2" | "h3";
  allCaps: boolean;
  color: "primary" | "secondary" | "tertiary";
  fontColor?: string;
}

const MyLabel = ({
  allCaps,
  label = "No Label",
  size = "normal",
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
