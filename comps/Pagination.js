import { StyledPagination } from "./styles/Pagination.styled";
// import Link from "next/link";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
// import { RoundaboutLeftRounded } from "@mui/icons-material";
import { useRouter } from "next/router";


const Pagination = () => {

  const router = useRouter();
  const {page} = router.query;
  const pageNumber = typeof page === "string" ? parseInt(page) : 0; 
  // console.log;
  return (
    <StyledPagination>
      <div className="pagination-holder c-gray fz-14 w-heavy">
        <span>
          <button
            className="page-buttons"
            onClick={() => router.push(`/?page=${pageNumber-1}`)}
          >
            {" "}
            <span className="flex-center">
              <ArrowBackOutlinedIcon className="m-right-5" />
              <span className="d-only">Vorherige</span>
            </span>
          </button>
        </span>
        <span className="num-holder">
          <div className="numbs">
            <div className="page-num">1</div>
            <div className="page-num">2</div>
            <div className="page-num">3</div>
            <div className="page-num">...</div>
            <div className="page-num">5</div>
            <div className="page-num">6</div>
          </div>
        </span>
        <span>
          <button
            className="page-buttons"
            onClick={() => router.push(`/?page=${pageNumber+1}`)}
          >
            <span className="flex-center">
              <span className="d-only">Nachste</span>
              <ArrowForwardOutlinedIcon className="m-left-5" />
            </span>
          </button>
        </span>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
