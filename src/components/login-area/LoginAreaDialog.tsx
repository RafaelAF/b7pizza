"use client"

import { useAuth } from "@/stores/auth"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react"
import { LoginAreaStepEmail } from "./LoginAreaStepEmail"
import { LoginAreaStepSignUp } from "./LoginAreaStepSignUp"
import { getCookie } from "cookies-next/client"
import { LoginAreaStepSignIn } from "./LoginAreaStepSignIn"

type Step = "EMAIL" | "SIGNUP" | "SIGNIN"

export const LoginAreaDialog = () => {
    const auth = useAuth()
    const [step, setStep] = useState<Step>("EMAIL")
    const [emailField, setEmailField] = useState('')

    useEffect(()=>{
        const token = getCookie('token')
        console.log(token)
        if(token) auth.setToken(token)
    }, [])

    const handleStepEmail = (hasEmail: boolean, email: string) => {
        console.log('asdasd', hasEmail)
        setEmailField(email)
        if(hasEmail){
            setStep("SIGNIN")
        }else{
            setStep("SIGNUP")
        }
    }

    return (
        <Dialog
            open={auth.open}
            onOpenChange={open => auth.setOpen(open)}
        >
            <DialogContent className="sm:max-w[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        {step !== "EMAIL" && <Button 
                            variant={"ghost"}
                            size="icon"
                            onClick={()=>setStep("EMAIL")}
                        >
                                <ArrowLeft className="size-4" />
                            </Button>}


                        {step === "EMAIL" && "Login / Cadastro"}
                        {step === "SIGNIN" && "Login"}
                        {step === "SIGNUP" && "Cadastro"}
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    {step === "EMAIL" && 
                        <LoginAreaStepEmail onValidate={handleStepEmail} />
                    }
                    {step === "SIGNIN" && 
                        <LoginAreaStepSignIn email={emailField} />
                    }
                    {step === "SIGNUP" && 
                        <LoginAreaStepSignUp email={emailField}  />
                    }
                </div>
            </DialogContent>
        </Dialog>
    )
}