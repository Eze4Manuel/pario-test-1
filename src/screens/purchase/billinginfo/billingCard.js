import InputField from "../../../components/input/inputField";
import Button from "../../../components/button/button";
import DropdownField from "../../../components/input/dropdownField";

import './billingCard.scss';


const BillingCard = (props) => {
    return (
        <>
            <div className='billing-info'>
                <div>
                    <InputField label={'Name on Card'} required={true} value='Opara Linus Ahmed' sublabel={null} />
                </div>
                <div>
                    <DropdownField label={'Card Type'} required={true} value='Visa' sublabel={null} />
                </div>
                <div className="input-group">
                    <div style={{ "width": "70%", "marginRight": "20px" }} >
                        <InputField label={'Name on Card'} required={true} value='4496 4496 4496 4496' sublabel={null} />
                    </div>
                    <div style={{ "width": "10%", "marginRight": "20px", "maxWidth": "120px", "minWidth": "120px" }}>
                        <InputField label={'Expiry date'} required={true} value='04 / 23' sublabel={null} />
                    </div>
                    <div style={{ "width": "auto", "maxWidth": "90px", "minWidth": "90px" }}>
                        <InputField label={'CCV'} required={true} value='669' sublabel={null} />
                    </div>
                </div>

                <div className="button-group" >
                    <Button text={'Next'} buttonType={'action'} onClick={() => props.setCurrentBillingTab('summary')} />
                </div>
                <div className="button-group"  >
                    <Button text={'Cancel Payment'} buttonType={'default'} onClick={() => props.homeTab()} />
                </div>
            </div >
        </>
    )
}
export default BillingCard;

