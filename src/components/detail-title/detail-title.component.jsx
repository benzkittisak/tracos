import React from 'react';

const DetailTitle = ({title ,destination}) => {
    return(
        <div className='detail-title'>
            <div className="detail-destination">
                <p className="text-muted">
                    {destination}
                </p>
            </div>
            <h1>
                {title}
            </h1>
        </div>
    )
}

export default DetailTitle;