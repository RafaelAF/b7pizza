import { hasEmail } from "@/services/auth"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { email } = await request.json()

    if(!email) return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 })

    const has = await hasEmail(email)
    if(!has) return NextResponse.json({ success: false, message: 'Email dont exist' })

    return NextResponse.json({ success: true }, { status: 200 })
}