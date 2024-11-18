export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return{
        modelScale: isSmall ? 1.1 : isMobile ? 1.2 : isTablet ? 1.3: 1.3,
        modelPosition: isSmall ? [0,-0.5,0] : isMobile ? [0, -0.5 ,0]
        : isTablet ? [0, -1, 0] : [0, -0.9, 0]
    }
}