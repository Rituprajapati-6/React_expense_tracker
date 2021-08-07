import './Card.css';
//Card will serve as a re-usable wrapper
const Card = (props) => {
    const classes = 'card '+ props.className; //any value set to the classname prop will be added to the classes which will be added to the div below. 

    return <div className={classes}>{props.children}</div>;    //the content between the Card tags in the ExpenseItems.js file will be available to the props.children 
}


export default Card;