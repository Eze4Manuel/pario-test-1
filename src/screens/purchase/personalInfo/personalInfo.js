import InputField from "../../../components/input/inputField";
import DropdownField from "../../../components/input/dropdownField";
import Button from "../../../components/button/button";
import Header from "../../../components/header/header";
import NavTab from "../../../components/navTab/navTab";
import './personalInfo.scss';

const PersonalInfo = (props) => {
    return (
        <>
            <Header text='Complete your Purchase' />
            <NavTab tabs={props.tabs} />
            <div className='personal-info'>
                <div>
                    <InputField label={'Name'} value='Opara Linus Ahmed' sublabel={null} />
                </div>
                <div>
                    <InputField label={'Email Address'} required={true} sublabel={'The purchase reciept would be sent to this address'} value='OparaLinusAhmed@devmail.com' />
                </div>
                <div>
                    <InputField label={'Address 1'} value='The address of the user goes here' sublabel={null} />
                </div>
                <div>
                    <InputField label={'Address 2'} value='and here' sublabel={null} />
                </div>
                <div>
                    <div className="input-group" style={{ "width": "58%", "marginRight": "10px" }} >
                        <InputField label={'Local Government'} value='Surulere' sublabel={null} />
                    </div>
                    <div className="input-group" style={{ "width": "40%" }} >
                        <DropdownField label={'State'} value='Surulere' sublabel={null} />
                    </div>
                </div>
                <div className="input-group" >
                    <Button text={'Next'} buttonType={'action'} onClick={() => props.nextTab()} />
                </div>
                <div className="input-group"  >
                    <Button text={'Cancel Payment'} buttonType={'default'} onClick={() => props.homeTab()} />
                </div>
            </div >
        </>
    )
}
export default PersonalInfo;