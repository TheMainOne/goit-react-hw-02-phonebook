import React from "react";
import { Form } from "./ContactForm.styled";
import { Label } from "./Lavel.styled";
import { Input } from "./Input.styled";
import { Button } from "./Button.styled";

const ContactForm = ({ handleSubmit }) => {
    return <Form onSubmit={handleSubmit}>
        <Label>
            Write your name here 
            <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </Label>
        <Label>
            Write your phone here 
            <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </Label>
        <Button type="submit">add contact</Button>
    </Form>
};

export default ContactForm;
