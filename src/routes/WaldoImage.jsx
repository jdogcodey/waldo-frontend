export default function WaldoImage() {


    async function clickImg(e) {
        let imgRect = e.target.getBoundingClientRect();
        let x = e.clientX - imgRect.left;
        let y = e.clientY - imgRect.top;
        console.log(x)
        console.log(y)
        // const baseURL = import.meta.env.VITE_API_BASE_URL;
        // const response = await fetch(`${baseURL}/endgame`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: {
        //         x: x,
        //         y: y,
        //         id: id,
        //         username: username,
        //     }
        // })
    }
    return (
        <img src='../assets/wp7156925-wheres-wally-wallpapers.jpg' alt="Where's Waldo... I can't give you clues" onClick={clickImg()}/>
    )
}