'use client';

import { FC, useState } from "react";

// auth
import { useAuth } from "@/context/AuthContext"
import Auth from "@/components/Auth"
import { Ring } from '@uiball/loaders'

// components
import IconButton from "@/components/ui/IconButton";
import Toast from "@/components/ui/Toast";

const ContactPage: FC = ({}) => {

    const { user, loading } = useAuth();

	if (!user && loading) {
		return (
			<div className="display-f w-full h-full justify-c align-i-c">
				<Ring />
			</div>
		)
	} else if (!user && !loading) {
		return (
			<Auth />
		)
	}

    const [form, setForm] = useState({
        name: "",
        text: "",
        email: ""
    });
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
      
            if (response.ok) {
                setVisible(true);
                setMessage("Email sent! Thanks!");
                setTimeout(() => {
                    setVisible(false);
                }, 2000);
            } else {
                setVisible(true);
                setMessage("Something went wrong!");
                setTimeout(() => {
                    setVisible(false);
                }, 2000);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }

    }

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Toast visible={visible} message={message} />
            <div className="contact-container">
                <div className="basics">
                    <h1>connect</h1>
                    <div className="subtitle">
                        <span>feeling confused or inspired?</span>
                        <span>impressed or critisism?</span>
                        <span>bugs?</span>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="input-flex">
                                <span>Hey! I'm </span>
                                <div className="input-container">
                                    <input type="text" name="name" autoComplete="off" required value={form.name} onChange={handleChange} />
                                    <label htmlFor="name" className="label-name"></label>
                                </div>
                                <span>,</span>
                            </div>
                            <div className="input-flex input-pt">
                                <span>Looking for </span>
                                <div className="input-container">
                                    <input type="text" name="text" autoComplete="off" required value={form.text} onChange={handleChange} />
                                    <label htmlFor="text" className="label-name"></label>
                                </div>
                                <span>,</span>
                            </div>
                            <div className="input-flex input-pt">
                                <span>And my email is </span>
                                <div className="input-container">
                                    <input type="text" name="email" autoComplete="off" required value={form.email} onChange={handleChange} />
                                    <label htmlFor="email" className="label-name"></label>
                                </div>
                                <span>,</span>
                            </div>
                        </div>
                        <div className="redirect">
                            <IconButton icon="north_east" />
                            <img src="/contact-thumbnail.png" alt="contact" />
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ContactPage;