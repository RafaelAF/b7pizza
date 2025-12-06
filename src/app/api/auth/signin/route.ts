import { createUserToken, validadeAuth } from "@/services/auth"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { email, password } = await request.json()
    if(!email || !password) {
        return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 })
    }
    const user = await validadeAuth(email, password)
    if(!user) return NextResponse.json({ success: false, message: 'Access denied' }, { status: 401 })

    const token = await createUserToken(user.id)

    return NextResponse.json({ success: true, token }, { status: 200 })
}
