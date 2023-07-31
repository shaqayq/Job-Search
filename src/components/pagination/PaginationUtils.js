import {useState} from 'react'

export const usePagination = (initialPage = 1, initialPerPage = 8 , jobsList)=>{

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [jobsPerPage] = useState(initialPerPage);
      // Get current posts
        const indexOfLastJob = currentPage * jobsPerPage;
        const indexOfFirstJob = indexOfLastJob - jobsPerPage;
        const currentJobs = jobsList.slice(indexOfFirstJob, indexOfLastJob);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return { currentPage, jobsPerPage, currentJobs, paginate };
}
