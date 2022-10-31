import Button from "../../../components/button/button";
import './billingSummary.scss';


const BillingSummary = (props) => {
    return (
        <div className='billing-summary'>
            <div className="billing-summary-container">
                <div className="billing-summary-top">
                    <span>Item Name</span>
                    <span>&#8358; Price</span>
                </div>
                <div className="billing-summary-content">
                    <div className="billing-summary-content-item">
                        <span>Data Science and usability</span>
                        <span>50,000.00</span>
                    </div>
                    <div className="billing-summary-content-item">
                        <span>Shipping</span>
                        <span>0.00</span>
                    </div>
                    <hr></hr>
                </div>
                <div className="billing-summary-total">
                    <span>Total</span>
                    <span>50,000.00</span>
                </div>
            </div>

            <div className="button-group" >
                <Button text={'Pay'} buttonType={'action'} onClick={() => props.nextTab()} />
            </div>
            <div className="button-group"  >
                <Button text={'Cancel Payment'} buttonType={'default'} onClick={() => props.homeTab()} />
            </div>
        </div >
    )
}
export default BillingSummary;