function Footer() {
    return (
        <footer>
            <div>  
                <img src={require("../icons_assets/lemon_yellow.png")} alt="Lemon Logo" width={100} />
            </div>
            <div>
                <ul>
                    <li><h3>Navigation</h3></li>
                    <li><a href="/"> Home </a></li>
                    <li><a href="/#about"> About </a></li>
                    <li><a href="/#menu"> Menu </a></li>
                    <li><a href="/Booking"> Reserve </a></li>
                    <li><a href="/#menu"> Order </a></li>
                    <li><a href="/"> Login </a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><h3>Contact</h3></li>
                    <li> Address </li>
                    <li> 517-845-9000 </li>
                    <li> info@ll.com </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><h3>Social Media</h3></li>
                    <li><a href="/"> Facebook </a></li>
                    <li><a href="/"> Instagram </a></li>
                    <li><a href="/"> LinkedIn </a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer