// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://laptop-server-inky.vercel.app/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // setIsAdmin(data.isAdmin);
                    setIsSeller(data.isSeller)
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [ isSellerLoading,isSeller]
};

export default useSeller;