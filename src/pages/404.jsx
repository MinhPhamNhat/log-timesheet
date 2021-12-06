import React from 'react'
import { exceptionConstants } from '../constants'

const { BAD_REQUEST, SERVER_ERROR, PAGE_NOT_FOUND } = exceptionConstants
const Error = (props) => {
    const { message, code } = props
    switch (code === PAGE_NOT_FOUND){
        
    }
    return (
        <div className="404-page">
            <div className="wrapper">
                <div className="page vertical-align text-center">
                    <div className="page-content vertical-align-middle">
                        <header>
                            <h1 className="animation-slide-top">404</h1>
                            <p>Page Not Found !</p>
                        </header>
                        <p className="error-advise">The page you were looking for could not be found.</p>
                        <a className="btn btn-primary btn-round mb-5" href="./">GO TO HOME PAGE</a>
                        <footer className="page-copyright">
                            <p>© 2021. All RIGHT RESERVED.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (Error)