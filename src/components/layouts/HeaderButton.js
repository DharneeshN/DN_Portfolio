import React from 'react'

const HeaderButton = () => {

    return (
        <div className="container">
            <div style={{ zIndex: 1 , marginRight:'20px' ,marginLeft:'45px'}}>
                <a href="#about"><button className="see">About me</button></a>
            </div> 
            <div style={{ zIndex: 1 , marginRight:'20px'}}>
                <a href="#works"><button className="see">Projects</button></a>
            </div>   
            <div style={{ zIndex: 1 , marginRight:'20px' }}>
                <a href="#ContactMe"><button className="see">Contact me</button></a>
            </div>     
        </div>
    )
}

export default HeaderButton
