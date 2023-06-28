import React from 'react'

function Start() {
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
    <div>
            <h1>Welcome to Login Flow Implementation</h1>
            <div className="container d-flex align-items-center justify-content-evenly mt-5">
                <div>
                        <a href="/login" className="btn btn-outline-dark">Login</a>
                    </div>

                    <div>
                        <a href="/signup" className="btn btn-outline-dark">Signup</a>
                    </div>
            </div>
        </div>
</div>
  )
}

export default Start