import connectDB from "@/config/db"
import authSeller from "@/lib/authSeller"
// import Address from "@/models/Address"
import Order from "@/models/Order"
import { getAuth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"



export async function GET(request){
    try {

        const { userId } = getAuth(request)
        if (!userId) {
            return NextResponse.json({ success: false, message: "Unauthorized: No user ID found" })
        }

        const isSeller = await authSeller(userId)

        if (!isSeller) {
            return NextResponse.json({ success: false, message: 'not authorized' })
        }

        await connectDB()

        // Address.length

        const orders = await Order.find({}).populate('address').populate(' items.product')

        return NextResponse.json({ success: true, orders })

    } catch (error) {
        console.error("GET /orders Error:", error);
        return NextResponse.json({ success: false, message: error.message })
    }
}