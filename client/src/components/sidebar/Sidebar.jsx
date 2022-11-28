import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  BarChart,
  Report,
} from "@material-ui/icons";
import {
  // rooms
  Biotech,
  Vaccines,
  Badge,
  LocalPharmacy,
  // people
  Medication,
  Group,
  MedicationLiquid,
  Storefront
} from '@mui/icons-material/';

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Patients
              </li>
            </Link>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Emergency
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Rooms</h3>
          <ul className="sidebarList">
            <Link to="/labs" className="link">
              <li className="sidebarListItem">
                <Biotech className="sidebarIcon" />
                Labs
              </li>
            </Link>
            <Link to="/opt" className="link">
              <li className="sidebarListItem">
                <Vaccines className="sidebarIcon" />
                Operation Theatres
              </li>
            </Link>
            <Link to="/statusopt" className="link">
              <li className="sidebarListItem">
                <Badge className="sidebarIcon" />
                OPT status
              </li>
            </Link>
            <Link to="/pharmacy" className="link">
              <li className="sidebarListItem">
                <LocalPharmacy className="sidebarIcon" />
                Pharmacy
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">People</h3>
          <ul className="sidebarList">
            <Link to="/doctors" className="link">
              <li className="sidebarListItem">
                <Medication className="sidebarIcon" />
                Doctors
              </li>
            </Link>
            <Link to="/staff" className="link">
              <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                Staff
              </li>
            </Link>
            <Link to="/specialists" className="link">
              <li className="sidebarListItem">
                <MedicationLiquid className="sidebarIcon" />
                Specialist
              </li>
            </Link>
            <Link to="/reception" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Reception team
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
