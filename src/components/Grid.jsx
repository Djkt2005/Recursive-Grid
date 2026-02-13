import React, { useState } from 'react';
import Box from './Box';

const Grid = () => {
    const [grid, setGrid] = useState(Array(9).fill(0));

    const handleClick = (clickedIndex) => {
        if (grid[clickedIndex] >= 15) return;
        const nextGrid = [...grid];
        const updateBox = (index, delta) => {
            if (index < 0 || index >= 9) return;
            if (nextGrid[index] >= 15) return;
            const newValue = nextGrid[index] + delta;
            nextGrid[index] = newValue;
            if (newValue !== 0 && newValue % 3 === 0) {
                if (index % 3 !== 2) {
                    updateBox(index + 1, -1);
                }
            }
            if (newValue !== 0 && newValue % 5 === 0) {
                if (Math.floor(index / 3) !== 2) {
                    updateBox(index + 3, 2);
                }
            }
        };
        updateBox(clickedIndex, 1);
        setGrid(nextGrid);
    };

    return (
        <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl shadow-2xl border border-gray-100">
            {grid.map((value, index) => (
                <Box
                    key={index}
                    index={index}
                    value={value}
                    isLocked={value >= 15}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Grid;
