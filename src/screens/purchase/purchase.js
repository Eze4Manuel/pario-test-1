import PersonalInfo from "./personalInfo/personalInfo";
import BillingInfo from "./billinginfo/billingInfo";
import ConfirmPayment from "./confirmPayment/confirmPayment";

import { useState } from 'react';
import { tabList } from '../../config/data';

const Purchase = () => {
    const [tabs, setTabs] = useState(tabList);
    const activeTab = (tabs.findIndex(elem => (elem.isActive === true)));

    const nextTab = () => {
        let activeIndex = tabs.findIndex(elem => (elem.isActive === true));
        tabs[activeIndex].isActive = false;
        tabs[activeIndex + 1].isActive = true;
        setTabs([...tabs])
    }
    const homeTab = () => {
        let activeIndex = tabs.findIndex(elem => (elem.isActive === true));
        tabs[activeIndex].isActive = false;
        tabs[0].isActive = true;
        setTabs([...tabs])
    }

    return (

        <div className='purchase'>
            {(activeTab === 0) ?
                <PersonalInfo tabs={tabs} nextTab={nextTab} homeTab={homeTab} />
                :
                (activeTab === 1) ?
                    <BillingInfo tabs={tabs} nextTab={nextTab} homeTab={homeTab} />
                    :
                    <ConfirmPayment tabs={tabs} homeTab={homeTab} />
            }
        </div>
    )
}


export default Purchase;