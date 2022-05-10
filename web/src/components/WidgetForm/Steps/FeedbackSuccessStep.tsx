import { CheckSquare } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepsProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepsProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <CheckSquare size={38} weight="duotone" className="text-[#008000]" />

                <span className="text-xl mt-2">Agradeçemos o Feedback!</span>

                <button 
                    onClick={onFeedbackRestartRequested}
                    type="button"
                    className="py-2 px-6 mt-6 bg-brand-500 rounded-md border-transparent text-sm leading-6 hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-900 focus:ring-brand-500 transition-colors">
                    Quero enviar outro.
                </button>
            </div>
        </>
    );
}