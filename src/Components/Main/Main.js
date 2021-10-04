import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Search from '../Search/Search';
import Service from '../Service/Service';

const Main = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("/fakedata.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <main>
            <Search></Search>
            <section className="container">
                <h1 className="text-center">Our Services</h1>
                <Row xs={1} md={4} className="g-4">
                    {
                        services.slice(2, 10).map(service => <Service
                            service={service}
                            key={service.id}
                        ></Service>)
                    }
                </Row >
            </section>
        </main>
    );
};

export default Main;