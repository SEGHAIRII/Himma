const handleHearing=(e,text)=>{
    e.preventDefault()
    const value=new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(value)
}

export default handleHearing