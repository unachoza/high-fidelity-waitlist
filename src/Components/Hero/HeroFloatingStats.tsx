interface Props {
  theme: any;
}

const HeroFloatingStats = ({ theme }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 30,
        right: -20,
        background: theme.bg,
        padding: "1rem",
        borderRadius: 8,
      }}
    >
      <div>Wardrobe</div>

      <div
        style={{
          fontFamily:
            "'Cormorant Garamond', serif",
          fontSize: 42,
        }}
      >
        47
      </div>

      <div>items tracked</div>
    </div>
  );
};

export default HeroFloatingStats;