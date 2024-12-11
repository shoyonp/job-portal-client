import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title,company,applicationDeadline} = useLoaderData()
    
    return (
        <div>
            <h2>job details for{title}</h2>
            <p>apply for: {company}</p>
            <p>deadline: {applicationDeadline}</p>
            <button>Apply Now</button>
        </div>
    );
};

export default JobDetails;