import PropTypes from 'prop-types';
import React from 'react';

import {
    BILLING_STEP,
    DETAILS_STEP,
    SHIPPING_STEP
} from 'SourceRoute/Checkout/Checkout.config';

import { BottomProgress, TopProgress } from './Progress.component';

/** @namespace Cart_progress/Component/CheckoutProgressBar/Component/CheckoutProgressBar */
export const CheckoutProgressBar = ({ checkoutStep }) => {
    const stepNames = {
        SHIPPING_STEP: { name: 'Shipping', step: 1 },
        BILLING_STEP: { name: 'Review & Payments', step: 2 },
        DETAILS_STEP: { name: 'Success', step: 3 }
    };
    const stepNamesArray = ['Shipping', 'Review & Payments', 'Success'];

    return (
        <div className="progress-bar">
            <div className="top-bar">
                <TopProgress checkoutStep={ checkoutStep } stepNames={ stepNames } />
            </div>
            <div className="bottom-bar">
                <BottomProgress
                  checkoutStep={ checkoutStep }
                  stepNames={ stepNames }
                  stepNamesArray={ stepNamesArray }
                />
            </div>
        </div>
    );
};

CheckoutProgressBar.propTypes = {
    checkoutStep: PropTypes.oneOf([
        SHIPPING_STEP,
        BILLING_STEP,
        DETAILS_STEP
    ]).isRequired
};

export default CheckoutProgressBar;
