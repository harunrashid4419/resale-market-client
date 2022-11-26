import { useEffect, useState } from "react"

const useBayer = email =>{
    const [isBayer, setIsBayer] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
        if(email){
            fetch(`http://localhost:5000/users/bayer/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsBayer(data.isBayer);
                setIsLoading(false);
            })
        }
    }, [email]);
    return [isBayer, isLoading];
}
export default useBayer;