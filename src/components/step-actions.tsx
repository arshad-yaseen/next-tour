import React from 'react';

import {getTourOptions} from '../helpers';
import {useTourControls, useTourState} from '../hooks';

/**
 * StepActions component renders navigation and control buttons for the tour.
 * It conditionally displays back, close, next, and finish buttons based on the tour state.
 */
const StepActions = () => {
  const {totalSteps, activeStepIndex, activeTour} = useTourState();
  const {nextStep, prevStep, completeTour} = useTourControls();

  // Extract options for the currently active tour
  const {showBackButton: showBackButtonOption, showCloseButton} =
    getTourOptions(activeTour);

  // Determine button visibility based on tour state and options
  const showBackButton =
    totalSteps > 1 && activeStepIndex > 0 && showBackButtonOption;
  const showNextButton = activeStepIndex < totalSteps - 1;
  const showFinishButton = activeStepIndex === totalSteps - 1;

  return (
    <div className="nt-step-actions">
      {showBackButton && (
        <button onClick={prevStep} className="nt-button" data-variant="outline">
          Back
        </button>
      )}
      {showCloseButton && (
        <button
          onClick={completeTour}
          className="nt-button"
          data-variant="outline">
          Close
        </button>
      )}
      <div style={{flex: 1}} />
      {showNextButton && (
        <button onClick={nextStep} className="nt-button" data-variant="primary">
          Next
        </button>
      )}
      {showFinishButton && (
        <button
          onClick={completeTour}
          className="nt-button"
          data-variant="primary">
          Finish
        </button>
      )}
    </div>
  );
};

export default StepActions;
