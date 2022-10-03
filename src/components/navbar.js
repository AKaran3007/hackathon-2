import React from 'react'



function navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">BOOK MY SHOW</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/home">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    



  )
}

export default navbar;
