'use client';

import { cn } from '@/lib/utils';

interface Step {
  label: string;
}

interface StepperProps {
  currentStep: number;
  steps: Step[];
  setCurrentStep?: (step: number) => void;
}

export function BookingStepper({ currentStep, steps, setCurrentStep }: StepperProps) {
  const handleStepClick = (index: number) => {
    if (setCurrentStep && index < currentStep) {
      setCurrentStep(index);
    }
  };

  return (
    <div className="sticky top-0 z-40  backdrop-blur-sm p-5 sm:p-6 space-y-2">
      <div className="relative w-full overflow-x-auto">
        <ol className="relative flex items-center justify-between w-full text-sm text-muted-foreground">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const isClickable = setCurrentStep && index < currentStep;

            return (
              <li
                key={index}
                className="flex-1 min-w-max text-center"
                onClick={() => handleStepClick(index)}
              >
                <div
                  className={cn(
                    'relative flex flex-col items-center group',
                    isClickable ? 'cursor-pointer' : 'cursor-default'
                  )}
                >
                  {/* Step Line */}
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        'absolute top-3 left-1/2 h-0.5 w-full z-[-1]',
                        isCompleted ? 'bg-green-500' : 'bg-muted'
                      )}
                      style={{ width: '200%' }}
                    />
                  )}

                  {/* Step Circle */}
                  <div
                    className={cn(
                      'flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-200',
                      isCompleted
                        ? 'bg-green-500 border-green-500 text-white'
                        : isActive
                          ? 'border-primary bg-primary text-white'
                          : 'border-muted bg-background text-muted-foreground',
                      isClickable && 'group-hover:border-primary/50'
                    )}
                  >
                    {isCompleted ? '✓' : index + 1}
                  </div>

                  {/* Label */}
                  <span
                    className={cn(
                      'mt-2 text-xs font-medium',
                      isActive
                        ? 'text-primary'
                        : isCompleted
                          ? 'text-green-600 group-hover:text-primary'
                          : 'text-muted-foreground'
                    )}
                  >
                    {step.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
