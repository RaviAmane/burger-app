import React from 'react';
import cssClasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={cssClasses.BuildControls}>
        <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctl => (
            <BuildControl
                key={ctl.label}
                label={ctl.label}
                added={() => props.addIngredient(ctl.type)}
                removed={() => props.removeIngredient(ctl.type)}
                disabled={props.disabledInfo[ctl.type]} />
        ))}
        <button className={cssClasses.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;