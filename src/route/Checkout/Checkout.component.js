import ContentWrapper from 'SourceComponent/ContentWrapper';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import { CheckoutProgressBar } from '../../component/CheckoutProgressBar/CheckoutProgressBar.component';

import './Checkout.override.style.scss';

/** @namespace Cart_progress/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderCheckoutProgressBar() {
        return (
        <CheckoutProgressBar stepMap={ this.stepMap } checkoutStep={ this.props.checkoutStep } />
        );
    }

    render() {
        return (
            <main block="Checkout">
                { this.renderCheckoutProgressBar() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
