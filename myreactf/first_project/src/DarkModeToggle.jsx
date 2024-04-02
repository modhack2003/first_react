const DarkModetoggle = () => {
  const setDarkMode = () =>{
    document.queryselector("body").setAttribute("data-theme" , "dark")
  }
  const setLightMode = () =>{
    document.queryselector("body").setAttribute("data-theme" , "light")
  }
  setDarkMode();
  setLightMode
}

export default DarkModetoggle;