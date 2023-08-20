import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './formcss.css'

function EditPage() {

    const [formData, setFormData] = useState({
        title: '',
        date: new Date().toISOString().slice(0, 10),
        description: '',
        author: '',
        content: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        window.location.href = `/${formData.title}`
    };

    return (
        <div className="container">
            <h1 className="mb-5">Create a New Post</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title *</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="glowing-border mb-4 "
                        required
                    />

                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description *</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="glowing-border mb-4"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author *</Form.Label>
                    <Form.Control
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="glowing-border mb-4"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Label>Content *</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="glowing-border mb-4"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default EditPage;
