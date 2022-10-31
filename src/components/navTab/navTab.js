import uuid from 'react-uuid';

import './navTab.scss';

const NavTab = (props) => {
    return (
        < div className='tab'>
            {
                props.tabs.map((elem) => (
                    <div className={`nav-tab ${elem.isActive ? 'active' : 'inactive'} `} key={uuid()}>
                        <h4 className={`${elem.isActive ? 'active' : 'inactive'} ${elem.position}`}>{elem.tabName}</h4>
                        <div className={`${elem.isActive ? 'active' : 'inactive'} nav-bar`}>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
export default NavTab;