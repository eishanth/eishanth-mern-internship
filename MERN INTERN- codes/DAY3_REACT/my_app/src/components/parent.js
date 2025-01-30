import { Child } from "./child";

function Parent(){
    const msg = "hello from parent";
    return(
        <div>
            <h1>This is a parent component</h1>
            <Child msg={msg} />
        </div>
    )
}
export default Parent;