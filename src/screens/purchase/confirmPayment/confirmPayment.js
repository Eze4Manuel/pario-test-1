import check from '../../../assets/images/check.png'; // with import    
import './confirmPayment.scss';

const ConfirmPayment = (props) => {
    return (
        <div className='confirm-payment'>
            <div className='confirm-payment-container'>
                <div className="confirm-payment-check">
                    <img alt='check' src={check} />
                </div>
                <div className="confirm-payment-title"><h3>Purchase Completed</h3></div>
                <div className="confirm-payment-sub-title"><p>Please check your email for details concerning <br /> this transaction</p></div>
                <div className="confirm-payment-return-home">
                    <p onClick={() => props.homeTab()}>Return Home</p>
                </div>
            </div>
        </div>
    )
}
export default ConfirmPayment;