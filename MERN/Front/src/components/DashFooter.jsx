import {useNavigate, useLocation} from 'react-router-dom';


function DashFooter() {

    const navigate = useNavigate()
    const {pathname} = useLocation()

    const onGoHomeClicked = () => navigate('/dash')
        let goHomeButton = null

        if(pathname !== '/dash'){
            goHomeButton = (
                <button
                 className="dash-footer__button icon-button"
                  onClick={onGoHomeClicked} title="Home">
                    Go Home
                </button>
            )
        }

const content = (
<footer className='dash-footer'>
    {goHomeButton}
<p>Current User:</p>
<p>Status:</p>
</footer>
)

return content
}

export default DashFooter