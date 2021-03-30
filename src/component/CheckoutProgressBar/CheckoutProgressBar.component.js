import PropTypes from 'prop-types';
import React from 'react';

import {
    BILLING_STEP,
    DETAILS_STEP,
    SHIPPING_STEP
} from 'SourceRoute/Checkout/Checkout.config';

/** @namespace Cart_progress/Component/CheckoutProgressBar/Component/CheckoutProgressBar */
export const CheckoutProgressBar = ({ checkoutStep }) => {
    const stepNames = {
        SHIPPING_STEP: 'Shipping',
        BILLING_STEP: 'Review & Payments',
        DETAILS_STEP: 'Success'
    };

    if (checkoutStep === SHIPPING_STEP) {
        return (
        <div className="progress-bar">
            <div className="top-bar">
                <div className="spacer active" />
                <div className="circle-container"><div className="circle active">1</div></div>
                <div className="spacer" />
                <div className="circle-container"><div className="circle">2</div></div>
                <div className="spacer" />
            </div>
            <div className="bottom-bar">
                <div className="spacer" />
                <div className="title active">{ stepNames.SHIPPING_STEP }</div>
                <div className="spacer" />
                <div className="title">{ stepNames.BILLING_STEP }</div>
                <div className="spacer" />
            </div>
        </div>
        );
    } if (checkoutStep === BILLING_STEP) {
        return (
            <div className="progress-bar">
                <div className="top-bar">
                    <div className="spacer active" />
                    <div className="circle-container"><div className="circle active">1</div></div>
                    <div className="spacer active" />
                    <div className="circle-container"><div className="circle active">2</div></div>
                    <div className="spacer" />
                </div>
                <div className="bottom-bar">
                    <div className="spacer" />
                    <div className="title active">{ stepNames.SHIPPING_STEP }</div>
                    <div className="spacer" />
                    <div className="title active">{ stepNames.BILLING_STEP }</div>
                    <div className="spacer" />
                </div>
            </div>
        );
    } if (checkoutStep === DETAILS_STEP) {
        return (
            <div className="progress-bar">
            <div className="top-bar">
                <div className="spacer active" />
                <div className="circle-container"><div className="circle active">1</div></div>
                <div className="spacer active" />
                <div className="circle-container"><div className="circle active">2</div></div>
                <div className="spacer active" />
            </div>
            <div className="bottom-bar">
                <div className="spacer" />
                <div className="title">{ stepNames.SHIPPING_STEP }</div>
                <div className="spacer" />
                <div className="title">{ stepNames.BILLING_STEP }</div>
                <div className="spacer" />
            </div>
            </div>
        );
    }

    return null;
};

CheckoutProgressBar.propTypes = {
    checkoutStep: PropTypes.oneOf([
        SHIPPING_STEP,
        BILLING_STEP,
        DETAILS_STEP
    ]).isRequired
};

export default CheckoutProgressBar;
