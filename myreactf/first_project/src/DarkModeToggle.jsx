const DarkModetoggle = () => {
  const setDarkMode = () =>{
    document.queryselector("body").setAttribute("data-theme" , "dark")
  }
  const setLightMode = () =>{
    document.queryselector("body").setAttribute("data-theme" , "light")
  }
  const toggleTheme = e =>{
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return(
  <div className="dark_mode">
    <input  type="checkbox" id="darkmode_toggle" className="dark_mode_input" onChange={toggleTheme}/>
    <label className="dark_mode_label" htmlFor form="darkmode-toggle">

    </label>
  </div>

  );
}

export default DarkModetoggle;