import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import { Models } from "./ContextModels";

export default function useWrapperScroll() {
    const { wrapperRef } = useContext(Models);

    const scrollY = useMotionValue(0)
    const scrollProgress = useMotionValue(0)

    useEffect(() => {
        const element = wrapperRef.current
        if (element) {
            const updateScrollValue = () => {
                const { scrollTop, scrollHeight, offsetHeight } = element

                const fullScroll = scrollHeight - offsetHeight

                scrollY.set(scrollTop)
                scrollProgress.set(scrollTop / fullScroll)
            }

            element.addEventListener('scroll', updateScrollValue)

            return () => element?.removeEventListener('scroll', updateScrollValue)
        }
    }, [scrollY ,wrapperRef, scrollProgress])

    return { scrollY, scrollProgress }
}