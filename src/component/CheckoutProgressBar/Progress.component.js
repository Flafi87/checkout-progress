import PropTypes from 'prop-types';
import React from 'react';

/** @namespace Cart_progress/Component/CheckoutProgressBar/Progress/Component/TopProgress */
export const TopProgress = ({ stepNames, checkoutStep }) => {
    const elements = [];
    // eslint-disable-next-line fp/no-let
    let i; let k = 0;
    for (i = 0; i < Object.keys(stepNames).length + Object.keys(stepNames).length + 1; i++) {
        if (i % 2 === 0) {
            if (i <= stepNames[checkoutStep].step) {
                elements.push(<div key={ i } className="spacer active" />);
            } else {
                elements.push(<div key={ i } className="spacer" />);
            }
        } else if (i % 2 !== 0) {
            k++;
            if (i <= stepNames[checkoutStep].step + 1) {
                elements.push(
                    <div key={ i } className="circle-container"><div className="circle active">{ [k] }</div></div>
                );
            } else {
                elements.push(
                    <div key={ i } className="circle-container"><div className="circle">{ [k] }</div></div>
                );
            }
        }
    }

    return elements;
};

TopProgress.propTypes = {
    stepNames: PropTypes.objectOf(
        PropTypes.shape({
            name: PropTypes.string,
            step: PropTypes.number
        })
    ).isRequired
};

/** @namespace Cart_progress/Component/CheckoutProgressBar/Progress/Component/BottomProgress */
export const BottomProgress = ({ stepNames, checkoutStep, stepNamesArray }) => {
    const elements = [];
    // eslint-disable-next-line fp/no-let
    let i; let k = 0;
    for (i = 0; i < Object.keys(stepNames).length + Object.keys(stepNames).length + 1; i++) {
        if (i % 2 === 0) {
            elements.push(<div key={ i } className="spacer" />);
        } else if (i % 2 !== 0) {
            // k++;
            if (i <= stepNames[checkoutStep].step + 1) {
                elements.push(
                    <div key={ i } className="title active">{ stepNamesArray[k] }</div>
                );
            } else {
                elements.push(
                    <div key={ i } className="title">{ stepNamesArray[k] }</div>
                );
            }
            k++;
        }
    }

    return elements;
};

BottomProgress.propTypes = {
    stepNames: PropTypes.objectOf(
        PropTypes.shape({
            name: PropTypes.string,
            step: PropTypes.number
        })
    ).isRequired,
    stepNamesArray: PropTypes.arrayOf(PropTypes.string).isRequired
};
