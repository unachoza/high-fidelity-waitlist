interface Props {
  theme: any;
}

const statuses = [
  "Ready to wear",
  "At dry cleaner",
  "Needs attention",
];

const HeroFloatingCareCard = ({
  theme,
}: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 30,
        left: -20,
        background: theme.bg,
        padding: "1rem",
        borderRadius: 8,
      }}
    >
      <div
        style={{
          marginBottom: "1rem",
        }}
      >
        Care Status
      </div>

      {statuses.map((status) => (
        <div
          key={status}
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background:
                status === "Ready to wear"
                  ? theme.gold
                  : theme.muted,
            }}
          />

          <span>{status}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroFloatingCareCard;