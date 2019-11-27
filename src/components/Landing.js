import React from 'react'

function Landing() {
    return (
        <React.Fragment>
            <div style={navStyle}>
                Nav Goes Here
            </div>
            <div style={containerStyle}>
                <div style={leftInfoStyle}>
                    <h1 style={titleStyle}>Moving the land registry onto<br/>the <span style={{color:"#00A6ED"}}>blockchain.</span></h1>
                    <h3 style={subheadlineStyle}>We leverage on the Ethereum network to create a transparent land <br/> processing system</h3>
                    <img style={imgStyle} src="./logo2x.png"/>
                </div>
                <div style={rightInfoStyle}>
                    <h2>What we offer</h2>
                    <ul style={listStyle}>
                        <li style={itemStyle}>Land Registration</li>
                        <li style={itemStyle}>Land Transfer</li>
                        <li style={itemStyle}>Land Lookup</li>
                    </ul>
                    <button style={btnSyle}>Get Started With Digissets</button>
                </div>
            </div>
        </React.Fragment>
    )
}

const containerStyle = {
    width:"90%",
    margin:"auto",
    fontFamily:"Arial, Helvetica, sans-serif",
}

const navStyle = {
    marginBottom:"40px",
}

const titleStyle = {
    color:"#0D2C54",
    lineHeight:"1.5em",
    fontSize:"2.5em"
}

const subheadlineStyle = {
    marginTop:"-20px",
    color:"#0D2C54",
    fontSize:"0.88em",
    lineHeight:"1.5em"
}

const imgStyle = {
    margin:"-40px 0 0 20px ",
    width:"400px",
    height:"400px"
}

const infoContainerStyle = {
    display:"inline-block",
    verticalAlign:"top"
}

const leftInfoStyle = {
 ...infoContainerStyle,
 width:"59%"
}

const rightInfoStyle = {
    ...infoContainerStyle,
    padding:"10px",
    width:"29%",
    textAlign:"center",
    margin:"70px 5%",
    borderRadius:"15px",
    boxShadow:"0px 3px 3px rgba(0,0,0,0.3)"
}

const listStyle = {
    fontSize:"1.2em",
    listStyle:"none",
    textAlign:"left",
    width:"60%",
    margin:"auto"
}

const itemStyle = {
    marginBottom:"20px",
    color:"rgba(0,0,0,0.6)",
    fontWeight:"bold"
}

const btnSyle = {
    border:"none",
    borderRadius:"25px",
    boxShadow:"0px 3px 3px rgba(0,0,0,0.3)",
    padding:"10px 25px",
    fontWeight:"600",
    fontSize:"1em",
    background:"#0D2C54",
    color:"#fff"
}

export default Landing