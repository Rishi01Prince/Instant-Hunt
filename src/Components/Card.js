import React from 'react'

export default function Card() {
    return (
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
            <img class="card-img-top" src="/Images/Scooty.jpg" alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Rent a Scooty</h5>
                <p class="card-text">6 hour for 600 rupess.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>

                <div className='container w-100'>
                    {/* drop down for quantity */}

                    <select className='m-2 h-100 w-100 bg-success rounded'>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}></option>
                            )
                        })}
                    </select>

                    <select className='m-2 h-100   bg-success rounded'>
                        <option value="half">Half</option>
                        <option value="Full">Half</option>
                    </select>

                    <div className='d-inline h-100'>Total Price</div>
                </div>
            </div>
        </div>
    )
}
