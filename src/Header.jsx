import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Header = () => {
    const [newsData, setNewsData] = useState([])
    const [Route, setRoute] = useState('business')
    const handleClick = (route) => {
        setRoute(route)
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${Route}&apiKey=122442c9a1cf47a0af3df54c86818f36`).then((response) => {
            setNewsData(response?.data?.articles)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        handleClick()

    }, [])
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark-tertiary navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => handleClick()}>News App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" onClick={() => handleClick('business')}>Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" onClick={() => handleClick('entertainment')}>Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleClick('general')}>General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" onClick={() => handleClick('health')}>Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleClick('science')}>Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" onClick={() => handleClick('sports')}>Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleClick('technology')}>Technology</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-item">India</li>
                                        <li class="dropdown-item">Briten</li>
                                        <li class="dropdown-item">neatherland</li>
                                    </ul>
                                </li>
                            </ul>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Cards data={Route} newsData={newsData} />
        </div>
    )
}

export default Header