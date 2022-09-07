import {StyledPagination} from './styles/Pagination.styled';
import Link from 'next/link'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Pagination = () =>{
{/* <Link to={previous.fields.slug} rel="prev"></Link> */}
  return(
    <StyledPagination>
    <div className="pagination-holder c-gray fz-14 w-heavy">
          <span>
              <Link href="/" rel="prev">
                <span className='flex-center'>
                <ArrowBackOutlinedIcon className='m-right-5'/> 
                <span className='d-only'>Vorherige</span>
                </span>
              </Link>
          </span>
          <span className='num-holder'>
            <div className='numbs'>
                <div className='page-num'>1</div>
                <div className='page-num'>2</div>
                <div className='page-num'>3</div>
                <div className='page-num'>...</div>
                <div className='page-num'>5</div>
                <div className='page-num'>6</div>
            </div>
          </span>
          <span>
              <Link href="/" rel="next">
                <span className='flex-center'>
                <span className='d-only'>Nachste</span><ArrowForwardOutlinedIcon className='m-left-5'/>
                </span>
              </Link>
          </span>
    </div>
    </StyledPagination>
  )
}

export default Pagination