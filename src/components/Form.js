import React from 'react'

const Form = () => {
    return (
        <div>
            <div>
                <form action="https://formspree.io/f/xyybjoka" method="POST">
                    <div className="form-list">
                        <div>
                            <input className="input" type="email" name="email" placeholder="email"/>
                        </div>
                        <button type="submit" className="button is-link">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
