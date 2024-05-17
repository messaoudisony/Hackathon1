import Icon from "@mdi/react";
import "./animation.css";
import {
  mdiStarFourPointsOutline,
  mdiWaterOutline,
  mdiCreationOutline,
  mdiChartBubble,
  mdiRocket,
  mdiFish,
  mdiWhiteBalanceSunny,
} from "@mdi/js";
export default function Animation() {
  return (
    <div>
      <Icon
        path={mdiChartBubble}
        size={1}
        className="star1"
        style={{ left: "5%", color: "blue" }}
      />
      <Icon
        path={mdiCreationOutline}
        size={1}
        className="star2"
        style={{ left: "10%", color: "red" }}
      />
      <Icon
        path={mdiStarFourPointsOutline}
        size={1}
        className="star3"
        style={{ left: "15%", color: "white" }}
      />
      <Icon
        path={mdiWaterOutline}
        size={1}
        className="star6"
        style={{ left: "20%", color: "red" }}
      />
      <Icon
        path={mdiStarFourPointsOutline}
        size={1}
        className="star1"
        style={{ left: "25%", color: "red" }}
      />
      <Icon
        path={mdiStarFourPointsOutline}
        size={1}
        className="star3"
        style={{ left: "30%", color: "red" }}
      />
      <Icon
        path={mdiWaterOutline}
        size={1}
        className="star2"
        style={{ left: "40%", color: "red" }}
      />
      <Icon
        path={mdiStarFourPointsOutline}
        size={1}
        className="star6"
        style={{ left: "45%", color: "blue" }}
      />
      <Icon
        path={mdiStarFourPointsOutline}
        size={1}
        className="star3"
        style={{ left: "30%", color: "blue" }}
      />
      <Icon
        path={mdiWaterOutline}
        size={1}
        className="star4"
        style={{ left: "50%", color: "red" }}
      />
      <Icon
        path={mdiWaterOutline}
        size={1}
        className="star2"
        style={{ left: "55%", color: "red" }}
      />
      <Icon
        path={mdiWaterOutline}
        size={1}
        className="star5"
        style={{ left: "60%", color: "yellow" }}
      />
      <Icon
        path={mdiStarFourPointsOutline}
        size={1}
        className="star2"
        style={{ left: "65%", color: "yellow" }}
      />
      <Icon
        path={mdiStarFourPointsOutline}
        size={1}
        className="star6"
        style={{ left: "70%", color: "green" }}
      />
      <Icon
        path={mdiWaterOutline}
        size={1}
        className="star3"
        style={{ left: "75%", color: "white" }}
      />
      <Icon
        path={mdiWaterOutline}
        size={1}
        className="star1"
        style={{ left: "80%", color: "red" }}
      />
      <Icon
        path={mdiStarFourPointsOutline}
        size={1.5}
        className="star4"
        style={{ left: "90%", color: "red" }}
      />
      <Icon
        path={mdiRocket}
        size={1.5}
        className="star8"
        style={{ left: "90%", color: "white" }}
      />
      <Icon
        path={mdiRocket}
        size={1.5}
        className="star8"
        style={{ left: "10%", color: "blue" }}
      />

      <Icon
        path={mdiFish}
        size={1.5}
        className="fish"
        style={{ left: "35%", color: "orange" }}
      />
      <Icon
        path={mdiWhiteBalanceSunny}
        size={1.5}
        className="sun"
        style={{ left: "35%", color: "yellow" }}
      />
    </div>
  );
}
