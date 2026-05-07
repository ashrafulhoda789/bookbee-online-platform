"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: '/'

        });

        console.log(data, error);
        if (error) {
            toast.error(`${error.message}`);
        }
        else {
            toast.success('Logged your acoount');
            
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

            <Card
                className="w-full max-w-md md:max-w-lg border border-yellow-200 shadow-xl rounded-3xl px-6 py-8 md:px-10"
            >

                <div className="text-center mb-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        Sign In
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm">
                        Join BookBee and explore thousands of books
                    </p>

                </div>

                <Form
                    className="w-full flex flex-col gap-5"
                    onSubmit={onSubmit}
                >

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >

                        <Label>Email</Label>

                        <Input
                            placeholder="john@example.com"
                            className="w-full"
                        />

                        <FieldError />

                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {

                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }

                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >

                        <Label>Password</Label>

                        <Input
                            placeholder="Enter your password"
                            className="w-full"
                        />

                        <FieldError />

                    </TextField>

                    <div className="flex gap-2 pt-2">

                        <Button
                            type="submit"
                            className=" bg-yellow-400 hover:bg-yellow-500 
                            text-gray-900 font-semibold"
                        >
                            <Check />
                            Login
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className=""
                        >
                            Reset
                        </Button>

                    </div>

                </Form>

            </Card>

        </div>
    );
}