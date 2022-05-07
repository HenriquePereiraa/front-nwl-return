import { feedBackTypes, feedbackType } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypesStepProps {
    onFeedbackTypeChanged: (type: feedbackType) => void;
}

export function FeedBackTypeStep({ onFeedbackTypeChanged }: FeedbackTypesStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedBackTypes).map(([key, value]) => {
                    return (
                        <button
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                            onClick={() => onFeedbackTypeChanged(key as feedbackType)}
                            key={key}
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}