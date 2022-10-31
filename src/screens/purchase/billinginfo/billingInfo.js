import BillingCard from "./billingCard";
import BillingSummary from "./billingSummary";
import Header from "../../../components/header/header";
import NavTab from "../../../components/navTab/navTab";
import { useState } from "react";

const BillingInfo = (props) => {
    const [currentBillingTab, setCurrentBillingTab] = useState('card');

    return (
        <>
            <Header text='Complete your Purchase' />
            <NavTab tabs={props.tabs} />

            <div>
                {(currentBillingTab === 'card') ?
                    <BillingCard nextBillingTab={props.nextTab} setCurrentBillingTab={setCurrentBillingTab} homeTab={props.homeTab} /> :
                    <BillingSummary setCurrentBillingTab={setCurrentBillingTab} nextTab={props.nextTab} homeTab={props.homeTab} />}
            </div>


        </>
    )
}
export default BillingInfo;

