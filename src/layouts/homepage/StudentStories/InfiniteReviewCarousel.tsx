import { motion, useMotionValue, useAnimationControls } from "motion/react";
import { useState, useEffect } from "react";
import SingleStudentStoryDetailsCard from "../../../components/common/detailscard/SingleStudentStoryDetailsCard";

type Props = {
    studentStories: {
        ratingValue: number;
        description: string;
        image: string;
        name: string;
        position: string;
    }[];
};

export default function InfiniteReviewCarousel({ studentStories }: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimationControls();
    const x = useMotionValue(0);
    
    // Duplicate the array multiple times for seamless loop
    const duplicatedStories = [...studentStories, ...studentStories, ...studentStories];
    
    const cardWidth = 350; // Width including gap
    const totalWidth = studentStories.length * cardWidth;

    useEffect(() => {
        if (!isHovered) {
            // Resume animation from current position
            const startAnimation = async () => {
                await controls.start({
                    x: -totalWidth,
                    transition: {
                        duration: studentStories.length * 8,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }
                });
            };
            startAnimation();
        } else {
            // Stop the animation but keep current position
            controls.stop();
        }
    }, [isHovered, controls, totalWidth, studentStories.length]);

    return (
        <div 
            className="relative py-4 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >            <motion.div
                className="flex items-stretch gap-6" // Added items-stretch for equal height
                animate={controls}
                style={{ 
                    x,
                    width: `${duplicatedStories.length * cardWidth}px`,
                }}
                transition={{
                    type: "tween",
                    ease: "linear",
                }}
            >
                {duplicatedStories.map((story, index) => (
                    <motion.div
                        key={`${story.name}-${index}`}
                        className="flex-shrink-0 h-full" // Added h-full
                        style={{ width: "320px" }}
                        whileHover={{ 
                            scale: 1.05,
                            y: -8,
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                    >
                        <div className="h-full"> {/* Wrapper to ensure full height */}
                            <SingleStudentStoryDetailsCard
                                description={story.description}
                                image={story.image}
                                name={story.name}
                                position={story.position}
                                ratingValue={story.ratingValue}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            
            {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 bottom-0 left-0 z-10 w-20 pointer-events-none bg-gradient-to-r from-[#F8F8F8] to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 z-10 w-20 pointer-events-none bg-gradient-to-l from-[#F8F8F8] to-transparent" />
        </div>
    );
}