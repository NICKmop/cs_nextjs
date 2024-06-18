export async function getMyinfo() {
    console.log("befroe promise Time");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("after promise Time");
    return ;
}

export default function About(){
    let info = getMyinfo();

    return(
        <div>
            About me
        </div>
    )
}