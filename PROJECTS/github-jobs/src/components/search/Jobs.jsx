import Job from './Job';
import { jobs } from '../../data/jobs-list.js';
import uuid4 from 'uuid4';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { useEffect } from 'react';
const Jobs = (props) => {
  const { filteredJobs, finalFilter, getInfo, value } = props;
  const [jobsData, setJobsData] = useState(jobs.slice(0, 35));
  useEffect(() => {
    setJobsData(finalFilter);
  }, [finalFilter]);
  const [pageNumber, setPageNumber] = useState(0);
  const jobsPerPage = 5;
  const pagesVisited = pageNumber * jobsPerPage;
  const displayJobs = jobsData
    .slice(pagesVisited, pagesVisited + jobsPerPage)
    .map((job) => {
      const id = uuid4();
      return <Job getInfo={getInfo} key={id} {...job} />;
    });
  const pageCount = Math.ceil(jobsData.length / jobsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="jobs">
      {displayJobs}
      <ReactPaginate
        previousLabel={<MdOutlineKeyboardArrowLeft />}
        nextLabel={<MdOutlineKeyboardArrowRight />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationButtons'}
        previousLinkClassName={'prevButton'}
        nextLinkClassName={'nextButton'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
};

export default Jobs;
