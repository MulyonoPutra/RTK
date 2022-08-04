import React from 'react';
import Child from './Child';
import Parent from './Parent';

const Container = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <Child />
            </div>
            <div>
                <Parent />
            </div>
        </div>
    );
};

export default Container;
