import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const Search = () => {
    return (
        <div className="col-6 container bg-light p-4 my-3 rounded-pill">
            <h5 className="text-center text-muted">Looking for something?</h5>
            <Form className="d-flex container my-3">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button className="ms-2 border" variant="outline-primary">Search</Button>
            </Form>
        </div>
    );
};

export default Search;