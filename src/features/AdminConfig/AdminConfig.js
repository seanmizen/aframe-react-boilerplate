import styles from "./AdminConfig.module.css";
import TourPicker from "./components/TourPicker";
import WayPointList from"./components/WayPointList";


/* This will be stored somewhere proper, eventually. for now, use this to build the site */

const tourList = [
  {
    name: "Headington Campus",
    id: 123,
    waypoints: [
      {
        id: 1,
        name: "JHB Ramp",
        latitude: 51.755291,
        longditude: -1.225515,
      },
      {
        id: 2,
        name: "JHB Reception",
        latitude: 51.755,
        longditude: -1.22525,
      },
    ],
  },
  {
    name: "Wheatley Campus",
    id: 321,
    waypoints: [
      {
        id: 1,
        name: "PG101",
        latitude: 51.7494,
        longditude: -1.127831,
      },
      {
        id: 2,
        name: "Dora Cohen",
        latitude: 51.74894,
        longditude: -1.1268,
      },
    ],
  },
];

function AdminConfig() {
  const f = (a, b) => {
    const c = a ** b;
    return c;
  };

  return (
    <div className={styles[""]}>
      <p>{f(4, 2) + " - this is a template"}</p>
      <TourPicker tourList={tourList} />
    </div>
  );
}

export default AdminConfig;
