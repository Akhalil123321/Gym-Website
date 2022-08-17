import React from "react";
import './join.css'
const Join = () => {
    const [forms, setForms] = React.useState({
        email:''
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setForms({[name] : value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`welcome ${forms.email}`)
    }
    console.log(forms)
    return(
        <section className="join-cont">
            <div className="join-title">
                <div>
                    <div className="line"></div>
                    <span className="normal-title">ready to</span>
                    <span className="normal-title transparent-title">level up</span>
                </div>
                <div>
                    <span className="normal-title transparent-title">your body</span>
                    <span className="normal-title">with us?</span>
                </div>
            </div>
            <form className="email-input" onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Enter your Email Address here..."
                name="email"
                onChange={handleChange}
                value={forms.email}
                />
                <button className='btn l-btn orange'>Join Now</button>
            </form>
        </section>
    )
}
export default Join



