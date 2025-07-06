import Marquee from "react-fast-marquee";
import StickyCard from "./StickyCard";

const MarqueeRow = ({
  cards,
  direction = 'left',
  delay = 2000,
  speed = 30, // px per second
}: {
  cards: any[];
  direction?: 'left' | 'right';
  delay?: number;
  speed?: number;
}) => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee
        direction={direction}
        speed={speed}
        delay={delay / 1000}
        pauseOnHover={true}
        gradient={false}
        style={{ width: "100%" }}
      >
        {cards.map((card, idx) => (
          <div key={idx} className="mx-3 flex-shrink-0">
            <StickyCard {...card} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeRow;