import { createUser, createUserToken, hasEmail } from "@/services/auth"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { name, email, password } = await request.json()

    if(!name || !email || !password) return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 })

    const has = await hasEmail(email)
    if(has) return NextResponse.json({ success: false, message: 'Email already in use' }, { status: 400 })

    const newUser = await createUser(name, email, password)

    if(!newUser) return NextResponse.json({ success: false, message: 'Error creating user' }, { status: 500 })

    const token = await createUserToken(newUser.id)

    return NextResponse.json({ success: true, token }, { status: 201 })
}