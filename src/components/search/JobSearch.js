import React from 'react'

export default function JobSearch() {
  return (
    <>
     <form class="job-search-form">
        <div class="form-group">
            <label for="search">Search:</label>
            <input type="text" id="search" name="search" placeholder="Search jobs..." />
        </div>
        <div class="form-group">
            <label for="source-url">Source URL:</label>
            <input type="text" id="source-url" name="source-url" placeholder="Enter source URL..." />
        </div>
        <div class="form-group">
            <label for="location-search">Location Search:</label>
            <input type="text" id="location-search" name="location-search" placeholder="Enter location..." />
        </div>
        <div class="form-group">
            <label for="remote">Remote:</label>
            <select id="remote" name="remote">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select>
        </div>
        <div class="form-group">
            <label for="company-employees">Company Number of Employees:</label>
            <input type="number" id="company-employees" name="company-employees" min="1" />
        </div>
        <div class="form-group">
            <label for="employment-type">Employment Type:</label>
            <select id="employment-type" name="employment-type">
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
            <option value="internship">Internship</option>
            </select>
        </div>
        <div class="form-group">
            <button type="submit">Search</button>
        </div>
        </form>

    </>
  )
}
