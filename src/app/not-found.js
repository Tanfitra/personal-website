'use client'
import FuzzyText from "./__components__/ui/FuzzyText"

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
            <FuzzyText
                baseIntensity={0.3}
                hoverIntensity={0.95}
                enableHover={true}
            >
                404
            </FuzzyText>
            <FuzzyText
                baseIntensity={0.35}
                hoverIntensity={0.95}
                enableHover={true}
            >
                Not Found
            </FuzzyText>
        </div>
    )
}

export default NotFoundPage
