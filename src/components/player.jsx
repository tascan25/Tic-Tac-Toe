import { useState } from "react"
function Players({initialName, symbol,isActive}) {
    const [name,setname] = useState(initialName)
    const [first, setfirst] = useState(false)
    function handelClick() {
        // setfirst(!first)//if our new state is depend upon the previous state we should not update the state like this, instead we should use the arrow function for doing that, as with the help of the arrow function we get the latest value of our state
        setfirst((editing) => { return !editing })
        
    }
    function handelChange(e){
        setname(e.target.value)
    }
    // let Playername =  <span className="player-name">{name}</span>
    // if(first){Playername=<input type="text" required value={name} onChange={handelChange}/>}
    // onChange attribute here will trigger for every key stroke and,
    //  it will provide us with an event parameter which will be automaticaly,
    //   passed to the handelChange function and through that,
    //  event parameter we can access the value of the input field...
    //this concept is also called two way binding..
    return (
        <li className={isActive?"active":undefined}>
            <span id="player">
                {!first?<span className="player-name">{name}</span>:<input type="text" required value={name} onChange={handelChange}/>}

                <span className="Player-symbol">{symbol}</span>
            </span>
            <button onClick={handelClick}>{!first ? "Edit" : "Save"}</button>
        </li>
    )
}
export default Players