import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request) {
    try {
        
        const {userId} = getAuth(request)
        const { address, items } = await request.json();

        if (!address || items.length === 0) {
            return NextRequest.json({ success: false, message: 'Invalid data' });
        }

        // Calculate amount using items
        // const amount = await items.reduce(async (acc, item) => {
        //     const product = await Product.findById(item.product);
        //     if (!product) {
        //         throw new Error(`Product with ID ${item.product} not found`);
        //     }
        //     return await acc + product.offerPrice * item.quantity;
        // },0)

        let amount = 0; // Initialize amount to a default value
try {
    amount = await items.reduce(async (acc, item) => {
        const product = await Product.findById(item.productId || item.product);
        if (!product) {
            throw new Error(`Product not found for item: ${JSON.stringify(item)}`);
        }
        return await acc + product.offerPrice * item.quantity;
    }, 0);
} catch (error) {
    console.error(error.message);
    // Graceful error handling or fallback logic
}

        

        await inngest.send({
            name: 'order/created',
            data:{
                userId,
                address,
                items,
                amount: amount + Math.floor(amount * 0.02),
                date: Date.now()
            }
        })

        // Clear the User Cart
        const user = await User.findById(userId)
        user.cartItems = {}
        await user.save()

        return NextResponse.json({ success: true, message: 'Order Placed'})

    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: error.message})
    }
}




// import { inngest } from "@/config/inngest";
// import Product from "@/models/Product";
// import User from "@/models/User";
// import { getAuth } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from "next/server";



// export async function POST(request) {
//     try {
        
//         const {userId} = getAuth(request)
//         const { address, items } = await request.json();

//         if (!address || items.length === 0) {
//             return NextRequest.json({ success: false, message: 'Invalid data' });
//         }

//         // Calculate amount using items
//         const amount = await items.reduce(async (acc, item) => {
//             const product = await Product.findById(item.product);
//             return await acc + product.offerPrice * item.quantity;
//         },0)

//         await inngest.send({
//             name: 'order/created',
//             data:{
//                 userId,
//                 address,
//                 items,
//                 amount: amount + Math.floor(amount * 0.02),
//                 date: Date.now()
//             }
//         })

//         // Clear the User Cart
//         const user = await User.findById(userId)
//         user.cartItems = {}
//         await user.save()

//         return NextResponse.json({ success: true, message: 'Order Placed'})

//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({ success: false, message: error.message})
//     }
// }