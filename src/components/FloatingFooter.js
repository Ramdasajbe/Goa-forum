import React from 'react'
import { Link } from 'react-router-dom';

function FloatingFooter() {
    return (
        <div className="floating-footer">
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 col-3'>
                        <Link to="/think" className='tab-pan'>
                            <span className='icon think'><i className="las la-lightbulb"></i></span>
                            <span className='text'>Think</span>
                        </Link>
                    </div>
                    <div className='col-sm-3 col-3'>
                        <Link to="/dashboard" className='tab-pan active'>
                            <span className='icon talk'><i className="las la-comments"></i></span>
                            <span className='text'>Talk </span>
                        </Link>
                    </div>
                    <div className='col-sm-3 col-3'>
                        <Link to="#" className='tab-pan'>
                            <span className='icon do'><i className="las la-tasks"></i></span>
                            <span className='text'>Do</span>
                        </Link>
                    </div>
                    <div className='col-sm-3 col-3'>
                        <Link to="#" className='tab-pan'>
                            <span className='icon amplify'><i className="las la-bullhorn"></i></span>
                            <span className='text'>Amplify</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloatingFooter;
