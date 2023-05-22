import React, {useState} from 'react';
import styles from "./styles/Contact.module.css";
import PageCard from "../components/PageCard";

const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setForm({ name: '', email: '', message: '' }); // Clear the form
    };
    return (
        <div>
            <PageCard
                cardTitle1="CONTACT"
                cardClassName1={styles.firstCard}
                cardClassName2={styles.secondCard}
                children1={
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
                            <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} required />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                }
            />
        </div>
    );
}

export default Contact;