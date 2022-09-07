import { StyledJobList } from "./styles/JobList.styled";
// import Pagination from "../comps/Pagination";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Link from "next/link";


export default function JobList({ job }) {
  return (
    <>
      <StyledJobList>
        <div className="job-list-holder">
          <Link href="/">
            <div className="listing">
              <div className="c-primary info-line w-heavy">
                <span className="fz-14">IT & Project Management</span>{" "}
                <a>
                  <span className="new-tab">
                    <span className="fz-16 d-only">Stelle anzeigen</span>
                    <span className="arrow">
                      <ArrowOutwardOutlinedIcon />
                    </span>
                  </span>
                </a>
              </div>
              <h2 className="fz-18">{job.fields.title}</h2>
              <div className="icons-holder c-gray">
                <div className="single-icon">
                  <PlaceOutlinedIcon />
                  <span className="fz-16">Stuttgart</span>
                </div>
                <div className="single-icon">
                  <AccessTimeIcon />
                  <span className="fz-16">Vollzeit</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </StyledJobList>
    </>
  );
}
