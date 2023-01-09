import React from 'react'

const Cards = ({ data, newsData }) => {
    console.log(data)
    return (
        <div>

            <div className='container underline text-center my-2'>
                <h4 >Top Headline Related :<span className='h4 text-danger'> {data ? data.toUpperCase() : "BUSNIESS"}</span> </h4>
            </div>
            <div className='container my-4'>
                <div className="row">

                    {newsData.map((ele, ind) => {
                        return <>
                            {(ele?.author && ele?.author && ele?.description && ele?.urlToImage) && <div className="col-sm-4 mb-3 mb-sm-0mx-2">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={ele?.urlToImage} class="card-img-top" alt="..." />
                                        <h5 className="card-title"> Titel : {ele?.title}</h5>
                                        <p className="card-text">Discription : {ele?.description}</p>
                                        <p className="card-text">Publish Dare : <span className='text-warning'>
                                            {ele?.publishedAt}  </span></p>
                                        <a target="_blank" href={ele?.url} className="btn btn-primary">View More</a>
                                    </div>
                                </div>
                            </div>}

                        </>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cards