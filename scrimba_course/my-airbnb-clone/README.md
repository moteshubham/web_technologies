# myReadMe



**error i GOT  resolved**
# Each child in an array should have a unique "key" prop.
Be careful when iterating over arrays!!

It is a common misconception that using the index of the element in the array is an acceptable way of suppressing the error you are probably familiar with:
However, in many cases it is not! This is anti-pattern that can in some situations lead to unwanted behavior.

**[more about this]([https://](https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js))**


# Final workaournd solution found is

**[link to answer]([https://](https://bobbyhadz.com/blog/react-key-is-not-a-prop-trying-to-access-it-results-undefined))**

```javascript
App.jsx
function App() {
  const cards = bnbData.map((item, key) => { //key here
    return (
      <Card
        key={key}  //this line
        myKey={key}  //this line
        title={item.title}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        price={item.price}
      />
    );
```

```javascript
Card.jsx
export default function Card( props, myKey ) { //myKey in this line
    console.log(myKey) //log here
  return (
    <div className="card">
      <img src={`/src/assets/${props.img}` } className="card--img" />
      <div className="card--stats">
        <img src="/src/assets/star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount})</span>
        <span className="grey">{props.location}</span>
      </div>
      <p>{props.title}</p>    
            <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
}
```