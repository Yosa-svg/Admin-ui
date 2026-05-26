import React from 'react'

// Custom Icon wrapper component
// Usage: <Icon icon={FiMail} size={20} color="currentColor" className="..." />
function Icon(props) {
    const { icon: IconComponent, size = 20, color = 'currentColor', className = '' } = props;

    if (!IconComponent) return null;

    return (
        <span className={`inline-flex items-center justify-center ${className}`}>
            <IconComponent size={size} color={color} />
        </span>
    );
}

export default Icon
