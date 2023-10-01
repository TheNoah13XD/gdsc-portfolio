'use client'

import Link from "next/link";
import { FC, useState } from "react";

// firebase
import { useAuth } from "@/context/AuthContext";

// components
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import Toast from "@/components/ui/Toast";

const Auth: FC = () => {

    const [isLogin, setIsLogin] = useState(true);

    const { signIn, signUp } = useAuth();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("There is an error");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const { email, password } = form;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            setMessage("Please fill in all the fields");
        } else if (!emailRegex.test(email)) {
            setMessage("Please enter a valid email");
        } else if (password.length < 6) {
            setMessage("Password must be at least 6 characters long");
        } else {
            try {
                if (isLogin) {
                    await signIn(email, password);
                } else {
                    await signUp(email, password);
                }
                return;
            } catch (error) {
                setMessage(typeof error === "string" ? error : (error as Error).message);
            }
        }

        setVisible(true);
        setInterval(() => {
            setVisible(false);
        }, 2000);
    };

    const { user } = useAuth();

    return (
        <>
            <Toast visible={visible} message={message} />
            <div className="auth-page-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-flex">
                        <span>Email: </span>
                        <div className="input-container">
                            <input
                                type="text"
                                name="email"
                                autoComplete="off"
                                required
                                value={form.email}
                                onChange={(e) => {
                                    setForm({
                                        ...form,
                                        email: e.target.value,
                                    });
                                }}
                            />
                            <label htmlFor="email" className="label-name"></label>
                        </div>
                    </div>
                    <div className="input-flex">
                        <span>Password: </span>
                        <div className="input-container">
                            <input
                                type="password"
                                name="password"
                                autoComplete="off"
                                required
                                value={form.password}
                                onChange={(e) => {
                                    setForm({
                                        ...form,
                                        password: e.target.value,
                                    });
                                }}
                            />
                            <label htmlFor="password" className="label-name"></label>
                        </div>
                    </div>
                    <div className="auth-controls">
                        {isLogin ? (
                            <>
                                <div className="display-f gap-4 align-i-c">
                                    <div onClick={
                                        () => {
                                            setIsLogin(false);
                                        }
                                    }>
                                        <Button type="tonal">Sign Up</Button>
                                    </div>
                                    <p className="black fw-md">New User?</p>
                                </div>
                                <div>
                                    <IconButton type="tonal" icon="north_east" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="display-f gap-4 align-i-c">
                                    <div onClick={
                                        () => {
                                            setIsLogin(true);
                                        }
                                    }>
                                        <Button type="tonal">Sign In</Button>
                                    </div>
                                    <p className="black fw-md">Old User?</p>
                                </div>
                                <div>
                                    <IconButton type="tonal" icon="north_east" />
                                </div>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default Auth;