import React, {useState} from 'react'
import './Form.css'

const From = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [area, setArea] = useState('')

    const [errorN, setEN] = useState('')
    const [nameShow, setNameShow] = useState(false)

    const [errorP, setEP] = useState('')
    const [phoneShow, setPhoneShow] = useState(false)

    const [errorD, setED] = useState('')
    const [dateShow, setDateShow] = useState(false)

    const formHandler = (e) => {
        e.preventDefault()

        if (name === '') {
            setEN('Empty Field')
            setNameShow(true)
        } else if (name.length < 10) {
            setEN('Must be more than 10 characters')
            setNameShow(true)
        } else {
            setNameShow(false)
        }

        if (phone === '') {
            setEP('Empty Field')
            setPhoneShow(true)
        } else {
            setPhoneShow(false)
        }
        if (area === '') {
            setED('Empty Field')
            setDateShow(true)
        } else {
            setDateShow(false)
        }
        
        if (nameShow && phoneShow) {
            console.log('try again')
        } else {
            console.log('final name: ',name)
            console.log('final email: ',phone)
            setName('')
            setPhone('')
            setArea('')
        }
    }

    const inputNameHandler = (e) => {
        setName(e.target.value)
        // console.log(name)
    }
    const inputPhoneHandler = (e) => {
        setPhone(e.target.value)
        // console.log(phone)
    }
    const inputAreaHandler = (e) => {
        setArea(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="appointment-form form-wraper">
            <h3 className="title">Book Appointment</h3>
            <form action="#" onSubmit={formHandler}>
                <div className="form-group">
                    <select className="form-select form-control">
                        <option>Selecty Department</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-select form-control">
                        <option>Select Doctor</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        </select>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" value={name} placeholder="Your Name" onChange={inputNameHandler}/>
                    {nameShow && <h4 className='error btn btn-danger'>{errorN}</h4>}  
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" value={phone} placeholder="Phone Numbers" onChange={inputPhoneHandler}/>
                    {phoneShow && <h4 className='error btn btn-danger'>{errorP}</h4>}  
                </div>
                <div className="form-group">
                    <input type="date" className="form-control" value={area} onChange={inputAreaHandler}/>
                    {dateShow && <h4 className='error btn btn-danger'>{errorD}</h4>}  
                </div>
                <button type="submit" className="btn btn-secondary btn-lg">Appointment Now</button>
            </form>
        </div>
    )
}

export default From
