import { getLoggerUserFromHeader } from "@/services/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { cart } = await request.json()
    const loggedUser = await getLoggerUserFromHeader()

    console.log('CARRINHO: ', cart)
    console.log('LOGGADO: ', loggedUser)

    return NextResponse.json({blabla: true})
}