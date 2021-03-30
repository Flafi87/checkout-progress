import PropTypes from 'prop-types';
import React from 'react';

/** @namespace Cart_progress/Component/CheckoutProgressBar/Component/CheckoutProgressBar */
export const CheckoutProgressBar = ({ stepMap, checkoutStep }) => {
    const { url = '' } = stepMap[checkoutStep];
    const stepNames = ['Shipping', 'Review & Payments'];
    // console.log(url);
    // // const steps = [];
    // console.log(stepMap);
    // const stepCount = (Object.keys(stepMap).length);
    // console.log(stepCount);

    if (url === '/shipping') {
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
                <div className="title">{ stepNames[0] }</div>
                <div className="spacer" />
                <div className="title">{ stepNames[1] }</div>
                <div className="spacer" />
            </div>
        </div>
        );
    } if (url === '/billing') {
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
                    <div className="title">{ stepNames[0] }</div>
                    <div className="spacer" />
                    <div className="title">{ stepNames[1] }</div>
                    <div className="spacer" />
                </div>
            </div>
        );
    } if (url === '/success') {
        return (
            <div className="progress-bar">
                Congratulation for your purchase
            </div>
        );
    }

    return null;
};

CheckoutProgressBar.propTypes = {
    stepMap: PropTypes.objectOf(PropTypes.string).isRequired,
    checkoutStep: PropTypes.string.isRequired
};

export default CheckoutProgressBar;
