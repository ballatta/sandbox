
const myFunc = function(thing) {
    return thing
}


export const ArrayMap = (props) => {

    const messages = []
    for (let i=0; i < 100; i++) {
        messages.push(
            'Hey there for the ' + i + 'th time.'
        )
    }
    return (
        <div>
            <h1>Array Map</h1>
            {
                messages.map(myFunc)
            }
                    
                    
                    
                    {/* (msg) => {
                    return <p>{msg}</p>
                }) */}
        </div>
    )
}