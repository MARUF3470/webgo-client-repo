import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='h-96'>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.

                        The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;