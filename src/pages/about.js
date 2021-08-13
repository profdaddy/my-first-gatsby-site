import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = (props) => {
    return (
        <main>
            <title>About Me</title>
            <h1>About Me</h1>
            <p>Hi. It's me, {props.name}.</p>
            <Link to="/">Back to Home</Link>
        </main>
    )
}

export default AboutPage