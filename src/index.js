import React from 'react'
import ReactDOM from 'react-dom'
import {Auth0Provider} from '@auth0/auth0-react'

import LoginPage from './Components/LoginPage/LoginPage.jsx'
import HomePage from './Components/HomePage/HomePage.jsx'
import LandingPage from './Components/LandingPage/LandingPage.jsx'

ReactDOM.render(
<Auth0Provider
domain='restaurantapplication.us.auth0.com'
clientId='XDo0CLA6izkypsyBOvfM8vyOT2EPBzhq'
redirectUri={window.location.origin}
>
<LandingPage />
</Auth0Provider>,
document.getElementById('root')
)
