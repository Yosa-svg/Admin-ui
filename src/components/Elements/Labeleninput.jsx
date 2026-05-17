import React from 'react'

function Labeleninput(props) {
    const { label, type, placeholder, name, id, value, onChange, error } = props;
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
                {label}
            </label>
            <input
                type={type}
                className="w-full px-4 py-3 text-sm rounded-md bg-special-mainBg border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-0 transition-colors"
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    )
}

export default Labeleninput